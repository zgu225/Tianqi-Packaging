"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type FormData = {
  name: string; company: string; email: string;
  country: string; product: string; quantity: string; message: string;
};

const initialForm: FormData = { name: "", company: "", email: "", country: "", product: "", quantity: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const { lang } = useLang();
  const t = translations[lang].contactPage;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Packaging Inquiry — ${form.product || "General"} — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nCountry: ${form.country}\nProduct Interest: ${form.product}\nEstimated Quantity: ${form.quantity}\n\nMessage:\n${form.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:info@tianqipackaging.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm(initialForm);
    }, 600);
  };

  return (
    <main className="min-h-screen pt-24 bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-primary text-white text-center">
        <ScrollReveal className="container mx-auto px-6">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.hero.tagline}</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">{t.hero.h1}</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">{t.hero.p}</p>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <ScrollReveal className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-2">{t.form.h2}</h2>
                <p className="text-gray-500 text-sm mb-8">{t.form.p}</p>

                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{t.form.successTitle}</h3>
                    <p className="text-gray-500 mb-6">{t.form.successMsg}</p>
                    <button onClick={() => setStatus("idle")} className="text-accent font-semibold hover:underline">
                      {t.form.resubmit}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.nameLabel}</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={t.form.namePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.companyLabel}</label>
                        <input type="text" name="company" required value={form.company} onChange={handleChange} placeholder={t.form.companyPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.emailLabel}</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={t.form.emailPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.countryLabel}</label>
                        <input type="text" name="country" required value={form.country} onChange={handleChange} placeholder={t.form.countryPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.productLabel}</label>
                        <select name="product" required value={form.product} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition bg-white">
                          <option value="">{t.form.productDefault}</option>
                          {t.form.productOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.quantityLabel}</label>
                        <select name="quantity" value={form.quantity} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition bg-white">
                          <option value="">{t.form.quantityDefault}</option>
                          {t.form.quantityOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.messageLabel}</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder={t.form.messagePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none" />
                    </div>
                    <button type="submit" disabled={status === "sending"} className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition disabled:opacity-60">
                      {status === "sending" ? t.form.sendingButton : t.form.submitButton}
                    </button>
                    <p className="text-xs text-gray-400 text-center">{t.form.privacyNote}</p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-6">{t.sidebar.contactTitle}</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0"><Mail size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{t.sidebar.emailLabel}</p>
                      <a href="mailto:info@tianqipackaging.com" className="text-primary font-medium hover:text-accent transition">info@tianqipackaging.com</a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0"><MessageCircle size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{t.sidebar.whatsappLabel}</p>
                      <a href="https://wa.me/8613800000000" className="text-primary font-medium hover:text-accent transition">+86 138 0000 0000</a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0"><Phone size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{t.sidebar.phoneLabel}</p>
                      <a href="tel:+8613800000000" className="text-primary font-medium hover:text-accent transition">+86 138 0000 0000</a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0"><Clock size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{t.sidebar.hoursLabel}</p>
                      <p className="text-primary font-medium">{t.sidebar.hours}</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0"><MapPin size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">{t.sidebar.addressLabel}</p>
                      <p className="text-primary font-medium">
                        {t.sidebar.address.map((line, i) => <span key={i}>{line}{i < t.sidebar.address.length - 1 && <br />}</span>)}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-3">{t.sidebar.responseTitle}</h3>
                <ul className="space-y-2 text-sm text-primary/80">
                  <li className="flex gap-2 items-start"><span className="font-bold">24h</span> — {t.sidebar.response24}</li>
                  <li className="flex gap-2 items-start"><span className="font-bold">48h</span> — {t.sidebar.response48}</li>
                  <li className="flex gap-2 items-start"><span className="font-bold">5–7d</span> — {t.sidebar.response57}</li>
                </ul>
              </div>

              <a href="https://wa.me/8613800000000" className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 hover:opacity-90 transition">
                <MessageCircle size={24} />
                <div>
                  <p className="font-bold">{t.sidebar.whatsappTitle}</p>
                  <p className="text-white/80 text-sm">{t.sidebar.whatsappSub}</p>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
