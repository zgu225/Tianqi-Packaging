"use client";

import Link from "next/link";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const productImages = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605457867610-e990b192e6a4?w=700&auto=format&fit=crop",
];

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang].home;

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 border border-white/30 rounded-full text-xs mb-8 uppercase tracking-[0.2em] backdrop-blur-sm text-gray-200">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            {t.hero.h1a}
            <br />
            <span className="text-accent">{t.hero.h1b}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t.hero.p}
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg">
              {t.hero.cta1}
            </Link>
            <Link href="/products" className="border border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              {t.hero.cta2}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <div className="w-px h-10 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── Trust Stats Bar ── */}
      <section className="bg-accent py-8">
        <ScrollReveal className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-primary/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-24 bg-white">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.products.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">{t.products.h2}</h2>
            <p className="text-gray-500">{t.products.p}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.products.items.map((product, i) => (
              <div key={product.name} className="group relative overflow-hidden rounded-2xl bg-stone-100 hover:shadow-2xl transition-all duration-500">
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${productImages[i]}')` }}
                />
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{product.tag}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                  <Link href="/products" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:text-accent transition">
                    {t.products.learnMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
              {t.products.browseCta}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Why Tianqi ── */}
      <section className="py-24 bg-stone-50">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.why.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">{t.why.h2}</h2>
            <p className="text-gray-500">{t.why.p}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {t.why.pillars.map((p) => (
              <div key={p.title} className="group p-8 bg-white rounded-2xl hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300">
                <div className="text-4xl mb-6 w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-white">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.industries.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">{t.industries.h2}</h2>
            <p className="text-gray-500">{t.industries.p}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.industries.items.map((ind) => (
              <div key={ind.name} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                <span className="text-3xl mt-1 group-hover:scale-110 transition">{ind.icon}</span>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">{ind.name}</h4>
                  <p className="text-gray-500 text-sm">{ind.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.process.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">{t.process.h2}</h2>
            <p className="text-gray-400">{t.process.p}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10" />
            {t.process.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-6 bg-primary z-10">
                  <span className="text-accent font-bold text-lg">{step.number}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              {t.process.cta}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Sustainability ── */}
      <section id="sustainability" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <ScrollReveal className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.sustainability.tagline}</span>
              <h2 className="text-4xl font-bold mt-3 mb-6 text-primary">{t.sustainability.h2}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.sustainability.p}</p>
              <ul className="space-y-4">
                {t.sustainability.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2 relative h-[420px] w-full rounded-2xl overflow-hidden" delay={0.15}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906897-05ac899ed5f1?w=900&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {t.sustainability.badges.map((badge) => (
                  <div key={badge} className="bg-black/60 backdrop-blur-md border border-white/20 rounded-lg p-3 text-white text-center text-xs font-semibold">
                    {badge}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Material Library ── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <ScrollReveal className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden order-2 md:order-1" delay={0.15}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626127923230-058b8f2dd4ce?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
                <p className="font-mono text-xs tracking-widest text-white/70">{t.materials.sample}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2 order-1 md:order-2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.materials.tagline}</span>
              <h2 className="text-4xl font-bold mt-3 mb-6">{t.materials.h2}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">{t.materials.p}</p>
              <ul className="space-y-4 text-gray-400">
                {t.materials.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block mt-8 text-accent border-b border-accent pb-1 text-sm font-semibold hover:opacity-70 transition">
                {t.materials.cta}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.testimonials.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">{t.testimonials.h2}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="p-8 bg-stone-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <span key={j} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 mb-6 italic">"{item.quote}"</p>
                <div>
                  <p className="font-bold text-primary">{item.author}</p>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-stone-50">
        <ScrollReveal className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.faq.tagline}</span>
              <h2 className="text-4xl font-bold mt-3 text-primary">{t.faq.h2}</h2>
            </div>
            <FAQ />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="py-20 bg-accent">
        <ScrollReveal className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.cta.h2}</h2>
          <p className="text-primary/70 text-lg mb-10 max-w-xl mx-auto">{t.cta.p}</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg">
              {t.cta.cta1}
            </Link>
            <Link href="/contact" className="border-2 border-primary/30 text-primary px-8 py-4 rounded-full font-semibold hover:border-primary transition">
              {t.cta.cta2}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
