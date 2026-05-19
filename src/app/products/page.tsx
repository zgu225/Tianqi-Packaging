import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products | Tianqi Packaging — Custom Paper Boxes & Bags",
  description:
    "Browse Tianqi's full range of custom paper packaging: rigid gift boxes, folding cartons, mailer boxes, paper bags, specialty shapes, and eco kraft packaging.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
