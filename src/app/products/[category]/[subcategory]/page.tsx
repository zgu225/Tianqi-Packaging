import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { getProductSubcategory, productCategories } from "@/data/products";
import ProductDetailContent from "./ProductDetailContent";

type ProductDetailPageProps = {
  params: {
    category: string;
    subcategory: string;
  };
};

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    })),
  );
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = getProductSubcategory(params.category, params.subcategory);

  if (!product) {
    return {
      title: "Product Not Found | Tianqi Packaging",
    };
  }

  return {
    title: `${product.subcategory.name} | ${product.category.name} | Tianqi Packaging`,
    description: product.subcategory.summary,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductSubcategory(params.category, params.subcategory);

  if (!product) {
    notFound();
  }

  const { category, subcategory } = product;
  const galleryImages = getGalleryImages(category.slug, subcategory.slug, subcategory.image);

  return <ProductDetailContent product={product} galleryImages={galleryImages} />;
}

function getGalleryImages(categorySlug: string, subcategorySlug: string, fallbackImage: string) {
  const directory = path.join(
    process.cwd(),
    "public",
    "products",
    categorySlug,
    subcategorySlug,
  );

  if (!fs.existsSync(directory)) {
    return [{ src: fallbackImage, alt: subcategorySlug }];
  }

  const imageFiles = fs
    .readdirSync(directory)
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .filter((file) => !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (imageFiles.length === 0) {
    return [{ src: fallbackImage, alt: subcategorySlug }];
  }

  return imageFiles.map((file) => ({
    src: `/products/${categorySlug}/${subcategorySlug}/${encodeURIComponent(file)}`,
    alt: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  }));
}

