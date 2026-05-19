"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { lang } = useLang();
  const faqs = translations[lang].faqItems;

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-6 text-left gap-8"
          >
            <span className="font-semibold text-primary text-lg">{faq.q}</span>
            <ChevronDown
              size={20}
              className={`text-accent shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 pb-6" : "max-h-0"}`}>
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
