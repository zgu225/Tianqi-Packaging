import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tianqi Packaging — Factory & Certifications",
  description:
    "Learn about Tianqi Packaging — our Dongguan factory, manufacturing capabilities, FSC and ISO certifications, and commitment to sustainable paper packaging.",
};

const milestones = [
  { year: "2013", event: "Founded in Dongguan, Guangdong — first factory focused exclusively on paper packaging." },
  { year: "2016", event: "Achieved ISO 9001 quality management certification. First international export order to Europe." },
  { year: "2019", event: "Expanded to 15,000 sqm facility. Added in-house structural design and digital prototyping department." },
  { year: "2021", event: "Received FSC® Chain of Custody certification. Launched sustainability program with solar energy initiative." },
  { year: "2024", event: "Serving 500+ brands across 30+ countries. Ranked top 3 paper packaging manufacturer in Guangdong." },
];

const stats = [
  { value: "15,000㎡", label: "Factory Floor Space" },
  { value: "200+", label: "Production Staff" },
  { value: "30+", label: "Countries Exported To" },
  { value: "500+", label: "Brands Served" },
];

const certifications = [
  {
    name: "FSC® Certified",
    code: "FSC-C123456",
    desc: "Chain of Custody certification ensuring all wood fiber materials come from responsibly managed forests. Required by EU and many US retailers.",
    icon: "🌲",
  },
  {
    name: "ISO 9001:2015",
    code: "Quality Management",
    desc: "International standard for quality management systems, verified by an accredited third-party auditor. Covers every stage of our manufacturing process.",
    icon: "✅",
  },
  {
    name: "SGS Verification",
    code: "Factory Audit",
    desc: "Annual factory audit by SGS covering social compliance, workplace safety, environmental practices, and production quality standards.",
    icon: "🔍",
  },
  {
    name: "BSCI Member",
    code: "Social Compliance",
    desc: "Business Social Compliance Initiative membership, ensuring ethical labor practices and safe working conditions throughout our supply chain.",
    icon: "🤝",
  },
];

const values = [
  {
    title: "Sample First, Always",
    desc: "We never push buyers to skip physical sampling. A perfect bulk order begins with an approved sample — it protects you and keeps our quality standards honest.",
    icon: "📦",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden tooling fees. No surprise freight surcharges. We itemize every cost in our quotations so you can plan with confidence.",
    icon: "💡",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Over 60% of our clients have been with us for 3+ years. We don't optimize for one-time orders — we build relationships that grow with your brand.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-28 bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1800&auto=format&fit=crop')",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">About Tianqi</span>
          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
            A Factory Built Around Paper. A Team Built Around Trust.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Since 2013, we have built our reputation one box at a time — serving independent brands, global retail chains, and e-commerce leaders across 30+ countries from our Dongguan facility.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
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

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-bold mt-3 mb-6 text-primary">
                From One Workshop to a Global Factory
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tianqi Packaging was founded in 2013 with a single printing press and a team of eight. Our founding principle was simple: paper packaging should not be a commodity. Every box, bag, and carton represents a brand's first physical impression on its customer.
                </p>
                <p>
                  Over the following decade, we invested methodically in capability — adding structural engineers, expanding our press room, sourcing globally for the finest paper stocks, and building export expertise that now spans 30+ countries.
                </p>
                <p>
                  Today we operate a 15,000 sqm facility in Dongguan, one of China's premier packaging manufacturing hubs. Our team of 200+ specialists handles everything from initial structural design to final freight coordination in-house.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[440px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=900&auto=format&fit=crop')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-bold mt-3 text-primary">Key Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[90px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
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
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Certifications</span>
            <h2 className="text-4xl font-bold mt-3 mb-4 text-primary">
              Verified. Audited. Compliant.
            </h2>
            <p className="text-gray-500">
              Our certifications are not marketing copy — they are third-party verified credentials that protect your procurement team and satisfy your retailer requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex gap-6 p-8 border border-gray-100 rounded-2xl hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-4xl">{cert.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-primary text-xl">{cert.name}</h3>
                    <span className="text-xs text-gray-400 bg-stone-100 px-2 py-1 rounded font-mono">
                      {cert.code}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Full certification documentation available upon request for procurement teams.{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Request documents →
            </Link>
          </p>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Sustainability</span>
              <h2 className="text-4xl font-bold mt-3 mb-6">
                Our Commitment to a Circular Packaging Future
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We believe the packaging industry has a responsibility to reduce its footprint. Our sustainability program covers sourcing, production, and end-of-life — not just the materials we print on.
              </p>
              <ul className="space-y-4 text-gray-300">
                {[
                  { label: "FSC-certified paper from sustainably managed forests" },
                  { label: "Water-based, food-safe inks with zero heavy metals" },
                  { label: "100% recyclable and biodegradable product constructions" },
                  { label: "Solar energy covers 40% of factory power consumption" },
                  { label: "Annual carbon offset program for freight emissions" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542601906897-05ac899ed5f1?w=900&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Values</span>
            <h2 className="text-4xl font-bold mt-3 text-primary">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-stone-50 rounded-2xl text-center">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-primary/70 text-lg mb-10 max-w-xl mx-auto">
            Start with a conversation. Our team responds within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
