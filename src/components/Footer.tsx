"use client";

import Link from "next/link";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;
  const address =
    lang === "cn"
      ? "中国广东省东莞市天启工业园 523000"
      : "Tianqi Industrial Park, Dongguan, Guangdong, China 523000";
  const certifications =
    lang === "cn"
      ? ["FSC®认证", "ISO 9001", "SGS认证"]
      : ["FSC® Certified", "ISO 9001", "SGS Verified"];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.9fr_1.2fr]">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Tianqi<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">{t.tagline}</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-300">{t.companyTitle}</h4>
            <ul className="space-y-3">
              {t.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent text-sm transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-300">{t.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:info@tianqipackaging.com" className="hover:text-accent transition">info@tianqipackaging.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+8613800000000" className="hover:text-accent transition">+86 138 0000 0000</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {certifications.map((certification) => (
              <span key={certification} className="border border-white/20 px-2 py-1 rounded">
                {certification}
              </span>
            ))}
            <Link href="#" className="hover:text-accent transition">{t.privacyPolicy}</Link>
            <Link href="#" className="hover:text-accent transition">{t.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
