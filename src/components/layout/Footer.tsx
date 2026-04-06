import Link from "next/link";
import Image from "next/image";
import { CLINIC_INFO, NAV_CLINIC, NAV_CONCEPT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/images/usagi-original.png"
                  alt="めぐみうさぎ"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">
                めぐみ在宅クリニック
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3">{CLINIC_INFO.address}</p>
            <p className="text-sm">
              <span className="text-gray-400">診療のお問い合わせ：</span>
              <a href={`tel:${CLINIC_INFO.tel}`} className="text-white hover:text-navy-light">
                {CLINIC_INFO.tel}
              </a>
            </p>
            <p className="text-sm">
              <span className="text-gray-400">研修・講演・取材：</span>
              <Link href="/clinic/contact" className="text-white hover:text-navy-light underline">
                お問い合わせフォーム
              </Link>
            </p>
            <p className="text-sm mt-2 text-gray-400">
              電話受付：{CLINIC_INFO.hours}
            </p>
          </div>

          {/* Clinic links */}
          <div>
            <h3 className="text-white font-medium mb-4">クリニック</h3>
            <ul className="space-y-2">
              {NAV_CLINIC.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concept links */}
          <div>
            <h3 className="text-white font-medium mb-4">院長 小澤竹俊</h3>
            <ul className="space-y-2">
              {NAV_CONCEPT.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>&copy; 2006–{new Date().getFullYear()} めぐみ在宅クリニック</p>
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
