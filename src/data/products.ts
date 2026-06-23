export type ProductSubcategory = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  image: string;
  applications: string[];
  options: string[];
  finishes: string[];
};

export type ProductCategory = {
  slug: string;
  name: string;
  menuName: string;
  description: string;
  image: string;
  subcategories: ProductSubcategory[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "boxes",
    name: "Custom Boxes",
    menuName: "Boxes",
    description:
      "Paper box structures for retail, gifting, shipping, and premium presentation.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop",
    subcategories: [
      {
        slug: "square-boxes",
        name: "Square Boxes",
        shortName: "Square",
        summary: "Clean four-corner box structures for gift sets, cosmetics, and retail packs.",
        description:
          "Square boxes are a flexible starting point for premium and everyday packaging. They work well for rigid gift boxes, lid-and-base boxes, folding cartons, and insert-based product sets.",
        image:
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop",
        applications: ["Gift sets", "Cosmetics", "Jewelry", "Food packaging"],
        options: ["Rigid lid and base", "Magnetic closure", "Folding carton", "Custom insert"],
        finishes: ["Foil stamping", "Embossing", "Spot UV", "Matte lamination"],
      },
      {
        slug: "round-boxes",
        name: "Round Boxes",
        shortName: "Round",
        summary: "Cylindrical and tube-style boxes for candles, tea, wine, and luxury gifts.",
        description:
          "Round boxes create a softer shelf presence and are ideal when the product itself is cylindrical or when the brand needs a more distinctive unboxing moment.",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&auto=format&fit=crop",
        applications: ["Candles", "Tea", "Wine bottles", "Premium gifts"],
        options: ["Paper tube", "Shoulder-neck tube", "Window tube", "Nested set"],
        finishes: ["Textured wrap paper", "Foil logo", "Soft-touch coating", "Ribbon pull"],
      },
      {
        slug: "folding-cartons",
        name: "Folding Cartons",
        shortName: "Cartons",
        summary: "Flat-shipping cartons for high-volume retail and lightweight products.",
        description:
          "Folding cartons are efficient for larger runs and retail shelf display. They ship flat, assemble quickly, and support rich print coverage.",
        image:
          "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=1200&auto=format&fit=crop",
        applications: ["Retail goods", "Beauty products", "Supplements", "Small electronics"],
        options: ["Tuck-end", "Auto-lock bottom", "Sleeve and tray", "Window carton"],
        finishes: ["CMYK offset print", "Gloss coating", "Perforation", "Window patching"],
      },
    ],
  },
  {
    slug: "bags",
    name: "Paper Bags",
    menuName: "Bags",
    description:
      "Branded shopping bags and carry bags for retail, events, and premium gifting.",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&auto=format&fit=crop",
    subcategories: [
      {
        slug: "shopping-bags",
        name: "Shopping Bags",
        shortName: "Shopping",
        summary: "Retail carry bags with rope, ribbon, flat, or twisted paper handles.",
        description:
          "Shopping bags are often the last brand touchpoint customers carry away. We match paper weight, handle style, and finish to the product weight and retail environment.",
        image:
          "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&auto=format&fit=crop",
        applications: ["Retail stores", "Fashion", "Cosmetics", "Gift packaging"],
        options: ["Rope handle", "Ribbon handle", "Twisted handle", "Reinforced base"],
        finishes: ["Hot foil", "Embossed logo", "Kraft paper", "Soft-touch lamination"],
      },
      {
        slug: "kraft-bags",
        name: "Kraft Bags",
        shortName: "Kraft",
        summary: "Natural kraft bags for sustainable retail and food-safe presentation.",
        description:
          "Kraft bags give brands a natural, low-waste look while still allowing custom print, handle choices, and reinforced structures.",
        image:
          "https://images.unsplash.com/photo-1605457867610-e990b192e6a4?w=1200&auto=format&fit=crop",
        applications: ["Bakery", "Coffee", "Eco retail", "Takeaway packaging"],
        options: ["White kraft", "Natural kraft", "Flat handle", "Twisted paper handle"],
        finishes: ["Soy ink", "One-color print", "Water-based coating", "Recycled content"],
      },
    ],
  },
  {
    slug: "printed-materials",
    name: "Printed Materials",
    menuName: "Printed",
    description:
      "Supporting print pieces that complete the package experience and product information flow.",
    image:
      "https://images.unsplash.com/photo-1626127923230-058b8f2dd4ce?w=1200&auto=format&fit=crop",
    subcategories: [
      {
        slug: "instruction-manuals",
        name: "Instruction Manuals",
        shortName: "Manuals",
        summary: "Folded or booklet-style manuals for electronics, beauty tools, and kits.",
        description:
          "Instruction manuals can be produced as folded leaflets, saddle-stitched booklets, or compact inserts sized to fit inside your packaging structure.",
        image:
          "https://images.unsplash.com/photo-1626127923230-058b8f2dd4ce?w=1200&auto=format&fit=crop",
        applications: ["Electronics", "Beauty devices", "Assembly kits", "Warranty inserts"],
        options: ["Folded leaflet", "Booklet", "Multi-language layout", "QR code panel"],
        finishes: ["Black and white print", "Full color print", "Matte paper", "Gloss paper"],
      },
      {
        slug: "cards-and-inserts",
        name: "Cards & Inserts",
        shortName: "Cards",
        summary: "Thank-you cards, product cards, warranty cards, and branded inserts.",
        description:
          "Cards and inserts help brands guide unboxing, explain product value, and add a polished finishing layer inside the package.",
        image:
          "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=1200&auto=format&fit=crop",
        applications: ["Thank-you cards", "Product cards", "Warranty cards", "Care guides"],
        options: ["Single card", "Folded card", "Die-cut card", "Envelope set"],
        finishes: ["Foil details", "Rounded corners", "Spot UV", "Premium art paper"],
      },
    ],
  },
];

export const allSubcategories = productCategories.flatMap((category) =>
  category.subcategories.map((subcategory) => ({
    ...subcategory,
    categorySlug: category.slug,
    categoryName: category.name,
  })),
);

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductSubcategory(categorySlug: string, subcategorySlug: string) {
  const category = getProductCategory(categorySlug);
  const subcategory = category?.subcategories.find((item) => item.slug === subcategorySlug);

  if (!category || !subcategory) {
    return null;
  }

  return { category, subcategory };
}
