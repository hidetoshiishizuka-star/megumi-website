"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CLINIC_INFO, NAV_CLINIC, NAV_CONCEPT } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

type HeaderVariant = "clinic" | "concept" | "top";

export default function Header({ variant = "top" }: { variant?: HeaderVariant }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = variant === "concept" ? NAV_CONCEPT : NAV_CLINIC;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // トップページはヒーロー上にオーバーレイ表示
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
              subtitle={variant === "concept" ? "院長 小澤竹俊" : undefined}
              invertColors={isOverlay && !scrolled}
            />
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
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

          {/* 右側 */}
          <div className="flex items-center gap-3">
            {/* デスクトップ: お問い合わせ */}
            <Link
              href={variant === "concept" ? "/concept/lecture" : "/clinic/contact"}
              className="hidden lg:inline-flex btn-pill btn-pill-sm btn-pill-primary"
            >
              お問い合わせ
            </Link>

            {/* 電話アイコン */}
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className={`flex items-center justify-center w-9 h-9 transition-colors rounded-full ${
                isOverlay && !scrolled
                  ? "text-white/70 hover:text-white"
                  : "text-text-muted hover:text-sunrise hover:bg-sunrise-light"
              }`}
              aria-label={`${CLINIC_INFO.tel}に電話をかける`}
              title={`${CLINIC_INFO.tel}（${CLINIC_INFO.hours}）`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>

            {/* モバイルハンバーガー */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 lg:hidden transition-colors ${
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
      <div className={`lg:hidden fixed inset-0 top-12 bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-2 -mt-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[22px] font-medium text-text-primary/80 hover:text-sunrise py-3 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {variant !== "top" && (
            <Link
              href={variant === "clinic" ? "/concept/about" : "/clinic/services"}
              className="text-[18px] font-medium text-twilight py-3 mt-4 border-t border-gray-200 pt-6"
              onClick={() => setMenuOpen(false)}
            >
              {variant === "clinic" ? "院長コンセプトサイトへ →" : "クリニック公式サイトへ →"}
            </Link>
          )}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <a href={`tel:${CLINIC_INFO.tel}`} className="text-lg text-text-secondary hover:text-sunrise transition-colors">
              {CLINIC_INFO.tel}
            </a>
            <p className="text-xs text-text-muted mt-1">{CLINIC_INFO.hours}・24時間365日対応</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
