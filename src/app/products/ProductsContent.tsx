"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProductsContent() {
  const { lang } = useLang();
  const t = translations[lang].productsPage;

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=1800&auto=format&fit=crop')" }}
        />
        <ScrollReveal className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.hero.tagline}</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">
            {t.hero.h1a}
            <br />
            {t.hero.h1b}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">{t.hero.p}</p>
          <Link href="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            {t.hero.cta}
          </Link>
        </ScrollReveal>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {t.categories.map((cat, i) => (
            <ScrollReveal key={cat.id}>
              <div id={cat.id} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
                <div className="md:w-1/2 relative h-[380px] w-full rounded-2xl overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${cat.img}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${cat.tagColor}`}>{cat.tag}</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-primary mb-4">{cat.name}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{t.featuresLabel}</p>
                      <ul className="space-y-2">
                        {cat.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{t.finishesLabel}</p>
                      <ul className="space-y-2">
                        {cat.finishes.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-6 mb-8 text-sm">
                    <div className="bg-stone-50 rounded-xl px-4 py-3">
                      <p className="text-gray-400 text-xs mb-1">{t.moqLabel}</p>
                      <p className="font-bold text-primary">{cat.moq}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl px-4 py-3">
                      <p className="text-gray-400 text-xs mb-1">{t.leadLabel}</p>
                      <p className="font-bold text-primary">{cat.lead}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
                    {t.productCta}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50">
        <ScrollReveal className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.cta.h2}</h2>
          <p className="text-gray-500 mb-8">{t.cta.p}</p>
          <Link href="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            {t.cta.cta}
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
