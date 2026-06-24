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
    slug: "paper-box",
    name: "Paper Box",
    menuName: "Paper Box",
    description:
      "Custom paper boxes for beauty, jewelry, watches, gifts, electronics, and calendar packaging.",
    image: "/products/paper-box/calendar-box/3121753694335_.pic.jpg",
    subcategories: [
      {
        slug: "cosmetics-box",
        name: "Cosmetics Box",
        shortName: "Cosmetics",
        summary: "Premium packaging for skincare, makeup, fragrance, and beauty gift sets.",
        description:
          "Cosmetics boxes can be produced as rigid boxes, folding cartons, magnetic boxes, or insert-based sets for beauty products that need strong shelf presence and clean brand presentation.",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop",
        applications: ["Skincare sets", "Makeup palettes", "Perfume", "Beauty tools"],
        options: ["Rigid box", "Folding carton", "Magnetic closure", "Custom insert"],
        finishes: ["Foil stamping", "Embossing", "Spot UV", "Soft-touch lamination"],
      },
      {
        slug: "watch-box",
        name: "Watch Box",
        shortName: "Watch",
        summary: "Structured presentation boxes for watches, straps, and premium accessories.",
        description:
          "Watch boxes are built for protection and presentation, with rigid board, foam or velvet inserts, and premium exterior wrapping for retail and gifting.",
        image: "/products/paper-box/watch-box/shopping.webp",
        applications: ["Watches", "Watch straps", "Luxury accessories", "Gift sets"],
        options: ["Lid and base", "Drawer box", "Magnetic box", "Velvet insert"],
        finishes: ["Textured paper", "Foil logo", "Embossing", "Matte lamination"],
      },
      {
        slug: "jewelry-box",
        name: "Jewelry Box",
        shortName: "Jewelry",
        summary: "Elegant boxes for rings, necklaces, bracelets, earrings, and jewelry sets.",
        description:
          "Jewelry boxes combine compact structure, tactile materials, and custom inserts to protect delicate pieces while creating a polished unboxing experience.",
        image: "/products/paper-box/jewelry-box/2701753691763_.pic.jpg",
        applications: ["Rings", "Necklaces", "Bracelets", "Earrings"],
        options: ["Hinged box", "Drawer box", "Lid and base", "Foam or velvet insert"],
        finishes: ["Foil stamping", "Pearlescent paper", "Embossed logo", "Ribbon detail"],
      },
      {
        slug: "gifts-box",
        name: "Gifts Box",
        shortName: "Gifts",
        summary: "Gift packaging for holiday sets, promotional kits, and premium retail bundles.",
        description:
          "Gift boxes are flexible structures for seasonal campaigns and product bundles, with room for inserts, sleeves, ribbons, and high-impact finishing.",
        image: "/products/paper-box/gifts-box/gifts-box-cover.png",
        applications: ["Holiday gifts", "Brand kits", "Corporate gifts", "Retail bundles"],
        options: ["Rigid gift box", "Sleeve box", "Book-style box", "Custom compartment"],
        finishes: ["Hot foil", "Spot UV", "Ribbon closure", "Specialty paper"],
      },
      {
        slug: "electronics-box",
        name: "Electronics Box",
        shortName: "Electronics",
        summary: "Protective retail boxes for devices, accessories, cables, and smart products.",
        description:
          "Electronics boxes balance protection, product information, and retail presentation, with inserts and printed manuals sized for compact product kits.",
        image: "/products/paper-box/electronics-box/electronics-box-cover.png",
        applications: ["Small devices", "Earbuds", "Cables", "Smart accessories"],
        options: ["Rigid setup box", "Folding carton", "Insert tray", "Sleeve and tray"],
        finishes: ["Matte lamination", "Spot UV", "Anti-scratch coating", "Full-color printing"],
      },
      {
        slug: "calendar-box",
        name: "Calendar Box",
        shortName: "Calendar",
        summary: "Advent, countdown, and calendar-style boxes with multiple compartments.",
        description:
          "Calendar boxes are designed for timed product reveals, advent calendars, and promotional countdown sets with structured trays or drawer systems.",
        image: "/products/paper-box/calendar-box/3121753694335_.pic.jpg",
        applications: ["Advent calendars", "Countdown boxes", "Sample sets", "Holiday campaigns"],
        options: ["Drawer grid", "Die-cut doors", "Tray compartments", "Sleeve structure"],
        finishes: ["Foil numbering", "Full-color print", "Spot UV", "Matte lamination"],
      },
    ],
  },
  {
    slug: "card-decks",
    name: "Card Decks",
    menuName: "Card Decks",
    description:
      "Custom card deck production for tarot, oracle, playing cards, and boxed card sets.",
    image: "/products/card-decks/tarot-cards/4231753922002_.pic.jpg",
    subcategories: [
      {
        slug: "tarot-cards",
        name: "Tarot Cards",
        shortName: "Tarot",
        summary: "Custom tarot and oracle card decks with matching guidebooks and boxes.",
        description:
          "Tarot card projects can include cards, booklet or guidebook, rigid box, tuck box, or magnetic closure box, all matched to the artwork style.",
        image: "/products/card-decks/tarot-cards/4231753922002_.pic.jpg",
        applications: ["Tarot decks", "Oracle cards", "Guidebook sets", "Collector decks"],
        options: ["350gsm art card", "Rounded corners", "Guidebook", "Rigid deck box"],
        finishes: ["Matte varnish", "Gold edges", "Foil box logo", "Soft-touch coating"],
      },
      {
        slug: "playing-cards",
        name: "Playing Cards",
        shortName: "Playing",
        summary: "Custom playing card decks for games, promotions, gifts, and collectors.",
        description:
          "Playing cards can be produced with custom faces, backs, tuck boxes, rigid boxes, and specialty finishes for game publishers or branded campaigns.",
        image: "/products/card-decks/playing-cards/4291753922154_.pic.jpg",
        applications: ["Poker decks", "Game cards", "Promotional decks", "Collector editions"],
        options: ["Standard poker size", "Custom card size", "Tuck box", "Rigid box set"],
        finishes: ["Linen finish", "Matte varnish", "Foil tuck box", "Colored edges"],
      },
    ],
  },
  {
    slug: "stationery",
    name: "Stationery",
    menuName: "Stationery",
    description:
      "Custom printed stationery including notebooks, DIY cards, envelopes, and instruction manuals.",
    image: "/products/stationery/notebook/3071753694140_.pic.jpg",
    subcategories: [
      {
        slug: "notebook",
        name: "Notebook",
        shortName: "Notebook",
        summary: "Custom notebooks for brands, events, retail, and gift sets.",
        description:
          "Notebook projects can include custom covers, inner pages, binding styles, elastic bands, bookmarks, and coordinated packaging.",
        image: "/products/stationery/notebook/3071753694140_.pic.jpg",
        applications: ["Retail notebooks", "Corporate gifts", "Event merchandise", "Planner sets"],
        options: ["Hardcover", "Softcover", "Wire binding", "Thread binding"],
        finishes: ["Foil cover logo", "Embossing", "Matte lamination", "Custom endpaper"],
      },
      {
        slug: "diy-cards",
        name: "DIY Cards",
        shortName: "DIY Cards",
        summary: "DIY greeting cards, craft cards, and interactive paper card sets.",
        description:
          "DIY cards can be printed, die-cut, folded, scored, and packed as creative sets for retail, gifts, and activity kits.",
        image: "/products/stationery/diy-cards/3351753748761_.pic.jpg",
        applications: ["Greeting cards", "Craft kits", "Activity cards", "Gift sets"],
        options: ["Folded card", "Die-cut card", "Scored card", "Card and envelope set"],
        finishes: ["Foil detail", "Spot UV", "Textured paper", "Rounded corners"],
      },
      {
        slug: "envelope",
        name: "Envelope",
        shortName: "Envelope",
        summary: "Custom envelopes for cards, invitations, documents, and premium inserts.",
        description:
          "Envelopes can be matched to card sets, manuals, or branded inserts with custom size, paper, flap shape, and print treatment.",
        image:
          "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=1200&auto=format&fit=crop",
        applications: ["Invitation envelopes", "Card envelopes", "Document sleeves", "Gift inserts"],
        options: ["Custom size", "Wallet flap", "Peel-and-seal", "Printed liner"],
        finishes: ["Foil logo", "Pattern print", "Textured paper", "Spot color print"],
      },
      {
        slug: "instruction-manual",
        name: "Instruction Manual",
        shortName: "Manual",
        summary: "Folded leaflets and booklet-style manuals for product packaging.",
        description:
          "Instruction manuals can be produced as folded leaflets, saddle-stitched booklets, or compact inserts sized to fit inside product boxes.",
        image: "/products/stationery/instruction-manual/3241753747928_.pic.jpg",
        applications: ["Electronics", "Beauty devices", "Assembly kits", "Warranty inserts"],
        options: ["Folded leaflet", "Booklet", "Multi-language layout", "QR code panel"],
        finishes: ["Black and white print", "Full color print", "Matte paper", "Gloss paper"],
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
