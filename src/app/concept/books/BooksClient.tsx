"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { books as fallbackBooks, type Book } from "@/data/books";
import { mediaEntries as fallbackMedia, mediaCategories, type MediaCategory, type MediaEntry } from "@/data/media";

interface Props {
  booksFromServer?: Book[];
  mediaFromServer?: MediaEntry[];
}

export default function BooksClient({ booksFromServer, mediaFromServer }: Props) {
  const books = booksFromServer && booksFromServer.length > 0 ? booksFromServer : fallbackBooks;
  const media = mediaFromServer && mediaFromServer.length > 0 ? mediaFromServer : fallbackMedia;
  const [selectedCategory, setSelectedCategory] = useState<MediaCategory | null>(null);
  const [showAllMedia, setShowAllMedia] = useState(false);

  const filteredMedia = selectedCategory
    ? media.filter((e) => e.category === selectedCategory)
    : media;

  const displayedMedia = showAllMedia ? filteredMedia : filteredMedia.slice(0, 20);

  return (
    <>
        {/* Hero */}
        <section className="gradient-twilight text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Books & Media</p>
            <h1 className="heading-hero text-white mb-6">著書・メディア</h1>
            <p className="subheading text-white/90">
              院長 小澤竹俊の著書{books.length}冊とメディア掲載・出演{media.length}件
            </p>
          </div>
        </section>

        {/* 著書 */}
        <section className="py-24 md:py-32">
          <div className="max-w-[var(--content-wide)] mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="overline text-dawn mb-4">Publications</p>
                <h2 className="heading-section text-navy">著書一覧</h2>
                <p className="subheading mt-4 text-text-muted">全{books.length}冊</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book, i) => (
                <ScrollReveal key={book.title} delay={i * 60}>
                  <div className="group">
                    <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center p-2">
                      <Image
                        src={book.coverImage.startsWith("http") ? book.coverImage : `/images/books/${book.coverImage}`}
                        alt={book.title}
                        width={300}
                        height={450}
                        className="object-contain w-full h-full drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-navy leading-snug mb-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {book.publisher}（{book.date.slice(0, 4)}年）
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* メディア掲載・出演 */}
        <section className="bg-surface py-24 md:py-32">
          <div className="max-w-[var(--content-wide)] mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="overline text-twilight mb-4">Media</p>
                <h2 className="heading-section text-navy">メディア掲載・出演</h2>
                <p className="subheading mt-4 text-text-muted">全{media.length}件</p>
              </div>
            </ScrollReveal>

            {/* カテゴリフィルタ */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              <button
                onClick={() => { setSelectedCategory(null); setShowAllMedia(false); }}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === null
                    ? "bg-navy text-white"
                    : "bg-white text-navy hover:bg-navy-light"
                }`}
              >
                すべて ({media.length})
              </button>
              {mediaCategories.map((cat) => {
                const count = media.filter((e) => e.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setShowAllMedia(false); }}
                    className={`px-5 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === cat
                        ? "bg-navy text-white"
                        : "bg-white text-navy hover:bg-navy-light"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* メディア一覧 */}
            <div className="divide-y divide-gray-200 bg-white rounded-2xl overflow-hidden">
              {displayedMedia.map((entry, i) => (
                <div key={`${entry.sortDate}-${i}`} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-text-muted shrink-0 tabular-nums w-24 pt-0.5">
                      {entry.details.match(/\d{4}年\d{1,2}月?\d{0,2}日?/)?.[0] || entry.sortDate.slice(0, 7)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-xs bg-navy-light text-navy px-2 py-0.5 rounded-full shrink-0">
                          {entry.category}
                        </span>
                        <span className="text-xs text-twilight font-medium shrink-0">
                          {entry.publication}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mt-1 leading-snug">
                        {entry.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAllMedia && filteredMedia.length > 20 && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setShowAllMedia(true)}
                  className="btn-pill btn-pill-secondary"
                >
                  すべて表示（{filteredMedia.length}件）
                </button>
              </div>
            )}

            {filteredMedia.length === 0 && (
              <p className="text-center text-text-muted py-12">該当する掲載情報がありません。</p>
            )}
          </div>
        </section>
    </>
  );
}
