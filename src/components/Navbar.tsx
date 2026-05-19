"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.introduction, href: "/" },
        { name: t.products, href: "/products" },
        { name: t.about, href: "/about" },
        { name: t.contact, href: "/contact" },
    ];

    const LangToggle = ({ scrolled }: { scrolled: boolean }) => (
        <div className={`flex items-center gap-0.5 rounded-full border p-0.5 ${scrolled ? "border-gray-200" : "border-white/30"}`}>
            {(["en", "cn"] as const).map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                        lang === l
                            ? "bg-accent text-primary"
                            : scrolled
                            ? "text-gray-400 hover:text-gray-700"
                            : "text-white/50 hover:text-white"
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
                {/* Logo */}
                <Link href="/" className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-primary" : "text-white"}`}>
                    Tianqi<span className="text-accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${
                                isScrolled ? "text-gray-800" : "text-gray-200"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <LangToggle scrolled={isScrolled} />
                    <Link
                        href="/contact"
                        className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
                    >
                        {t.getQuote}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-accent"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 md:hidden flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-medium hover:text-accent"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
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
