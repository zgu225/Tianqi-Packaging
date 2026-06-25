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
    title: "Representative Print Finishes for Premium Packaging",
    intro:
      "A curated visual library of advanced surface treatments. Images are sourced from open-license libraries and credited on each card to reduce copyright risk.",
    sourceNote:
      "Reference images are used under CC0, CC BY, or compatible open licenses. They show representative visual effects; final packaging samples should be confirmed with Tianqi physical proofs.",
    sourceLabel: "Image source",
    licenseLabel: "License",
    applicationsLabel: "Best for",
    cta: "Discuss Finishing Options",
  },
  cn: {
    eyebrow: "表面处理工艺库",
    title: "高端包装常用表面处理工艺参考",
    intro:
      "整理一组更接近真实工艺的视觉参考图，图片来自开放授权图库，并在每张卡片中标注作者、授权和来源，降低版权风险。",
    sourceNote:
      "参考图使用 CC0、CC BY 或兼容开放授权，仅用于展示代表性视觉效果；最终效果仍建议以天启实物样品确认为准。",
    sourceLabel: "图片来源",
    licenseLabel: "授权",
    applicationsLabel: "适用场景",
    cta: "咨询工艺方案",
  },
} as const;

const finishProcesses: FinishProcess[] = [
  {
    id: "raised-uv",
    name: { en: "Raised UV", cn: "浮雕UV" },
    tag: { en: "Gloss relief", cn: "立体亮面" },
    description: {
      en: "A thick UV varnish builds raised glossy details on logos, patterns, or premium graphic areas.",
      cn: "通过较厚的UV油墨形成局部凸起亮面，适合突出LOGO、纹样和重点图形区域。",
    },
    applications: {
      en: "Luxury cards, cosmetics boxes, rigid gift boxes",
      cn: "高端卡牌、美妆盒、硬质礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/1471/23995000956_a61d010d48_b.jpg",
      alt: "Embossed business card showing raised print detail",
      title: "Embossed business cards from Porcelain Tea Parlour",
      creator: "David Jackmanson",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/58301516@N00/23995000956",
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
      en: "Tarot decks, cosmetics, festival gift packaging",
      cn: "塔罗牌、美妆包装、节庆礼盒",
    },
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Holographic_Hot_Stamping_Foil_From_Karul_Holo_Science_India_Ltd.jpg",
      alt: "Holographic hot stamping foil roll",
      title: "Holographic Hot Stamping Foil",
      creator: "Karul Holo Science India Ltd",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=168094490",
    },
  },
  {
    id: "three-d-foil",
    name: { en: "3D Foil Stamping", cn: "3D烫金" },
    tag: { en: "Raised foil", cn: "立体金属层" },
    description: {
      en: "Combines foil transfer with raised pressure to give metallic elements a sculptural 3D feel.",
      cn: "将烫印与立体压凸结合，让金属图案呈现更明显的浮起层次。",
    },
    applications: {
      en: "Premium logos, collector boxes, invitation sets",
      cn: "高端LOGO、收藏盒、邀请函套装",
    },
    image: {
      src: "https://live.staticflickr.com/2229/2142104611_54bc7acece_b.jpg",
      alt: "Foil card reference with metallic detail",
      title: "'O' Christmas card",
      creator: "Lauren Manning",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/28541331@N00/2142104611",
    },
  },
  {
    id: "security-foil",
    name: { en: "Security Foil Stamping", cn: "防伪烫印" },
    tag: { en: "Anti-counterfeit", cn: "防伪识别" },
    description: {
      en: "Security hologram or foil elements can add authentication cues for certificates, limited editions, and sealed packaging.",
      cn: "通过防伪全息或特殊烫印图案增加识别特征，适合证书、限量产品和封签包装。",
    },
    applications: {
      en: "Certificates, seals, premium limited editions",
      cn: "证书、防伪封签、限量高端包装",
    },
    image: {
      src: "https://live.staticflickr.com/5053/5480841196_9d196d7272_b.jpg",
      alt: "Security hologram detail",
      title: "Visa Dove Hologram Detail",
      creator: "Dominic's pics",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/64097751@N00/5480841196",
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
      en: "Beauty packaging, children’s products, holiday boxes",
      cn: "美妆包装、儿童产品、节日礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/3886/15011499751_cdc3f90ec4_b.jpg",
      alt: "Transparent glitter material reference",
      title: "Glitter Trans-Clear",
      creator: "Brick Colorstream",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/126975831@N07/15011499751",
    },
  },
  {
    id: "optically-variable-ink",
    name: { en: "Optically Variable Ink", cn: "光变油墨" },
    tag: { en: "Angle shift", cn: "角度变色" },
    description: {
      en: "Pigments shift color as viewing angle changes, often used for security, limited editions, and premium detail.",
      cn: "颜料随观察角度发生颜色变化，常用于防伪、高端限量款和特殊视觉细节。",
    },
    applications: {
      en: "Anti-counterfeit packaging, premium labels, certificates",
      cn: "防伪包装、高端标签、证书类印刷品",
    },
    image: {
      src: "https://collections.museumsvictoria.com.au/content/media/45/1324545-large.jpg",
      alt: "Bank note reference with optically variable security ink",
      title: "Polymer Bank Note - 10 Dollars",
      creator: "Photographer: Nick Crotty",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      sourceUrl: "https://collections.museumsvictoria.com.au/items/2234219",
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
      en: "Interactive cards, novelty packaging, promotional boxes",
      cn: "互动卡牌、创意包装、促销礼盒",
    },
    image: {
      src: "https://live.staticflickr.com/8424/7690734490_ac9b8fc315_b.jpg",
      alt: "Thermochromic ink print reference",
      title: "Mr. Pink is Printed",
      creator: "daan",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/70195785@N00/7690734490",
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
      en: "Rigid boxes, folding cartons, business cards",
      cn: "硬质礼盒、折叠彩盒、商务卡片",
    },
    image: {
      src: "https://live.staticflickr.com/3015/2950769045_41ca0e429b_b.jpg",
      alt: "Business card reference with varnish contrast",
      title: "Darek Fedko Business Card",
      creator: "ósma trzydzieści",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/72462927@N00/2950769045",
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
      en: "Cosmetics cartons, retail sleeves, premium promotional packaging",
      cn: "美妆彩盒、零售套盒、高端促销包装",
    },
    image: {
      src: "https://live.staticflickr.com/3905/14955440009_19325e2381_b.jpg",
      alt: "Holographic paper detail reference",
      title: "Holographic paper detail",
      creator: "wyldvision",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/126767021@N06/14955440009",
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
      en: "Retail cartons, labels, high-volume packaging",
      cn: "零售彩盒、标签、大批量包装",
    },
    image: {
      src: "https://live.staticflickr.com/7056/6825264646_897db52dbf_b.jpg",
      alt: "Iridescent foil box reference",
      title: "Hexagonal Origami Box with Lid #10",
      creator: "Dominic's pics",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/64097751@N00/6825264646",
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
      src: "https://live.staticflickr.com/4022/4408341600_795dfe9cf1_b.jpg",
      alt: "Textured paper and leather-like embossed reference",
      title: "Texture - leather - notes",
      creator: "Shelley Freedman",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://www.flickr.com/photos/27932679@N02/4408341600",
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

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent hover:text-primary"
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
