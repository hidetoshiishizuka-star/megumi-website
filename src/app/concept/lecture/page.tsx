import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "講演・執筆依頼",
  description: "院長・小澤竹俊への講演・執筆依頼のご案内。",
};

export default function LecturePage() {
  return (
    <>
      <PageHeader
        title="講演・執筆依頼"
        subtitle="院長 小澤竹俊への講演・執筆のご依頼を承ります"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            主な講演テーマ
          </h2>
          <div className="space-y-4">
            {[
              "苦しむ人への援助 — ホスピスマインドの実践",
              "いのちの授業 — 子どもたちに伝えたいこと",
              "在宅緩和ケアの現場から",
              "チームで支えるアドバンス・ケア・プランニング（ACP）",
              "ユニバーサル・ホスピスマインド — 誰もが実践できるケア",
              "エンドオブライフ・ケアにおける援助者養成",
            ].map((theme) => (
              <div
                key={theme}
                className="bg-warm-gray rounded-lg px-6 py-4 text-text-secondary"
              >
                {theme}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-4">
            ※ 上記以外のテーマについてもご相談ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            講演実績
          </h2>
          <p className="text-text-secondary mb-4">
            全国の病院・介護施設・自治体・学会・学校などで多数の講演実績があります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
            <div className="bg-navy-light rounded-lg px-4 py-3">TEDxTokyo登壇</div>
            <div className="bg-navy-light rounded-lg px-4 py-3">全国の病院・医学部</div>
            <div className="bg-navy-light rounded-lg px-4 py-3">介護施設・地域包括支援センター</div>
            <div className="bg-navy-light rounded-lg px-4 py-3">自治体・教育委員会</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-twilight">
            ご依頼について
          </h2>
          <div className="bg-warm-gray rounded-xl p-6 text-sm text-text-secondary space-y-2">
            <p>院長だけでなく、同テーマを語れるファシリテーターもご紹介できます。</p>
            <p>費用・日程等はご相談の上で決定いたします。</p>
            <p>まずはお気軽にお問い合わせください。</p>
          </div>
        </section>

        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">講演・執筆のご依頼</h2>
          <p className="text-text-secondary mb-6 text-sm">
            お電話またはお問い合わせフォームよりご連絡ください
          </p>
          <a
            href={`tel:${CLINIC_INFO.telPlanning}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
          >
            {CLINIC_INFO.telPlanning}（企画運営係）
          </a>
          <p className="text-sm text-text-muted mt-3">月〜金 9:00〜17:00</p>
        </section>
      </div>
    </>
  );
}
