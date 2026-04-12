"use client";

import dynamic from "next/dynamic";
import { CLINIC_INFO } from "@/lib/constants";

const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), { ssr: false });

export default function AreaTabs() {
  return (
    <div className="space-y-16">
      {/* 外来アクセス（Google Map） */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-4">外来アクセス</h3>
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=%E3%82%81%E3%81%90%E3%81%BF%E5%9C%A8%E5%AE%85%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="めぐみ在宅クリニック - Google Map"
          />
        </div>
        <div className="bg-warm-gray rounded-xl p-6 mt-4">
          <p className="font-medium mb-2">アクセス</p>
          <p className="text-text-secondary">{CLINIC_INFO.address}</p>
          <p className="text-text-secondary mt-1">{CLINIC_INFO.access}</p>
          <p className="text-sm text-text-muted mt-3">
            外来診療：{CLINIC_INFO.outpatient.general}／緩和ケア外来：{CLINIC_INFO.outpatient.palliative}
          </p>
        </div>
      </div>

      {/* 訪問対応エリア（Leaflet 5km圏） */}
      <div>
        <h3 className="text-lg font-bold text-navy mb-4">訪問対応エリア</h3>
        <p className="text-text-secondary mb-6">
          クリニックから原則5km圏内を対象としています。
        </p>
        <ServiceAreaMap />
        <div className="bg-warm-gray rounded-xl p-6 mt-4">
          <p className="font-medium mb-2">主な対応地域</p>
          <p className="text-text-secondary">
            {CLINIC_INFO.areas.join("・")}
          </p>
          <p className="text-sm text-text-muted mt-2">
            ※ 対応エリアはクリニックから原則5km以内です。
          </p>
        </div>
      </div>
    </div>
  );
}
