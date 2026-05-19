import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Tianqi Packaging — Custom Paper Boxes & Bags",
  description:
    "Browse Tianqi's full range of custom paper packaging: rigid gift boxes, folding cartons, mailer boxes, paper bags, specialty shapes, and eco kraft packaging.",
};

const categories = [
  {
    id: "rigid",
    name: "Rigid Gift Boxes",
    tag: "Luxury",
    tagColor: "bg-amber-100 text-amber-800",
    desc: "Our flagship product. Rigid boxes are constructed from 1200gsm+ greyboard wrapped in premium art paper with a range of finishes. Perfect for luxury brands, gift sets, and premium retail.",
    features: ["Magnetic closure", "Drawer style", "Shoulder-neck lid", "Clamshell", "Book-style"],
    finishes: ["Foil stamping (gold, silver, custom)", "Embossing & debossing", "Spot UV", "Soft-touch lamination", "Glitter / pearlescent"],
    moq: "100 units",
    lead: "15–20 days",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop",
  },
  {
    id: "folding",
    name: "Folding Cartons",
    tag: "Retail",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "High-volume folding cartons manufactured with offset or digital printing for consistent color across large runs. Ideal for retail shelving, product launches, and subscription boxes.",
    features: ["Auto-lock bottom", "Tuck-end flap", "Sleeve & tray", "Gable top", "Pillow box"],
    finishes: ["Full CMYK offset printing", "Spot UV coating", "Matte or gloss lamination", "Window patching", "Perforations"],
    moq: "500 units",
    lead: "12–18 days",
    img: "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=900&auto=format&fit=crop",
  },
  {
    id: "bags",
    name: "Paper Shopping Bags",
    tag: "Branding",
    tagColor: "bg-emerald-100 text-emerald-800",
    desc: "The final touchpoint of a premium retail experience. Our bags are made from coated art paper or natural kraft with flat, rope, twisted, or ribbon handles and reinforced bases.",
    features: ["Rope handle", "Ribbon handle", "Twisted paper handle", "Die-cut handle", "Flat handle"],
    finishes: ["Full CMYK printing", "Hot foil stamping", "Embossed logo", "Soft-touch coating", "Kraft natural finish"],
    moq: "500 units",
    lead: "10–15 days",
    img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=900&auto=format&fit=crop",
  },
  {
    id: "mailer",
    name: "Mailer Boxes",
    tag: "E-Commerce",
    tagColor: "bg-violet-100 text-violet-800",
    desc: "Self-locking e-commerce and subscription boxes built for unboxing moments. Custom interior printing, magnetic closures, and tear-strip options. Ships flat, assembles in seconds.",
    features: ["Self-locking (no glue)", "Magnetic closure", "Tear-strip opening", "Interior full print", "Custom inserts"],
    finishes: ["Full exterior & interior CMYK", "Spot UV", "Matte lamination", "Custom tissue paper", "QR code integration"],
    moq: "100 units",
    lead: "12–18 days",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop",
  },
  {
    id: "specialty",
    name: "Specialty Shapes",
    tag: "Bespoke",
    tagColor: "bg-rose-100 text-rose-800",
    desc: "When standard shapes don't do your product justice. Our structural design team engineers custom cylinders, hexagons, pyramids, and fully bespoke forms from scratch.",
    features: ["Cylinder / tube boxes", "Hexagon boxes", "Pyramid boxes", "Suitcase style", "Fully custom dieline"],
    finishes: ["All standard finishing options", "Custom shaped windows", "Foil on non-flat surfaces", "Textured paper wrapping"],
    moq: "200 units",
    lead: "18–25 days",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop",
  },
  {
    id: "eco",
    name: "Eco Kraft Packaging",
    tag: "Sustainable",
    tagColor: "bg-lime-100 text-lime-800",
    desc: "Natural, raw, and honest packaging made from 100% recycled or FSC-certified virgin kraft. Ideal for brands committed to sustainability without compromising on aesthetics.",
    features: ["Kraft mailer boxes", "Kraft shopping bags", "Kraft folding cartons", "Seed paper options", "Soy ink printing"],
    finishes: ["1-2 color flexo printing", "Kraft natural finish", "Biodegradable coatings", "Water-based inks only", "Recycled content certification"],
    moq: "300 units",
    lead: "12–18 days",
    img: "https://images.unsplash.com/photo-1605457867610-e990b192e6a4?w=900&auto=format&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=1800&auto=format&fit=crop')",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Product Catalogue</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">
            Custom Paper Packaging,
            <br />
            Every Form & Finish
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Six core product categories. Hundreds of structural options. Unlimited custom finishing. All manufactured in our Dongguan factory and shipped worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Request a Free Sample
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative h-[380px] w-full rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.img}')` }}
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${cat.tagColor}`}>
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-4">{cat.name}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.desc}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      Structure Options
                    </p>
                    <ul className="space-y-2">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      Finishing Options
                    </p>
                    <ul className="space-y-2">
                      {cat.finishes.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6 mb-8 text-sm">
                  <div className="bg-stone-50 rounded-xl px-4 py-3">
                    <p className="text-gray-400 text-xs mb-1">Min. Order</p>
                    <p className="font-bold text-primary">{cat.moq}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl px-4 py-3">
                    <p className="text-gray-400 text-xs mb-1">Lead Time</p>
                    <p className="font-bold text-primary">{cat.lead}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition"
                >
                  Get a Quote for This Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities CTA */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-gray-500 mb-8">
            We take on fully custom structural projects. Share your product dimensions and vision — our engineering team will send you a feasibility response within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Discuss a Custom Project
          </Link>
        </div>
      </section>
    </main>
  );
}
