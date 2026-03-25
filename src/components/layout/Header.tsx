"use client";

import Link from "next/link";
import { useState } from "react";
import { CLINIC_INFO, NAV_CLINIC, NAV_CONCEPT } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

type HeaderVariant = "clinic" | "concept" | "top";

export default function Header({ variant = "top" }: { variant?: HeaderVariant }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = variant === "concept" ? NAV_CONCEPT : NAV_CLINIC;

  return (
    <>
      {/* Phone bar — always visible, navy background */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-2">
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="flex items-center gap-2 font-bold text-base sm:text-lg hover:text-sunrise-light transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {CLINIC_INFO.tel}
          </a>
          <span className="text-white/70 text-xs sm:text-sm">
            24時間365日対応
          </span>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo
                size="md"
                subtitle={variant === "concept" ? "院長 小澤竹俊" : undefined}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile: phone + menu */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${CLINIC_INFO.tel}`}
                className="flex items-center justify-center w-10 h-10 bg-navy text-white rounded-full hover:bg-navy-dark transition-colors"
                aria-label="電話する"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2"
                aria-label="メニュー"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-text-secondary hover:text-navy border-b border-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {variant !== "top" && (
              <Link
                href={variant === "clinic" ? "/concept/about" : "/clinic/services"}
                className="block py-3 mt-2 text-navy font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {variant === "clinic" ? "→ 院長コンセプトサイトへ" : "→ クリニック公式サイトへ"}
              </Link>
            )}
          </nav>
        )}
      </header>
    </>
  );
}
