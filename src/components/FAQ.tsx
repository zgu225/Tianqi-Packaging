"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Our standard MOQ starts from 100 units for rigid and specialty boxes, and 500 units for folding cartons and paper bags. We can accommodate smaller trial orders for qualified buyers — reach out to discuss your specific requirements.",
  },
  {
    q: "How long does production take?",
    a: "Standard lead time is 15–20 business days after sample approval. Rush production (7–10 days) is available for select products. Shipping transit varies: Sea freight 25–35 days, Air freight 5–7 days, Express 3–5 days.",
  },
  {
    q: "Can I get a physical sample before placing a bulk order?",
    a: "Yes — and we strongly recommend it. Blank (unprinted) samples are free; you only cover freight. Custom printed samples are charged at cost and fully credited toward your bulk order invoice.",
  },
  {
    q: "What certifications does Tianqi hold?",
    a: "We hold FSC® Chain of Custody certification for sustainable sourcing, ISO 9001 for quality management, and SGS verification for export compliance. Full documentation is available for your procurement team upon request.",
  },
  {
    q: "Do you handle international shipping and customs?",
    a: "Yes. We export to 30+ countries and manage all export documentation, customs declarations, and freight coordination. We support DDP, FOB, CIF, and express delivery — whichever fits your logistics setup.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-48 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
