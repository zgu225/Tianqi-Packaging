import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductSubcategory, productCategories } from "@/data/products";

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
  const siblingSubcategories = category.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );

  return (
    <main className="min-h-screen pt-24">
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-6">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                {category.name}
              </p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-primary">
                {subcategory.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {subcategory.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent hover:text-accent-foreground"
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/products#${category.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-primary/20 px-7 py-3 text-sm font-semibold text-primary transition hover:border-primary"
                >
                  View {category.menuName}
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200 shadow-xl">
              <Image
                src={subcategory.image}
                alt={subcategory.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-3">
          <DetailList title="Applications" items={subcategory.applications} />
          <DetailList title="Structure Options" items={subcategory.options} />
          <DetailList title="Finishing Options" items={subcategory.finishes} />
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                More in {category.menuName}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary">
                Related Product Types
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Full catalogue
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {siblingSubcategories.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${category.slug}/${item.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-7 shadow-sm">
      <h2 className="text-lg font-bold text-primary">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-gray-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
