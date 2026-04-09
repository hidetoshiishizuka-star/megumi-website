"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

type HeaderVariant = "clinic" | "concept" | "top";

const NAV_TOP = [
  { label: "診療案内", href: "/clinic/services" },
  { label: "はじめての方へ", href: "/clinic/first-visit" },
  { label: "院長・コンセプト", href: "/concept/about" },
  { label: "採用・見学", href: "/clinic/recruit" },
  { label: "連携先の方", href: "/clinic/partnership" },
  { label: "お問い合わせ", href: "/clinic/contact" },
];

export default function Header({ variant = "top" }: { variant?: HeaderVariant }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOverlay = variant === "top";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "frosted-glass border-b border-black/[0.06] shadow-sm"
          : isOverlay
            ? "frosted-glass-light"
            : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex items-center justify-between h-12">
          {/* ロゴ */}
          <Link href="/" className="shrink-0">
            <Logo
              size="sm"
              showText={true}
              invertColors={isOverlay && !scrolled}
            />
          </Link>

          {/* デスクトップナビ（中央） */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_TOP.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-[13px] transition-colors rounded-full ${
                  isOverlay && !scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-text-secondary hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右側: 電話番号 + ハンバーガー */}
          <div className="flex items-center gap-2">
            {/* 電話番号（デスクトップ: テキスト表示） */}
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors text-[13px] font-semibold ${
                isOverlay && !scrolled
                  ? "text-white hover:text-white/80"
                  : "text-sunrise hover:text-sunrise-dark"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CLINIC_INFO.tel}
            </a>

            {/* 電話アイコン（モバイル: アイコンのみ） */}
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className={`sm:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                isOverlay && !scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-sunrise hover:bg-sunrise-light"
              }`}
              aria-label={`${CLINIC_INFO.tel}に電話をかける`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>

            {/* モバイルハンバーガー */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-3 lg:hidden transition-colors relative z-[60] ${
                isOverlay && !scrolled ? "text-white/70" : "text-text-secondary"
              }`}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`lg:hidden fixed inset-0 top-12 bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 overflow-y-auto ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <nav className="flex flex-col px-8 py-8 gap-1">
          {/* クリニック */}
          <p className="text-xs text-text-muted font-medium mt-2 mb-1">クリニック</p>
          {[
            { label: "診療案内", href: "/clinic/services" },
            { label: "はじめての方へ", href: "/clinic/first-visit" },
            { label: "費用について", href: "/clinic/fee" },
            { label: "よくあるご質問", href: "/clinic/faq" },
            { label: "スタッフ紹介", href: "/clinic/staff" },
            { label: "ご遺族の方へ", href: "/clinic/grief" },
            { label: "医療機関・連携先の方", href: "/clinic/partnership" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-medium text-text-primary/80 hover:text-sunrise py-2 transition-colors" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}

          {/* 院長・コンセプト */}
          <p className="text-xs text-text-muted font-medium mt-6 mb-1">院長・コンセプト</p>
          {[
            { label: "院長・コンセプト", href: "/concept/about" },
            { label: "ユニバーサル・ホスピスマインド", href: "/concept/philosophy" },
            { label: "緩和ケアとは", href: "/concept/palliative-care" },
            { label: "講演・執筆依頼", href: "/concept/lecture" },
            { label: "著書・メディア", href: "/concept/books" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-medium text-text-primary/80 hover:text-sunrise py-2 transition-colors" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}

          {/* 採用・見学 */}
          <p className="text-xs text-text-muted font-medium mt-6 mb-1">採用・見学</p>
          {[
            { label: "採用情報", href: "/clinic/recruit" },
            { label: "見学・研修", href: "/concept/training" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-medium text-text-primary/80 hover:text-sunrise py-2 transition-colors" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}

          {/* お問い合わせ */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link href="/clinic/contact" className="text-lg font-medium text-navy hover:text-sunrise py-2 transition-colors block" onClick={() => setMenuOpen(false)}>
              お問い合わせ
            </Link>
            <a href={`tel:${CLINIC_INFO.tel}`} className="text-lg font-semibold text-sunrise hover:text-sunrise-dark transition-colors inline-flex items-center gap-2 py-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CLINIC_INFO.tel}
            </a>
            <p className="text-xs text-text-muted">{CLINIC_INFO.hours}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
