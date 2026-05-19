"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutContent() {
  const { lang } = useLang();
  const t = translations[lang].aboutPage;

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-28 bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1800&auto=format&fit=crop')" }}
        />
        <ScrollReveal className="container mx-auto px-6 relative z-10 max-w-3xl">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.hero.tagline}</span>
          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">{t.hero.h1}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">{t.hero.p}</p>
        </ScrollReveal>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
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

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <ScrollReveal className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.story.tagline}</span>
              <h2 className="text-4xl font-bold mt-3 mb-6 text-primary">{t.story.h2}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
                <p>{t.story.p3}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2" delay={0.15}>
              <div className="relative h-[440px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=900&auto=format&fit=crop')" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-stone-50">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.timeline.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 text-primary">{t.timeline.h2}</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[90px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {t.timeline.milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-[80px] shrink-0 text-right">
                    <span className="font-bold text-accent text-lg">{m.year}</span>
                  </div>
                  <div className="hidden md:flex w-5 h-5 rounded-full border-2 border-accent bg-white shrink-0 mt-1 relative z-10" />
                  <p className="text-gray-600 leading-relaxed pt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.certifications.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">{t.certifications.h2}</h2>
            <p className="text-gray-500">{t.certifications.p}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.certifications.items.map((cert) => (
              <div key={cert.name} className="flex gap-6 p-8 border border-gray-100 rounded-2xl hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <span className="text-4xl">{cert.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-primary text-xl">{cert.name}</h3>
                    <span className="text-xs text-gray-400 bg-stone-100 px-2 py-1 rounded font-mono">{cert.code}</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            {t.certifications.footerNote}{" "}
            <Link href="/contact" className="text-accent hover:underline">{t.certifications.requestLink}</Link>
          </p>
        </ScrollReveal>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <ScrollReveal className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.sustainability.tagline}</span>
              <h2 className="text-4xl font-bold mt-3 mb-6">{t.sustainability.h2}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">{t.sustainability.p}</p>
              <ul className="space-y-4 text-gray-300">
                {t.sustainability.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden" delay={0.15}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906897-05ac899ed5f1?w=900&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <ScrollReveal className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.values.tagline}</span>
            <h2 className="text-4xl font-bold mt-3 text-primary">{t.values.h2}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.values.items.map((v) => (
              <div key={v.title} className="p-8 bg-stone-50 rounded-2xl text-center">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <ScrollReveal className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">{t.cta.h2}</h2>
          <p className="text-primary/70 text-lg mb-10 max-w-xl mx-auto">{t.cta.p}</p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            {t.cta.cta}
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
