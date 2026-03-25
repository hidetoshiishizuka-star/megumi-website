"use client";

import Link from "next/link";
import { useState } from "react";
import { CLINIC_INFO, NAV_CLINIC, NAV_CONCEPT } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

type HeaderVariant = "clinic" | "concept" | "top";

export default function Header({ variant = "top" }: { variant?: HeaderVariant }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = variant === "concept" ? NAV_CONCEPT : NAV_CLINIC;
  const accentColor = variant === "concept" ? "text-forest-dark" : "text-forest";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar - phone */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-50">
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="flex items-center gap-1 text-forest font-medium hover:text-forest-dark"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {CLINIC_INFO.tel}
          </a>
          <span className="text-text-muted hidden sm:block">
            24時間365日対応（緊急往診可）
          </span>
        </div>

        {/* Main nav */}
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
                className="text-sm text-text-secondary hover:text-forest transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
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

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-text-secondary hover:text-forest border-b border-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {variant !== "top" && (
            <Link
              href={variant === "clinic" ? "/concept/about" : "/clinic/services"}
              className="block py-3 mt-2 text-forest font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {variant === "clinic" ? "→ 院長コンセプトサイトへ" : "→ クリニック公式サイトへ"}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
