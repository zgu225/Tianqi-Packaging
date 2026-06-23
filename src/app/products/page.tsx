import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products | Tianqi Packaging Product Catalogue",
  description:
    "Browse Tianqi's custom packaging catalogue by category: boxes, paper bags, instruction manuals, cards, and inserts.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
