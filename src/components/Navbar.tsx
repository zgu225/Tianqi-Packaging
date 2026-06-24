"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { getLocalizedProductCategories } from "@/data/products";
import { translations } from "@/lib/translations";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;
    const productCategories = getLocalizedProductCategories(lang);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.about, href: "/about" },
        { name: t.contact, href: "/contact" },
    ];

    const isHomeTop = pathname === "/" && !isScrolled;
    const textColor = isHomeTop ? "text-white" : "text-gray-900";

    const LangToggle = ({ scrolled }: { scrolled: boolean }) => (
        <div className={`flex items-center gap-0.5 rounded-full border p-0.5 ${scrolled || !isHomeTop ? "border-gray-200" : "border-white/30"}`}>
            {(["en", "cn"] as const).map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                        lang === l
                            ? "bg-accent text-primary"
                            : scrolled || !isHomeTop
                              ? "text-gray-400 hover:text-gray-700"
                              : "text-white/60 hover:text-white"
                    }`}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    );

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className={`text-2xl font-bold tracking-tighter ${isHomeTop ? "text-white" : "text-primary"}`}>
                    Tianqi<span className="text-accent">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className={`text-sm font-medium transition-colors hover:text-accent ${textColor}`}>
                        {t.introduction}
                    </Link>

                    <div className="group relative py-3">
                        <Link href="/products" className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${textColor}`}>
                            {t.products}
                            <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                        </Link>
                        <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 rounded-lg border border-gray-100 bg-white p-6 text-gray-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <div className="grid grid-cols-3 gap-6">
                                {productCategories.map((category) => (
                                    <div key={category.slug}>
                                        <Link href={`/products#${category.slug}`} className="text-sm font-bold text-primary hover:text-accent">
                                            {category.name}
                                        </Link>
                                        <div className="mt-3 space-y-2">
                                            {category.subcategories.map((subcategory) => (
                                                <Link
                                                    key={subcategory.slug}
                                                    href={`/products/${category.slug}/${subcategory.slug}`}
                                                    className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-stone-50 hover:text-primary"
                                                >
                                                    {subcategory.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${textColor}`}>
                            {link.name}
                        </Link>
                    ))}
                    <LangToggle scrolled={isScrolled} />
                    <Link href="/contact" className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                        {t.getQuote}
                    </Link>
                </div>

                <button className="md:hidden text-accent" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 md:hidden flex flex-col gap-4">
                    <Link href="/" className="text-gray-800 font-medium hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
                        {t.introduction}
                    </Link>
                    <div>
                        <Link href="/products" className="text-gray-800 font-medium hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            {t.products}
                        </Link>
                        <div className="mt-3 space-y-4 border-l border-gray-200 pl-4">
                            {productCategories.map((category) => (
                                <div key={category.slug}>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{category.menuName}</p>
                                    <div className="mt-2 flex flex-col gap-2">
                                        {category.subcategories.map((subcategory) => (
                                            <Link
                                                key={subcategory.slug}
                                                href={`/products/${category.slug}/${subcategory.slug}`}
                                                className="text-sm text-gray-700 hover:text-accent"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subcategory.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-800 font-medium hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-gray-100">
                        <LangToggle scrolled={true} />
                    </div>
                </div>
            )}
        </nav>
    );
}
