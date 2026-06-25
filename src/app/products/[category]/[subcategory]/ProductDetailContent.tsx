"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  getLocalizedProductSubcategoryResult,
  getProductSubcategory,
} from "@/data/products";

type ProductDetailContentProps = {
  product: NonNullable<ReturnType<typeof getProductSubcategory>>;
  galleryImages: Array<{ src: string; alt: string }>;
};

const pageCopy = {
  en: {
    back: "Back to Products",
    galleryTag: "Product Gallery",
    examples: "Examples",
    galleryText:
      "Browse product references from this category. Add more images to the matching folder in public/products and they will appear here automatically.",
    briefTag: "Product Brief",
    briefTitle: "Custom Scope",
    oem: "OEM / ODM",
    applications: "Applications",
    structures: "Structures",
    finishes: "Finishes",
    flow: "Development Flow",
    workflow: ["Structure", "Material", "Print", "Finish", "Insert"],
    applicationsList: "Applications",
    structuresList: "Structure Options",
    finishesList: "Finishing Options",
    moreIn: "More in",
    related: "Related Product Types",
    catalogue: "Full catalogue",
  },
  cn: {
    back: "返回产品目录",
    galleryTag: "产品图库",
    examples: "案例展示",
    galleryText:
      "浏览此小类的产品参考图。将更多图片放入 public/products 对应目录后，页面会自动显示。",
    briefTag: "产品概要",
    briefTitle: "定制范围",
    oem: "OEM / ODM",
    applications: "应用场景",
    structures: "结构方案",
    finishes: "表面工艺",
    flow: "开发流程",
    workflow: ["结构", "材料", "印刷", "工艺", "内托"],
    applicationsList: "应用场景",
    structuresList: "结构选项",
    finishesList: "工艺选项",
    moreIn: "更多",
    related: "相关产品小类",
    catalogue: "完整目录",
  },
} as const;

export default function ProductDetailContent({
  product,
  galleryImages,
}: ProductDetailContentProps) {
  const { lang } = useLang();
  const copy = pageCopy[lang];
  const { category, subcategory } = getLocalizedProductSubcategoryResult(product, lang);
  const siblingSubcategories = category.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );

  return (
    <main className="min-h-screen pt-24">
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-6">
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
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-7 py-3 text-sm font-semibold text-primary transition hover:border-primary"
                >
                  <ArrowLeft size={16} />
                  {copy.back}
                </Link>
              </div>
            </div>

            <ProductBriefPanel
              applications={subcategory.applications}
              copy={copy}
              finishes={subcategory.finishes}
              options={subcategory.options}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {copy.galleryTag}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
              {subcategory.name} {copy.examples}
            </h2>
            <p className="mt-3 text-gray-500">{copy.galleryText}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <a
                key={image.src}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-lg bg-stone-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    quality={95}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-3">
          <DetailList title={copy.applicationsList} items={subcategory.applications} />
          <DetailList title={copy.structuresList} items={subcategory.options} />
          <DetailList title={copy.finishesList} items={subcategory.finishes} />
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                {copy.moreIn} {category.menuName}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary">
                {copy.related}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              {copy.catalogue}
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

function ProductBriefPanel({
  applications,
  copy,
  finishes,
  options,
}: {
  applications: string[];
  copy: typeof pageCopy.en | typeof pageCopy.cn;
  finishes: string[];
  options: string[];
}) {
  return (
    <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-black/5">
      <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            {copy.briefTag}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-primary">
            {copy.briefTitle}
          </h2>
        </div>
        <div className="rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
          {copy.oem}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <BriefColumn title={copy.applications} items={applications} />
        <BriefColumn title={copy.structures} items={options} />
        <BriefColumn title={copy.finishes} items={finishes} />
      </div>

      <div className="mt-7 rounded-lg bg-stone-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {copy.flow}
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {copy.workflow.map((step, index) => (
            <div key={step} className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {index + 1}
                </span>
                {index < copy.workflow.length - 1 && (
                  <span className="h-px flex-1 bg-primary/20" />
                )}
              </div>
              <p className="mt-2 text-xs font-semibold text-primary">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BriefColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-primary">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
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
