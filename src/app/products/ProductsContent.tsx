"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { getLocalizedProductCategories } from "@/data/products";
import { translations } from "@/lib/translations";

export default function ProductsContent() {
  const { lang } = useLang();
  const t = translations[lang].productsPage;
  const productCategories = getLocalizedProductCategories(lang);

  return (
    <main className="min-h-screen pt-24">
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=1800&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <ScrollReveal className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.hero.tagline}
            </span>
            <h1 className="mt-4 text-5xl font-bold leading-tight">
              {lang === "cn" ? "按类别浏览包装产品" : "Browse Packaging by Category"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              {lang === "cn"
                ? "大量图片和产品可以先按大类整理，再进入方盒、圆盒、说明书等小类页面单独查看。"
                : "Organize large image libraries by product type. Start with a major category, then open each subcategory for its own product details, options, and gallery space."}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto space-y-20 px-6">
          {productCategories.map((category) => (
            <ScrollReveal key={category.slug}>
              <div id={category.slug} className="scroll-mt-28">
                <div className="mb-8 max-w-2xl">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold uppercase tracking-widest text-accent">
                      {category.menuName}
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-primary">{category.name}</h2>
                    <p className="mt-3 text-gray-500">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.slug}
                      href={`/products/${category.slug}/${subcategory.slug}`}
                      className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-56">
                        <Image
                          src={subcategory.image}
                          alt={subcategory.name}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          {category.name}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-primary">{subcategory.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                          {subcategory.summary}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent">
                          {lang === "cn" ? "打开产品小类" : "Open product type"}
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
