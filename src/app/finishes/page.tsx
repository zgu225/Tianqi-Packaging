"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

type FinishProcess = {
  id: string;
  name: {
    en: string;
    cn: string;
  };
  tag: {
    en: string;
    cn: string;
  };
  description: {
    en: string;
    cn: string;
  };
  applications: {
    en: string;
    cn: string;
  };
  image: {
    src: string;
    alt: string;
    title: string;
    creator: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

const copy = {
  en: {
    eyebrow: "Surface Finishing Library",
    title: "Packaging-Focused Surface Finish References",
    intro:
      "A curated set of packaging, label, card, and gift-box references for advanced finishing options. Images are sourced from open-license libraries and credited on each card.",
    sourceNote:
      "Reference images are used under CC0, CC BY, CC BY-SA, or compatible open licenses. They show representative packaging-related visual effects; final finishes should be confirmed with Tianqi physical proofs.",
    sourceLabel: "Image source",
    licenseLabel: "License",
    applicationsLabel: "Best for",
    moreTitle: "More Finishing Options",
    moreText:
      "Need flocking, pearl varnish, glow ink, scented coating, laser die-cutting, special paper, or a combined finish plan? Contact us for more options.",
    cta: "Ask for More Options",
  },
  cn: {
    eyebrow: "表面处理工艺库",
    title: "更贴近包装成品的表面工艺参考",
    intro:
      "整理一组以包装、标签、卡牌、礼盒为主的表面处理参考图。图片来自开放授权图库，并在每张卡片中标注作者、授权和来源。",
    sourceNote:
      "参考图使用 CC0、CC BY、CC BY-SA 或兼容开放授权，仅用于展示包装相关的代表性视觉效果；最终效果仍建议以天启实物样品确认为准。",
    sourceLabel: "图片来源",
    licenseLabel: "授权",
    applicationsLabel: "适用场景",
    moreTitle: "更多工艺选项",
    moreText:
      "如需植绒、珠光油、夜光油墨、香味涂层、激光镂空、特种纸或多工艺组合方案，更多工艺选项请联系我们咨询。",
    cta: "咨询更多工艺",
  },
} as const;

const finishProcesses: FinishProcess[] = [
  {
    id: "raised-uv",
    name: { en: "Raised UV", cn: "浮雕UV" },
    tag: { en: "Gloss relief", cn: "立体亮面" },
    description: {
      en: "A thicker UV varnish builds raised glossy detail on logos, pattern lines, or focal artwork.",
      cn: "通过较厚的UV油墨形成局部凸起亮面，适合突出LOGO、纹样线条和重点图形。",
    },
    applications: {
      en: "Tea boxes, gift boxes, cosmetics cartons",
      cn: "茶叶礼盒、精品礼盒、美妆彩盒",
    },
    image: {
      src: "https://live.staticflickr.com/65535/48043121402_1f5b8429aa_b.jpg",
      alt: "Spot UV varnished tea gift box",
      title: "Full Over Spot UV Varnished Tea Gift Box",
      creator: "CustomPackaging",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/151611460@N04/48043121402",
    },
  },
  {
    id: "spot-uv",
    name: { en: "Spot UV", cn: "局部UV" },
    tag: { en: "Selective gloss", cn: "局部高光" },
    description: {
      en: "Gloss coating is applied only to selected areas, creating contrast against matte paper or lamination.",
      cn: "只在指定区域增加亮面涂层，与哑面纸张或覆膜形成清晰反差。",
    },
    applications: {
      en: "Rigid boxes, folding cartons, cards, sleeves",
      cn: "硬质礼盒、折叠彩盒、卡牌、套盒",
    },
    image: {
      src: "https://live.staticflickr.com/65535/48043060993_594242bcf9_b.jpg",
      alt: "Spot UV varnished tea gift box side view",
      title: "Full Over Spot UV Varnished Tea Gift Box Sideview",
      creator: "CustomPackaging",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/151611460@N04/48043060993",
    },
  },
  {
    id: "holographic-hot-foil",
    name: { en: "Holographic Hot Foil", cn: "全息烫金" },
    tag: { en: "Rainbow metallic", cn: "彩虹金属光" },
    description: {
      en: "Heat and pressure transfer holographic foil onto selected areas for rainbow metallic movement.",
      cn: "通过温度和压力将全息箔转印到指定区域，呈现随角度变化的彩虹金属光泽。",
    },
    applications: {
      en: "Card decks, CD sleeves, cosmetics, festival packaging",
      cn: "卡牌、光盘包装、美妆包装、节庆礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/3270/2851276170_4470f3cf79_b.jpg",
      alt: "Holographic CD packaging reference",
      title: "New CDs from Yesasia",
      creator: "hildgrim",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/22870477@N04/2851276170",
    },
  },
  {
    id: "three-d-foil",
    name: { en: "3D Foil Stamping", cn: "3D烫金" },
    tag: { en: "Raised foil", cn: "立体金属层" },
    description: {
      en: "Combines foil transfer with raised pressure to make metallic logos or patterns feel sculptural.",
      cn: "将烫印与立体压凸结合，让金属LOGO或图案呈现更明显的浮起层次。",
    },
    applications: {
      en: "Luxury gift boxes, apparel boxes, collector packaging",
      cn: "高端礼盒、服饰包装、收藏类包装",
    },
    image: {
      src: "https://live.staticflickr.com/65535/48043120152_989a71d7f8_b.jpg",
      alt: "Luxury gift box with gold foil stamping",
      title: "Luxury Gift Box with Gold Foil Stamping",
      creator: "CustomPackaging",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/151611460@N04/48043120152",
    },
  },
  {
    id: "security-foil",
    name: { en: "Security Foil Stamping", cn: "防伪烫印" },
    tag: { en: "Anti-counterfeit", cn: "防伪识别" },
    description: {
      en: "Hologram labels or security foils add authentication cues for sealed, limited, or certified products.",
      cn: "通过防伪全息标签或特殊烫印图案增加识别特征，适合封签、限量产品和认证包装。",
    },
    applications: {
      en: "Security labels, certificates, premium seals",
      cn: "防伪标签、证书、精品封签",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/da/GatewayTracingHologramLabel.jpg",
      alt: "Hologram security label reference",
      title: "GatewayTracingHologramLabel",
      creator: "Newone",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=5035589",
    },
  },
  {
    id: "glitter-screen-uv",
    name: { en: "Screen Glitter UV", cn: "丝印闪粉UV" },
    tag: { en: "Sparkle texture", cn: "闪粉颗粒" },
    description: {
      en: "Screen printing lays down glitter UV varnish for sparkling texture and stronger tactile contrast.",
      cn: "通过丝印方式叠加含闪粉的UV层，形成闪烁颗粒感和更强触感。",
    },
    applications: {
      en: "Beauty packaging, children products, holiday boxes",
      cn: "美妆包装、儿童产品、节日礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/2684/4149913399_1539439a46_b.jpg",
      alt: "Glitter packaging reference",
      title: "Packaging",
      creator: "GlitterandFrills",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/33334577@N06/4149913399",
    },
  },
  {
    id: "optically-variable-ink",
    name: { en: "Optically Variable Ink", cn: "光变油墨" },
    tag: { en: "Angle shift", cn: "角度变色" },
    description: {
      en: "Color-shifting ink changes appearance by viewing angle, giving labels and boxes a security or luxury effect.",
      cn: "光变油墨随观察角度改变颜色，可用于标签、礼盒和防伪包装的高端视觉效果。",
    },
    applications: {
      en: "Premium labels, limited boxes, anti-counterfeit packaging",
      cn: "高端标签、限量礼盒、防伪包装",
    },
    image: {
      src: "https://live.staticflickr.com/7057/6971376857_d3fff957bf_b.jpg",
      alt: "Iridescent gift box reference",
      title: "Hexagonal Origami Box #11, #12, #13, #14, #15",
      creator: "Dominic's pics",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/64097751@N00/6971376857",
    },
  },
  {
    id: "thermochromic-ink",
    name: { en: "Thermochromic Ink", cn: "热变油墨" },
    tag: { en: "Heat response", cn: "温度变色" },
    description: {
      en: "Ink changes color or opacity when touched or heated, creating interactive packaging moments.",
      cn: "油墨在触摸或受热后改变颜色或透明度，可增强包装互动性。",
    },
    applications: {
      en: "Candy boxes, beverage labels, interactive card packaging",
      cn: "糖果盒、饮料标签、互动卡牌包装",
    },
    image: {
      src: "https://live.staticflickr.com/940/29030295197_614f6ee086_b.jpg",
      alt: "Candy box packaging reference",
      title: "Candy Boxes Are Not Just Squares or Hearts",
      creator: "franklynhalstead",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/163785392@N02/29030295197",
    },
  },
  {
    id: "reverse-uv",
    name: { en: "Reverse UV", cn: "反向UV" },
    tag: { en: "Matte-gloss contrast", cn: "哑亮对比" },
    description: {
      en: "Creates contrast between rough matte fields and glossy details for a premium tactile surface.",
      cn: "通过哑面和亮面区域的反差形成高级触感，适合大面积背景与局部图案对比。",
    },
    applications: {
      en: "Tea boxes, cosmetics cartons, rigid boxes",
      cn: "茶叶盒、美妆彩盒、硬质礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/65535/48043121277_e8ed4fba54_b.jpg",
      alt: "Spot UV varnished tea gift box with matte and gloss contrast",
      title: "Full Over Spot UV Varnished Tea Gift Box Sideview Three",
      creator: "CustomPackaging",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/151611460@N04/48043121277",
    },
  },
  {
    id: "cast-cure",
    name: { en: "Cast & Cure", cn: "Cast&Cure工艺" },
    tag: { en: "Holographic pattern", cn: "全息纹理" },
    description: {
      en: "A reusable holographic film transfers a diffractive pattern into UV coating without leaving foil on the surface.",
      cn: "利用可重复使用的全息膜把衍射纹理转移到UV涂层中，表面无需残留金属箔。",
    },
    applications: {
      en: "Cosmetics cartons, retail sleeves, promotional boxes",
      cn: "美妆彩盒、零售套盒、促销礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/7067/6971384029_dcc596da5f_b.jpg",
      alt: "Iridescent packaging box reference",
      title: "Hexagonal Origami Box #10",
      creator: "Dominic's pics",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/64097751@N00/6971384029",
    },
  },
  {
    id: "cold-foil",
    name: { en: "Cold Foil", cn: "冷烫" },
    tag: { en: "Inline metallic", cn: "联机金属" },
    description: {
      en: "Adhesive and foil are transferred without heated dies, suitable for broader metallic areas and offset overprinting.",
      cn: "无需高温烫版，通过胶层与冷烫膜联机转移，适合较大面积金属效果和后续套印。",
    },
    applications: {
      en: "Retail cartons, labels, high-volume boxes",
      cn: "零售彩盒、标签、大批量包装盒",
    },
    image: {
      src: "https://live.staticflickr.com/65535/48043059798_c6cb6751a6_b.jpg",
      alt: "Gold foil stamped gift box reference",
      title: "Luxury Gift Box with Gold Foil Stamping Side View",
      creator: "CustomPackaging",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://www.flickr.com/photos/151611460@N04/48043059798",
    },
  },
  {
    id: "embossed-texture",
    name: { en: "Embossed Texture", cn: "压纹" },
    tag: { en: "Material grain", cn: "纸面肌理" },
    description: {
      en: "Mechanical embossing adds repeatable grain patterns such as leather, linen, canvas, or geometric textures.",
      cn: "通过机械压纹形成皮纹、布纹、帆布纹或几何纹理，提升纸张表面层次。",
    },
    applications: {
      en: "Watch boxes, jewelry boxes, notebooks, stationery",
      cn: "手表盒、珠宝盒、笔记本、文具包装",
    },
    image: {
      src: "https://live.staticflickr.com/3282/2952822474_4bfbab5f15_b.jpg",
      alt: "Embossed gift box reference",
      title: "Princess Mary Christmas 1914 Gift Box",
      creator: "David Spender",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/8313664@N03/2952822474",
    },
  },
];

export default function FinishesPage() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col gap-5 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950 md:flex-row md:items-start">
            <ShieldCheck className="mt-1 shrink-0 text-amber-600" size={22} />
            <p className="text-sm leading-relaxed">{t.sourceNote}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {finishProcesses.map((process) => (
              <article
                key={process.id}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] bg-stone-100">
                  <Image
                    src={process.image.src}
                    alt={process.image.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    {process.tag[lang]}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-primary">
                    {process.name[lang]}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {process.description[lang]}
                  </p>

                  <div className="mt-5 rounded-lg bg-stone-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {t.applicationsLabel}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {process.applications[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-500">
                    <p>
                      {t.sourceLabel}:{" "}
                      <a
                        href={process.image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent"
                      >
                        {process.image.title}
                        <ExternalLink size={12} />
                      </a>
                    </p>
                    <p className="mt-1">
                      {process.image.creator} · {t.licenseLabel}:{" "}
                      <a
                        href={process.image.licenseUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary hover:text-accent"
                      >
                        {process.image.license}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-primary p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">{t.moreTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {t.moreText}
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary transition hover:bg-white md:mt-0"
            >
              {t.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
