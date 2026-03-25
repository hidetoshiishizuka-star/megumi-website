import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "医療機関の方へ",
  description: "医療機関・ケアマネジャーの方へ。患者さまのご紹介・連携窓口のご案内。",
};

export default function PartnershipPage() {
  return (
    <>
      <PageHeader
        title="医療機関の方へ"
        subtitle="患者さまのご紹介・地域連携のご案内"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-12">
          <p className="text-text-secondary leading-relaxed">
            めぐみ在宅クリニックは、地域の病院・訪問看護ステーション・ケアマネジャーの皆さまとの
            連携を大切にしています。2006年の開院以来20年にわたり、地域医療の一翼を担ってまいりました。
            患者さまのご紹介は地域連携室にて承っております。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            ご紹介の流れ
          </h2>
          <div className="space-y-4">
            {[
              "地域連携室にお電話ください",
              "患者さまの状況をお伝えください（病名・ADL・療養場所の希望など）",
              "対応可能な場合、初回訪問の日程を調整いたします",
              "診療開始後、経過を共有いたします",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-text-secondary pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            当院の対応体制
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "24時間365日の緊急往診体制",
              "シフト制の夜間当直（当直室完備）",
              "緩和ケア専門医が在籍",
              "3名体制での訪問（医師・看護師・ドライバー）",
              "ディグニティセラピー対応",
              "グリーフケア（遺族支援）",
            ].map((item) => (
              <div key={item} className="bg-navy-light rounded-lg px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">連携窓口</h2>
          <p className="text-text-secondary mb-2">地域連携室</p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors text-lg"
          >
            {CLINIC_INFO.tel}
          </a>
          <p className="text-sm text-text-muted mt-3">
            月〜金 9:00〜17:00
            <br />
            FAX: 045-300-6631（紹介状送付先）
          </p>
        </section>
      </div>
    </>
  );
}
