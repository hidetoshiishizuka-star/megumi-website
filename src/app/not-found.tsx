import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold text-navy mb-4">404</p>
        <h1 className="text-xl font-bold text-text-primary mb-3">
          ページが見つかりません
        </h1>
        <p className="text-text-secondary mb-8 text-sm leading-relaxed">
          お探しのページは移動または削除された可能性があります。
          URLをご確認いただくか、トップページからお探しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-dark transition-colors text-sm"
          >
            トップページへ
          </Link>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center justify-center border-2 border-navy text-navy px-6 py-3 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors text-sm"
          >
            {CLINIC_INFO.tel}
          </a>
        </div>
        <p className="text-xs text-text-muted mt-6">
          電話受付：{CLINIC_INFO.hours}
        </p>
      </div>
    </div>
  );
}
