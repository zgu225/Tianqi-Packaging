"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const productOptions = [
  "Rigid Gift Boxes",
  "Folding Cartons",
  "Paper Shopping Bags",
  "Mailer Boxes",
  "Specialty / Custom Shapes",
  "Eco Kraft Packaging",
  "Not sure yet — need advice",
];

const quantityOptions = [
  "Under 100 units (sampling only)",
  "100–500 units",
  "500–2,000 units",
  "2,000–10,000 units",
  "10,000+ units",
];

type FormData = {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Builds a mailto link so the inquiry opens in the user's email client.
    // Replace with a backend / Formspree / Resend integration for production.
    const subject = encodeURIComponent(
      `Packaging Inquiry — ${form.product || "General"} — ${form.company}`
    );
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
        <div className="container mx-auto px-6">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">Request a Free Quote</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Tell us about your packaging project. Our team responds within 24 hours with a custom recommendation and preliminary pricing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-2">Project Inquiry</h2>
                <p className="text-gray-500 text-sm mb-8">
                  All fields marked with * are required. The more detail you provide, the more accurate our quote will be.
                </p>

                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Inquiry Sent!</h3>
                    <p className="text-gray-500 mb-6">
                      Your email client should have opened with your inquiry. We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-accent font-semibold hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Brand Ltd."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@yourbrand.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Country / Region *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United Kingdom"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Product Type *
                        </label>
                        <select
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition bg-white"
                        >
                          <option value="">Select a product type</option>
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Estimated Quantity
                        </label>
                        <select
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition bg-white"
                        >
                          <option value="">Select a quantity range</option>
                          {quantityOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your product: dimensions, materials you have in mind, special requirements, timeline, or any reference images you'll attach..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Submit Inquiry"}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting you agree to our Privacy Policy. We respond to all inquiries within 24 business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-6">Contact Information</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Email</p>
                      <a
                        href="mailto:info@tianqipackaging.com"
                        className="text-primary font-medium hover:text-accent transition"
                      >
                        info@tianqipackaging.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/8613800000000"
                        className="text-primary font-medium hover:text-accent transition"
                      >
                        +86 138 0000 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Phone / WeChat</p>
                      <a
                        href="tel:+8613800000000"
                        className="text-primary font-medium hover:text-accent transition"
                      >
                        +86 138 0000 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Business Hours</p>
                      <p className="text-primary font-medium">Mon–Fri, 9AM–6PM CST</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Factory Address</p>
                      <p className="text-primary font-medium">
                        Tianqi Industrial Park,
                        <br />
                        Dongguan, Guangdong,
                        <br />
                        China 523000
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response Promise */}
              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-3">Our Response Promise</h3>
                <ul className="space-y-2 text-sm text-primary/80">
                  <li className="flex gap-2 items-start">
                    <span className="font-bold">24h</span> — First response with initial pricing
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold">48h</span> — Detailed quote and material recommendations
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold">5–7d</span> — Physical sample shipped to your door
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/8613800000000"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 hover:opacity-90 transition"
              >
                <MessageCircle size={24} />
                <div>
                  <p className="font-bold">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Fastest way to reach our team</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
