import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { columns } from "@/data/columns";

export function generateStaticParams() {
  return columns.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const column = columns.find((c) => c.slug === params.slug);
  if (!column) return {};
  return {
    title: column.title,
    description: column.summary.slice(0, 160),
  };
}

export default function ColumnDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const column = columns.find((c) => c.slug === params.slug);
  if (!column) notFound();

  const idx = columns.findIndex((c) => c.slug === params.slug);
  const prev = idx < columns.length - 1 ? columns[idx + 1] : null;
  const next = idx > 0 ? columns[idx - 1] : null;

  return (
    <>
        {/* ヒーロー */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
            <p className="overline text-sunrise-light mb-4">Column</p>
            <time className="text-white/80 text-sm">{column.date}</time>
            <h1 className="text-2xl md:text-3xl font-semibold text-white mt-4 leading-snug">
              {column.title}
            </h1>
          </div>
        </section>

        {/* 本文 */}
        <section className="py-16 md:py-24">
          <div className="max-w-[640px] mx-auto px-6">
            <div className="text-text-primary text-[15px] leading-[2] whitespace-pre-wrap">
              {column.body}
            </div>
          </div>
        </section>

        {/* 前後ナビ */}
        <section className="border-t border-gray-100">
          <div className="max-w-[640px] mx-auto px-6 py-12 flex justify-between items-start gap-4">
            {prev ? (
              <Link
                href={`/concept/blog/${prev.slug}`}
                className="group text-left"
              >
                <span className="text-xs text-text-muted">← 前の記事</span>
                <p className="text-sm text-navy group-hover:text-sunrise transition-colors mt-1 line-clamp-1">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/concept/blog/${next.slug}`}
                className="group text-right"
              >
                <span className="text-xs text-text-muted">次の記事 →</span>
                <p className="text-sm text-navy group-hover:text-sunrise transition-colors mt-1 line-clamp-1">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>

        {/* 一覧に戻る */}
        <section className="pb-16 text-center">
          <Link
            href="/concept/blog"
            className="btn-pill btn-pill-secondary text-sm"
          >
            コラム一覧へ戻る
          </Link>
        </section>
    </>
  );
}
