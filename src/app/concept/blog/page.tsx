"use client";

import Link from "next/link";
import { useState } from "react";
import { columns, columnYears } from "@/data/columns";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BlogPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = selectedYear
    ? columns.filter((c) => c.year === selectedYear)
    : columns;

  const displayed = showAll ? filtered : filtered.slice(0, 15);

  return (
    <>
      <Header variant="concept" />
      <main style={{ paddingTop: "var(--header-height, 48px)" }}>
        {/* ヒーロー */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Column</p>
            <h1 className="heading-hero text-white mb-6">院長コラム</h1>
            <p className="subheading text-white/60">
              院長 小澤竹俊が在宅医療・ホスピスマインドについて綴るコラムです
            </p>
          </div>
        </section>

        {/* コラム一覧 */}
        <section className="py-24 md:py-32">
          <div className="max-w-[740px] mx-auto px-6">
            {/* 年別フィルタ */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                <button
                  onClick={() => { setSelectedYear(null); setShowAll(false); }}
                  className={`px-5 py-2 rounded-full text-sm transition-colors ${
                    selectedYear === null
                      ? "bg-navy text-white"
                      : "bg-warm-gray text-navy hover:bg-navy-light"
                  }`}
                >
                  すべて ({columns.length})
                </button>
                {columnYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setShowAll(false); }}
                    className={`px-5 py-2 rounded-full text-sm transition-colors ${
                      selectedYear === year
                        ? "bg-navy text-white"
                        : "bg-warm-gray text-navy hover:bg-navy-light"
                    }`}
                  >
                    {year}年
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* 記事一覧 */}
            <div className="divide-y divide-gray-100">
              {displayed.map((column) => (
                <Link
                  key={column.slug}
                  href={`/concept/blog/${column.slug}`}
                  className="block py-5 group hover:opacity-70 transition-opacity"
                >
                  <div className="flex items-start gap-4">
                    <time className="text-text-muted text-sm shrink-0 pt-0.5 w-24 tabular-nums">
                      {column.date}
                    </time>
                    <div className="min-w-0">
                      <h2 className="text-navy font-medium group-hover:text-sunrise transition-colors mb-1">
                        {column.title}
                      </h2>
                      <p className="text-text-muted text-sm line-clamp-2 leading-relaxed">
                        {column.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {!showAll && filtered.length > 15 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAll(true)}
                  className="btn-pill btn-pill-secondary"
                >
                  すべてのコラムを表示（{filtered.length}件）
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-text-muted py-12">
                該当する記事がありません。
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
