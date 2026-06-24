"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

type FinishId =
  | "foil"
  | "emboss"
  | "deboss"
  | "spotUv"
  | "matte"
  | "gloss"
  | "softTouch"
  | "texture";

const copy = {
  en: {
    eyebrow: "Surface Finishing Studio",
    title: "Preview Finishes on One Paper Box Sample",
    intro:
      "Select a finishing process and the sample box updates instantly, helping you compare shine, texture, depth, and premium detail before production.",
    sampleLabel: "Live sample",
    processLabel: "Choose a finish",
    notesTitle: "Production Notes",
    notes: [
      "Final effect depends on paper stock, artwork coverage, and stamping area.",
      "We recommend a physical sample before bulk production.",
      "Multiple finishes can be combined on the same packaging design.",
    ],
    quote: "Request a Finish Sample",
    finishes: {
      foil: {
        name: "Hot Foil Stamping",
        tag: "Metallic",
        description: "A reflective metallic layer pressed onto logos, borders, or decorative patterns.",
        bestFor: "Luxury logos, gift boxes, jewelry, cosmetics",
      },
      emboss: {
        name: "Embossing",
        tag: "Raised",
        description: "Raises selected artwork from the surface for a tactile premium detail.",
        bestFor: "Monograms, icons, minimalist premium packaging",
      },
      deboss: {
        name: "Debossing",
        tag: "Pressed",
        description: "Presses artwork inward for a subtle shadowed impression on paper.",
        bestFor: "Quiet luxury, textured paper, stationery sets",
      },
      spotUv: {
        name: "Spot UV",
        tag: "Gloss Detail",
        description: "Adds glossy coating only to selected areas while the rest remains matte.",
        bestFor: "Pattern highlights, logos, product names",
      },
      matte: {
        name: "Matte Lamination",
        tag: "Soft Low-glare",
        description: "Creates a smooth non-reflective protective film with a clean modern finish.",
        bestFor: "Retail cartons, electronics, premium paper boxes",
      },
      gloss: {
        name: "Gloss Lamination",
        tag: "High Shine",
        description: "Adds a bright protective surface that makes color and highlights more vivid.",
        bestFor: "Colorful packaging, promotional boxes, retail display",
      },
      softTouch: {
        name: "Soft-touch Coating",
        tag: "Velvet Feel",
        description: "A smooth tactile coating that gives paper a velvety premium hand feel.",
        bestFor: "Beauty, fragrance, luxury gift packaging",
      },
      texture: {
        name: "Textured Paper",
        tag: "Material",
        description: "Uses paper grain such as linen, leather, canvas, or specialty art paper.",
        bestFor: "Jewelry, invitations, premium stationery, rigid boxes",
      },
    },
  },
  cn: {
    eyebrow: "表面处理工艺演示",
    title: "在同一个纸盒样本上预览不同工艺",
    intro:
      "选择一种表面处理工艺，右侧样本会即时显示对应效果，方便比较光泽、纹理、凹凸层次和高端细节。",
    sampleLabel: "实时样本",
    processLabel: "选择工艺",
    notesTitle: "生产提示",
    notes: [
      "最终效果会受纸张、图案面积和烫印位置影响。",
      "批量生产前建议先确认实物样品。",
      "同一个包装设计可以组合多种表面工艺。",
    ],
    quote: "申请工艺样品",
    finishes: {
      foil: {
        name: "热烫金",
        tag: "金属光泽",
        description: "将金属箔通过压力和温度转印到LOGO、边框或装饰图案上。",
        bestFor: "高端LOGO、礼盒、珠宝、美妆包装",
      },
      emboss: {
        name: "压凸",
        tag: "立体凸起",
        description: "让局部图案从纸面凸起，形成可触摸的高级细节。",
        bestFor: "字母标识、图标、极简高端包装",
      },
      deboss: {
        name: "压凹",
        tag: "内凹层次",
        description: "将图案压入纸面，形成低调的阴影与凹陷质感。",
        bestFor: "轻奢包装、纹理纸、文具套装",
      },
      spotUv: {
        name: "局部UV",
        tag: "局部亮面",
        description: "只在指定区域增加亮面涂层，其余区域保持哑光。",
        bestFor: "图案高光、LOGO、产品名称",
      },
      matte: {
        name: "哑膜",
        tag: "低反光",
        description: "形成平滑、低反光的保护膜，视觉更克制现代。",
        bestFor: "零售彩盒、电子产品、高端纸盒",
      },
      gloss: {
        name: "亮膜",
        tag: "高光泽",
        description: "形成明亮保护表面，让色彩和高光更鲜明。",
        bestFor: "彩色包装、促销礼盒、零售陈列",
      },
      softTouch: {
        name: "触感膜",
        tag: "丝绒手感",
        description: "带来柔滑细腻的触感，让纸面拥有类丝绒的高级手感。",
        bestFor: "美妆、香水、高端礼品包装",
      },
      texture: {
        name: "纹理纸",
        tag: "材料质感",
        description: "使用亚麻纹、皮革纹、帆布纹或特种艺术纸增强材质表现。",
        bestFor: "珠宝、邀请函、高端文具、硬质礼盒",
      },
    },
  },
} as const;

const finishIds: FinishId[] = [
  "foil",
  "emboss",
  "deboss",
  "spotUv",
  "matte",
  "gloss",
  "softTouch",
  "texture",
];

const previewClass: Record<FinishId, string> = {
  foil: "finish-preview finish-foil",
  emboss: "finish-preview finish-emboss",
  deboss: "finish-preview finish-deboss",
  spotUv: "finish-preview finish-spot-uv",
  matte: "finish-preview finish-matte",
  gloss: "finish-preview finish-gloss",
  softTouch: "finish-preview finish-soft-touch",
  texture: "finish-preview finish-texture",
};

export default function FinishesPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [active, setActive] = useState<FinishId>("foil");
  const activeFinish = t.finishes[active];

  return (
    <main className="min-h-screen bg-stone-50 pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight">{t.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                {t.processLabel}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary">
                {activeFinish.name}
              </h2>
              <p className="mt-3 text-gray-600">{activeFinish.description}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {finishIds.map((id) => {
                const finish = t.finishes[id];
                const isActive = active === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActive(id)}
                    className={`rounded-lg border p-4 text-left transition ${
                      isActive
                        ? "border-accent bg-white shadow-lg"
                        : "border-gray-200 bg-white/70 hover:border-accent/50 hover:bg-white"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      {finish.tag}
                    </span>
                    <span className="mt-1 block font-bold text-primary">
                      {finish.name}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-gray-500">
                      {finish.bestFor}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-xl shadow-black/5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {t.sampleLabel}
                </p>
                <h3 className="mt-1 text-xl font-bold text-primary">
                  {activeFinish.name}
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
                {active === "foil" || active === "spotUv" || active === "gloss" ? (
                  <Sparkles size={20} />
                ) : (
                  <Layers size={20} />
                )}
              </div>
            </div>

            <div className={previewClass[active]}>
              <Image
                src="/finishes/sample/finish-sample-base.png"
                alt={activeFinish.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="finish-front-panel">
                <span className="finish-mark">Tianqi</span>
                <span className="finish-line" />
              </div>
              <div className="finish-sheen" />
            </div>

            <div className="mt-6 rounded-lg bg-stone-50 p-5">
              <h4 className="font-bold text-primary">{t.notesTitle}</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {t.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {note}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent hover:text-primary"
              >
                {t.quote}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
