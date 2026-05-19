import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tianqi Packaging | Premium Custom Paper Boxes & Sustainable Solutions",
    description: "Tianqi Packaging specializes in high-end paper packaging. From textured art paper to eco-friendly kraft boxes, we bring your brand's vision to life.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LanguageProvider>
                    <Navbar />
                    <PageTransitionWrapper>
                        {children}
                    </PageTransitionWrapper>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
