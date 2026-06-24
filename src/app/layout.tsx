import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tianqi Packaging 天启包装 | Premium Custom Paper Boxes & Sustainable Solutions",
    description: "Tianqi Packaging 天启包装 specializes in high-end custom paper packaging, including paper boxes, card decks, stationery, and sustainable retail packaging solutions.",
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
