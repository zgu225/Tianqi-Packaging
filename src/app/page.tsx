import Link from "next/link";
import FAQ from "@/components/FAQ";

const stats = [
  { value: "500+", label: "Global Brand Clients" },
  { value: "30+", label: "Countries Exported To" },
  { value: "10+", label: "Years of Manufacturing" },
  { value: "FSC®", label: "Certified & SGS Verified" },
];

const products = [
  {
    name: "Rigid Gift Boxes",
    tag: "Luxury",
    desc: "Magnetic closure, drawer-style, and shoulder-neck constructions wrapped in premium art paper with foil or emboss finishing.",
    color: "from-stone-800 to-stone-900",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&auto=format&fit=crop",
  },
  {
    name: "Folding Cartons",
    tag: "Retail",
    desc: "High-volume retail cartons with offset printing, spot UV, soft-touch lamination and consistent structural integrity at scale.",
    color: "from-zinc-700 to-zinc-900",
    img: "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=700&auto=format&fit=crop",
  },
  {
    name: "Paper Shopping Bags",
    tag: "Branding",
    desc: "Kraft and coated art paper bags with rope, ribbon, or twisted handles — the final touchpoint of a premium retail experience.",
    color: "from-amber-900 to-stone-900",
    img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=700&auto=format&fit=crop",
  },
  {
    name: "Mailer Boxes",
    tag: "E-Commerce",
    desc: "Self-locking subscription and e-commerce boxes with fully custom interior printing for an unforgettable unboxing moment.",
    color: "from-slate-700 to-slate-900",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop",
  },
  {
    name: "Specialty Shapes",
    tag: "Bespoke",
    desc: "Cylinder, hexagon, pyramid, and fully custom structural designs engineered to make your product impossible to ignore.",
    color: "from-neutral-700 to-neutral-900",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&auto=format&fit=crop",
  },
  {
    name: "Eco Kraft Packaging",
    tag: "Sustainable",
    desc: "100% recycled and FSC-certified kraft boxes and bags — raw, honest aesthetics that signal your brand's environmental commitment.",
    color: "from-lime-900 to-stone-900",
    img: "https://images.unsplash.com/photo-1605457867610-e990b192e6a4?w=700&auto=format&fit=crop",
  },
];

const pillars = [
  {
    icon: "🏭",
    title: "Factory Direct",
    desc: "We own our manufacturing facility in Dongguan. No middlemen — transparent pricing, direct quality control, and faster turnaround.",
  },
  {
    icon: "🎨",
    title: "Design Support",
    desc: "Structural engineers and graphic designers on staff. We refine your artwork and dieline to print-ready perfection at no extra cost.",
  },
  {
    icon: "🌱",
    title: "Certified Sustainable",
    desc: "FSC®-certified materials, water-based inks, and fully recyclable constructions. We help you meet ESG requirements and green retail standards.",
  },
  {
    icon: "🌍",
    title: "Export Expertise",
    desc: "We've shipped to 30+ countries. Our team handles all customs documentation, export compliance, and freight coordination end-to-end.",
  },
];

const industries = [
  {
    name: "Cosmetics & Beauty",
    icon: "✨",
    examples: "Gift sets, serum boxes, palette cases, lip gloss tubes",
  },
  {
    name: "Food & Beverage",
    icon: "🍾",
    examples: "Wine boxes, tea tins, confectionery trays, FDA-safe food cartons",
  },
  {
    name: "Electronics",
    icon: "📱",
    examples: "Retail tech boxes, earphone cases, cable packaging with foam inserts",
  },
  {
    name: "Luxury & Jewelry",
    icon: "💎",
    examples: "Watch boxes, ring cases, premium necklace packaging with velvet inserts",
  },
  {
    name: "Apparel & Fashion",
    icon: "👗",
    examples: "Garment boxes, ribbon-tie packaging, branded tissue paper and bags",
  },
  {
    name: "E-Commerce",
    icon: "📦",
    examples: "Mailer boxes, subscription packaging, branded void fill and inserts",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Inquiry",
    desc: "Tell us your product type, size, quantity, and design vision. Our team responds within 24 hours.",
  },
  {
    number: "02",
    title: "Free Consultation",
    desc: "A packaging engineer reviews your brief and recommends the optimal structure, material, and finish.",
  },
  {
    number: "03",
    title: "Physical Sample",
    desc: "We produce a hand-crafted prototype for your approval before any bulk production begins.",
  },
  {
    number: "04",
    title: "Mass Production",
    desc: "Full factory run with inline QC at every stage — printing, die-cutting, gluing, and packing.",
  },
  {
    number: "05",
    title: "Global Delivery",
    desc: "Sea, air, or express freight with full export documentation and real-time shipment tracking.",
  },
];

const testimonials = [
  {
    quote:
      "Tianqi exceeded our expectations on quality and turnaround. The foil-embossed logo on our gift boxes is absolutely flawless — our customers notice every detail.",
    author: "Sarah Mitchell",
    company: "Botanica Skincare, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "We've worked with many Chinese suppliers. Tianqi is the only one that consistently delivers bulk production that matches the approved sample. That reliability is rare.",
    author: "Marcus Reyes",
    company: "Elevate Spirits Co., United States",
    rating: 5,
  },
  {
    quote:
      "The FSC certification was exactly what we needed for our European retail partners. Communication is excellent and the packaging design team really understood our brief.",
    author: "Lena Hoffmann",
    company: "NordStyle GmbH, Germany",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 border border-white/30 rounded-full text-xs mb-8 uppercase tracking-[0.2em] backdrop-blur-sm text-gray-200">
            Factory Direct · Dongguan, China
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Packaging That Makes
            <br />
            <span className="text-accent">Brands Unforgettable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Custom paper packaging manufactured in Guangdong and shipped to 30+ countries.
            FSC-certified. Sample-first. Export-ready.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products"
              className="border border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              View All Products
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── Trust Stats Bar ── */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-primary/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">
              Every Form. Every Finish.
            </h2>
            <p className="text-gray-500">
              From luxury rigid boxes to sustainable kraft mailers — we engineer packaging that fits your product, brand, and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl bg-stone-100 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${product.img}')` }}
                />
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:text-accent transition"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
            >
              Browse Full Product Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Tianqi ── */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">
              Built for Global Brands
            </h2>
            <p className="text-gray-500">
              We're not a trading company. We're a vertically integrated factory with in-house design, printing, and export capability.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-8 bg-white rounded-2xl hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className="text-4xl mb-6 w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Industries Served</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">
              Packaging Across Every Category
            </h2>
            <p className="text-gray-500">
              We work with brands across six major verticals, adapting structure, material, and finish to meet each industry's unique requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-3xl mt-1 group-hover:scale-110 transition">{ind.icon}</span>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">{ind.name}</h4>
                  <p className="text-gray-500 text-sm">{ind.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">
              From Brief to Your Door in 5 Steps
            </h2>
            <p className="text-gray-400">
              A transparent, sample-first process designed to eliminate risk for international buyers ordering from overseas for the first time.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10" />
            {steps.map((step, i) => (
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
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section id="sustainability" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Sustainability</span>
              <h2 className="text-4xl font-bold mt-3 mb-6 text-primary">
                Packaging That's Good for the Planet
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe premium packaging and environmental responsibility are not in conflict. Our entire supply chain is built around this principle.
              </p>
              <ul className="space-y-4">
                {[
                  "FSC®-certified paper sourced from responsibly managed forests",
                  "Water-based, food-safe inks — zero heavy metals",
                  "100% recyclable and biodegradable packaging constructions",
                  "Factory powered by solar energy with carbon offset program",
                  "Meets EU, US, and Australian sustainability import requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[420px] w-full rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542601906897-05ac899ed5f1?w=900&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {["FSC® Certified", "ISO 9001", "SGS Verified"].map((badge) => (
                  <div
                    key={badge}
                    className="bg-black/60 backdrop-blur-md border border-white/20 rounded-lg p-3 text-white text-center text-xs font-semibold"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Material Library ── */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden order-2 md:order-1">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1626127923230-058b8f2dd4ce?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
                <p className="font-mono text-xs tracking-widest text-white/70">
                  SAMPLE: NATURAL KRAFT 400GSM
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Material Library</span>
              <h2 className="text-4xl font-bold mt-3 mb-6">Premium Papers, Globally Sourced</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We source from premium mills across China, Korea, and Europe. Our material library is matched to each product type and finish.
              </p>
              <ul className="space-y-4 text-gray-400">
                {[
                  "Textured Art Paper — linen, leather grain, washi, canvas",
                  "Rigid Greyboard — 1200gsm+ for luxury box constructions",
                  "Specialty Kraft — virgin, recycled, white, and black kraft",
                  "Metallised & Pearlescent Papers — for high-impact retail",
                  "Soft-Touch & Matte Lamination Papers — premium tactile finish",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-8 text-accent border-b border-accent pb-1 text-sm font-semibold hover:opacity-70 transition"
              >
                Request a Material Sample Kit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Client Stories</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">
              Trusted by Brands Worldwide
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 bg-stone-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">FAQ</span>
              <h2 className="text-4xl font-bold mt-3 text-primary">Common Questions</h2>
            </div>
            <FAQ />
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ready to Elevate Your Packaging?
          </h2>
          <p className="text-primary/70 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with a custom recommendation and preliminary quote.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary/30 text-primary px-8 py-4 rounded-full font-semibold hover:border-primary transition"
            >
              Request a Sample Kit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
