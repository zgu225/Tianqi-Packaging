import Link from "next/link";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { name: "Rigid Gift Boxes", href: "/products" },
  { name: "Folding Cartons", href: "/products" },
  { name: "Paper Shopping Bags", href: "/products" },
  { name: "Mailer Boxes", href: "/products" },
  { name: "Specialty Boxes", href: "/products" },
  { name: "Eco Kraft Packaging", href: "/products" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Sustainability", href: "/about#sustainability" },
  { name: "Certifications", href: "/about#certifications" },
  { name: "Contact Us", href: "/contact" },
  { name: "Get a Free Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Tianqi<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Premium custom paper packaging for global brands. FSC-certified, export-ready, delivered worldwide from our Guangdong factory.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Tianqi Industrial Park, Dongguan, Guangdong, China 523000</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:info@tianqipackaging.com"
                  className="hover:text-accent transition"
                >
                  info@tianqipackaging.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+8613800000000" className="hover:text-accent transition">
                  +86 138 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Tianqi Packaging Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="border border-white/20 px-2 py-1 rounded">FSC® Certified</span>
            <span className="border border-white/20 px-2 py-1 rounded">ISO 9001</span>
            <span className="border border-white/20 px-2 py-1 rounded">SGS Verified</span>
            <Link href="#" className="hover:text-accent transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
