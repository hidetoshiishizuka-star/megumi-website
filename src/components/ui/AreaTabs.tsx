"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { CLINIC_INFO } from "@/lib/constants";

const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), { ssr: false });

type Tab = "area" | "access";

export default function AreaTabs() {
  const [tab, setTab] = useState<Tab>("area");

  return (
    <div>
      {/* タブボタン */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setTab("area")}
          className={`px-5 py-3 text-sm font-medium transition-colors relative ${
            tab === "area"
              ? "text-navy"
              : "text-text-muted hover:text-navy"
          }`}
        >
          訪問対応エリア
          {tab === "area" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy" />
          )}
        </button>
        <button
          onClick={() => setTab("access")}
          className={`px-5 py-3 text-sm font-medium transition-colors relative ${
            tab === "access"
              ? "text-navy"
              : "text-text-muted hover:text-navy"
          }`}
        >
          外来アクセス
          {tab === "access" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy" />
          )}
        </button>
      </div>

      {/* 訪問対応エリア */}
      {tab === "area" && (
        <div>
          <p className="text-text-secondary mb-6">
            クリニックから原則5km圏内を対象としています。緩和ケア専門医などの対応が必要な終末期の患者さまの場合、5kmを超えて対応することがあります。
          </p>
          <ServiceAreaMap />
          <div className="bg-warm-gray rounded-xl p-6 mt-6">
            <p className="font-medium mb-2">主な対応地域</p>
            <p className="text-text-secondary">
              {CLINIC_INFO.areas.join("・")}
            </p>
            <p className="text-sm text-text-muted mt-2">
              ※ 対応エリアはクリニックから原則5km以内です。終末期の患者さまの場合、5kmを超えて対応することがあります。
            </p>
          </div>
        </div>
      )}

      {/* 外来アクセス */}
      {tab === "access" && (
        <div>
          <p className="text-text-secondary mb-6">
            外来受診の方は、下記の地図をご参照ください。
          </p>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=%E3%82%81%E3%81%90%E3%81%BF%E5%9C%A8%E5%AE%85%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="めぐみ在宅クリニック - Google Map"
            />
          </div>
          <div className="bg-warm-gray rounded-xl p-6 mt-6">
            <p className="font-medium mb-2">アクセス</p>
            <p className="text-text-secondary">{CLINIC_INFO.address}</p>
            <p className="text-text-secondary mt-1">{CLINIC_INFO.access}</p>
            <p className="text-sm text-text-muted mt-3">
              外来診療：{CLINIC_INFO.outpatient.general}／緩和ケア外来：{CLINIC_INFO.outpatient.palliative}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
