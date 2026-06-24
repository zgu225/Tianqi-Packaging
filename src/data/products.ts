import type { Lang } from "@/lib/translations";

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
    image: "/products/paper-box/calendar-box/ai-example-01.jpg",
    subcategories: [
      {
        slug: "cosmetics-box",
        name: "Cosmetics Box",
        shortName: "Cosmetics",
        summary: "Premium packaging for skincare, makeup, fragrance, and beauty gift sets.",
        description:
          "Cosmetics boxes can be produced as rigid boxes, folding cartons, magnetic boxes, or insert-based sets for beauty products that need strong shelf presence and clean brand presentation.",
        image: "/products/paper-box/cosmetics-box/ai-example-01.jpg",
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
        image: "/products/paper-box/watch-box/ai-example-01.jpg",
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
        image: "/products/paper-box/jewelry-box/ai-example-01.jpg",
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
        image: "/products/paper-box/gifts-box/ai-example-01.jpg",
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
        image: "/products/paper-box/electronics-box/ai-example-01.jpg",
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
        image: "/products/paper-box/calendar-box/ai-example-01.jpg",
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
    image: "/products/card-decks/tarot-cards/ai-example-01.jpg",
    subcategories: [
      {
        slug: "tarot-cards",
        name: "Tarot Cards",
        shortName: "Tarot",
        summary: "Custom tarot and oracle card decks with matching guidebooks and boxes.",
        description:
          "Tarot card projects can include cards, booklet or guidebook, rigid box, tuck box, or magnetic closure box, all matched to the artwork style.",
        image: "/products/card-decks/tarot-cards/ai-example-01.jpg",
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
        image: "/products/card-decks/playing-cards/ai-example-01.jpg",
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
    image: "/products/stationery/notebook/ai-example-01.jpg",
    subcategories: [
      {
        slug: "notebook",
        name: "Notebook",
        shortName: "Notebook",
        summary: "Custom notebooks for brands, events, retail, and gift sets.",
        description:
          "Notebook projects can include custom covers, inner pages, binding styles, elastic bands, bookmarks, and coordinated packaging.",
        image: "/products/stationery/notebook/ai-example-01.jpg",
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
        image: "/products/stationery/diy-cards/ai-example-01.jpg",
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
        image: "/products/stationery/envelope/ai-example-01.jpg",
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
        image: "/products/stationery/instruction-manual/ai-example-01.jpg",
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

type CategoryCopy = Pick<ProductCategory, "name" | "menuName" | "description">;
type SubcategoryCopy = Pick<
  ProductSubcategory,
  "name" | "shortName" | "summary" | "description" | "applications" | "options" | "finishes"
>;

const categoryCopyCn: Record<string, CategoryCopy> = {
  "paper-box": {
    name: "纸质包装盒",
    menuName: "纸盒",
    description: "覆盖美妆、手表、珠宝、礼品、电子产品和日历礼盒的定制纸质包装。",
  },
  "card-decks": {
    name: "卡牌套装",
    menuName: "卡牌",
    description: "适用于塔罗牌、扑克牌、游戏卡、收藏卡及配套盒装的定制卡牌生产。",
  },
  stationery: {
    name: "文具印刷",
    menuName: "文具",
    description: "定制笔记本、DIY卡片、信封、说明书及各类配套纸品。",
  },
};

const subcategoryCopyCn: Record<string, SubcategoryCopy> = {
  "cosmetics-box": {
    name: "美妆盒",
    shortName: "美妆",
    summary: "适用于护肤、彩妆、香水和美妆礼套的高端包装。",
    description:
      "美妆盒可制作为硬盒、折叠彩盒、磁吸盒或带内托套装，帮助护肤和彩妆产品呈现清晰高级的品牌形象。",
    applications: ["护肤套装", "彩妆盘", "香水", "美妆工具"],
    options: ["硬质礼盒", "折叠彩盒", "磁吸结构", "定制内托"],
    finishes: ["烫金", "压凸", "局部UV", "触感膜"],
  },
  "watch-box": {
    name: "手表盒",
    shortName: "手表",
    summary: "适用于腕表、表带和高端配饰的结构化展示包装。",
    description:
      "手表盒兼顾保护和展示，可搭配硬纸板、泡棉或绒布内托，以及高级裱纸外观，用于零售、礼赠和收藏场景。",
    applications: ["腕表", "表带", "高端配饰", "礼品套装"],
    options: ["天地盖", "抽屉盒", "磁吸盒", "绒布内托"],
    finishes: ["纹理纸", "烫金LOGO", "压凸", "哑膜"],
  },
  "jewelry-box": {
    name: "珠宝盒",
    shortName: "珠宝",
    summary: "适用于戒指、项链、手链、耳饰和珠宝套装的精致包装。",
    description:
      "珠宝盒通过紧凑结构、触感材质和定制内托保护精细饰品，同时营造高级开盒体验。",
    applications: ["戒指", "项链", "手链", "耳饰"],
    options: ["翻盖盒", "抽屉盒", "天地盖", "泡棉或绒布内托"],
    finishes: ["烫金", "珠光纸", "压凸LOGO", "丝带细节"],
  },
  "gifts-box": {
    name: "礼品盒",
    shortName: "礼品",
    summary: "适用于节日套装、促销礼盒和高端零售组合包装。",
    description:
      "礼品盒适合季节性活动和产品组合，可加入内托、套筒、丝带和高识别度表面工艺。",
    applications: ["节日礼品", "品牌套装", "商务礼品", "零售组合"],
    options: ["硬质礼盒", "套筒盒", "书本盒", "定制分隔内托"],
    finishes: ["热烫金", "局部UV", "丝带开合", "特种纸"],
  },
  "electronics-box": {
    name: "电子产品盒",
    shortName: "电子",
    summary: "适用于小型设备、配件、线材和智能产品的保护型零售包装。",
    description:
      "电子产品盒平衡产品保护、信息展示和零售陈列，可搭配内托与说明书，适合紧凑型产品套装。",
    applications: ["小型设备", "耳机", "线材", "智能配件"],
    options: ["硬质套盒", "折叠彩盒", "内托托盘", "套筒加托盘"],
    finishes: ["哑膜", "局部UV", "防刮涂层", "全彩印刷"],
  },
  "calendar-box": {
    name: "日历盒",
    shortName: "日历",
    summary: "适用于倒数日历、节日礼盒和多格展示包装。",
    description:
      "日历盒适合分阶段揭晓产品、圣诞倒数日历和促销样品套装，可做抽屉系统、开窗门或分格托盘结构。",
    applications: ["倒数日历", "节日礼盒", "样品套装", "假日营销"],
    options: ["抽屉网格", "模切开门", "分格托盘", "套筒结构"],
    finishes: ["烫金编号", "全彩印刷", "局部UV", "哑膜"],
  },
  "tarot-cards": {
    name: "塔罗牌",
    shortName: "塔罗",
    summary: "定制塔罗牌和神谕卡，可搭配说明书与包装盒。",
    description:
      "塔罗牌项目可包含卡牌、说明书或指南书、硬盒、插口盒或磁吸盒，并与整体插画风格统一。",
    applications: ["塔罗牌", "神谕卡", "指南书套装", "收藏版卡牌"],
    options: ["350g艺术卡纸", "圆角", "指南书", "硬质卡牌盒"],
    finishes: ["哑光油", "烫边", "盒面烫金", "触感涂层"],
  },
  "playing-cards": {
    name: "扑克牌",
    shortName: "扑克牌",
    summary: "适用于游戏、促销、礼品和收藏的定制扑克牌。",
    description:
      "扑克牌可定制牌面、牌背、插口盒、硬盒和特殊工艺，适合游戏发行、品牌活动和收藏版项目。",
    applications: ["扑克牌", "游戏卡", "促销卡牌", "收藏版"],
    options: ["标准扑克尺寸", "自定义卡牌尺寸", "插口盒", "硬盒套装"],
    finishes: ["亚麻纹", "哑光油", "盒面烫金", "彩色牌边"],
  },
  notebook: {
    name: "笔记本",
    shortName: "笔记本",
    summary: "适用于品牌、活动、零售和礼品套装的定制笔记本。",
    description:
      "笔记本项目可定制封面、内页、装订方式、橡皮筋、书签和配套包装。",
    applications: ["零售笔记本", "企业礼品", "活动周边", "计划本套装"],
    options: ["精装", "软面", "线圈装", "锁线装"],
    finishes: ["封面烫金", "压凸", "哑膜", "定制环衬"],
  },
  "diy-cards": {
    name: "DIY卡片",
    shortName: "DIY卡片",
    summary: "DIY贺卡、手工卡片和互动纸艺卡片套装。",
    description:
      "DIY卡片可印刷、模切、压痕和折叠，并打包成零售、礼品或活动套装。",
    applications: ["贺卡", "手工套装", "活动卡", "礼品套装"],
    options: ["折叠卡", "模切卡", "压痕卡", "卡片与信封套装"],
    finishes: ["烫金细节", "局部UV", "纹理纸", "圆角"],
  },
  envelope: {
    name: "信封",
    shortName: "信封",
    summary: "适用于卡片、邀请函、文件和高端插页的定制信封。",
    description:
      "信封可匹配卡片套装、说明书或品牌插页，支持定制尺寸、纸张、封口形状和印刷工艺。",
    applications: ["邀请函信封", "卡片信封", "文件套", "礼品插页"],
    options: ["定制尺寸", "钱包式封口", "易撕自粘", "印刷内衬"],
    finishes: ["烫金LOGO", "图案印刷", "纹理纸", "专色印刷"],
  },
  "instruction-manual": {
    name: "说明书",
    shortName: "说明书",
    summary: "适用于产品包装的折页和小册子式说明书。",
    description:
      "说明书可制作成折页、骑马钉小册子或紧凑型插页，尺寸可匹配各类产品包装盒。",
    applications: ["电子产品", "美容仪器", "组装套件", "保修插页"],
    options: ["折页", "小册子", "多语言排版", "二维码版面"],
    finishes: ["黑白印刷", "全彩印刷", "哑光纸", "亮光纸"],
  },
};

export function localizeProductCategory(category: ProductCategory, lang: Lang): ProductCategory {
  if (lang !== "cn") {
    return category;
  }

  return {
    ...category,
    ...categoryCopyCn[category.slug],
    subcategories: category.subcategories.map((subcategory) =>
      localizeProductSubcategory(subcategory, lang),
    ),
  };
}

export function localizeProductSubcategory(
  subcategory: ProductSubcategory,
  lang: Lang,
): ProductSubcategory {
  if (lang !== "cn") {
    return subcategory;
  }

  return {
    ...subcategory,
    ...subcategoryCopyCn[subcategory.slug],
  };
}

export function getLocalizedProductCategories(lang: Lang) {
  return productCategories.map((category) => localizeProductCategory(category, lang));
}

export function getLocalizedAllSubcategories(lang: Lang) {
  return getLocalizedProductCategories(lang).flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      ...subcategory,
      categorySlug: category.slug,
      categoryName: category.name,
    })),
  );
}

export function getLocalizedProductSubcategoryResult(
  product: NonNullable<ReturnType<typeof getProductSubcategory>>,
  lang: Lang,
) {
  return {
    category: localizeProductCategory(product.category, lang),
    subcategory: localizeProductSubcategory(product.subcategory, lang),
  };
}
