"use client";

import Image from "next/image";
import { useState } from "react";
import { CLINIC_INFO } from "@/lib/constants";
import { lectureRecords, lectureYears } from "@/data/lectures";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LecturePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = selectedYear
    ? lectureRecords.filter((l) => l.year === selectedYear)
    : lectureRecords;

  const displayed = showAll ? filtered : filtered.slice(0, 20);

  return (
    <>
      <Header variant="concept" />
      <main style={{ paddingTop: "var(--header-height, 48px)" }}>
        {/* ヒーロー */}
        <section className="gradient-twilight text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Lecture Requests</p>
            <h1 className="heading-hero text-white mb-6">講演・執筆依頼</h1>
            <p className="subheading text-white/90">
              院長 小澤竹俊への講演・執筆のご依頼を承ります
            </p>
          </div>
        </section>

        {/* 院長写真 + 概要 */}
        <section className="py-24 md:py-32">
          <div className="max-w-[740px] mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-40 h-52 rounded-3xl overflow-hidden relative shadow-xl shrink-0">
                  <Image
                    src="/images/director-portrait.jpg"
                    alt="院長 小澤竹俊"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-navy mb-2">小澤 竹俊</h2>
                  <p className="text-text-muted text-sm mb-4">めぐみ在宅クリニック院長 / エンドオブライフ・ケア協会代表理事</p>
                  <p className="text-text-secondary text-[15px] leading-relaxed">
                    ホスピスマインド・エンドオブライフケア・対人援助の思想をテーマに、
                    全国各地で講演活動を行っています。医療・介護関係者向けの研修会から、
                    一般市民向けの講座、学校での「いのちの授業」まで幅広く対応します。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 講演テーマ */}
        <section className="bg-surface py-24 md:py-32">
          <div className="max-w-[1120px] mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="overline text-dawn mb-4">Themes</p>
                <h2 className="heading-section text-navy">主な講演テーマ</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "苦しむ人への援助 — ホスピスマインドの実践",
                "いのちの授業 — 子どもたちに伝えたいこと",
                "在宅緩和ケアの現場から",
                "チームで支えるアドバンス・ケア・プランニング",
                "ユニバーサル・ホスピスマインド — 誰もが実践できるケア",
                "エンドオブライフ・ケアにおける援助者養成",
              ].map((theme, i) => (
                <ScrollReveal key={theme} delay={i * 80}>
                  <div className="rounded-3xl bg-white p-8 text-center min-h-[100px] flex items-center justify-center">
                    <p className="text-navy font-medium text-[15px]">{theme}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <p className="text-center text-text-muted text-sm mt-6">
                ※ 上記以外のテーマについてもご相談ください。
                院長だけでなく、同テーマを語れる認定ファシリテーターもご紹介できます。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 講演実績（130件） */}
        <section className="py-24 md:py-32">
          <div className="max-w-[740px] mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="overline text-twilight mb-4">Track Record</p>
                <h2 className="heading-section text-navy">講演実績</h2>
                <p className="subheading mt-4 text-text-muted">
                  全国の病院・自治体・学会・学校等で{lectureRecords.length}件以上の実績
                </p>
              </div>
            </ScrollReveal>

            {/* 年別フィルタ */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              <button
                onClick={() => { setSelectedYear(null); setShowAll(false); }}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  selectedYear === null
                    ? "bg-navy text-white"
                    : "bg-surface text-navy hover:bg-navy-light"
                }`}
              >
                すべて ({lectureRecords.length})
              </button>
              {lectureYears.map((year) => (
                <button
                  key={year}
                  onClick={() => { setSelectedYear(year); setShowAll(false); }}
                  className={`px-5 py-2 rounded-full text-sm transition-colors ${
                    selectedYear === year
                      ? "bg-navy text-white"
                      : "bg-surface text-navy hover:bg-navy-light"
                  }`}
                >
                  {year}年
                </button>
              ))}
            </div>

            {/* 実績一覧 */}
            <div className="divide-y divide-gray-100">
              {displayed.map((lecture, i) => (
                <div key={`${lecture.date}-${i}`} className="py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-text-muted text-xs shrink-0 tabular-nums w-20">
                      {lecture.date.slice(0, 20)}
                    </span>
                    <div>
                      <p className="text-navy font-medium text-[15px] leading-snug">{lecture.title}</p>
                      {lecture.location && (
                        <p className="text-text-muted text-xs mt-0.5">{lecture.location.slice(0, 60)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && filtered.length > 20 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="btn-pill btn-pill-secondary"
                >
                  すべての実績を表示（{filtered.length}件）
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-text-muted py-12">該当する実績がありません。</p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-dawn text-white">
          <div className="max-w-[740px] mx-auto px-6 py-24 md:py-32 text-center">
            <ScrollReveal>
              <h2 className="heading-section text-white mb-6">講演・執筆のご依頼</h2>
              <p className="subheading text-white/90 mb-10">
                費用・日程等はご相談の上で決定いたします。
                まずはお気軽にお問い合わせください。
              </p>
              <a
                href={`tel:${CLINIC_INFO.telPlanning}`}
                className="btn-pill bg-white text-navy font-medium hover:bg-white/90"
              >
                {CLINIC_INFO.telPlanning}（企画運営係）
              </a>
              <p className="text-white/70 text-xs mt-4">月〜金 9:00〜17:00</p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
