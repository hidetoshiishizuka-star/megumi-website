import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ご遺族の方へ（グリーフサポート）",
  description:
    "大切な方を亡くされたご家族へ。めぐみ在宅クリニックのグリーフサポートのご案内。",
};

export default function GriefPage() {
  return (
    <>
      <PageHeader
        title="ご遺族の方へ"
        subtitle="大切な方を亡くされた後も、私たちはそばにいます"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            大切なご家族さまとお別れをされて、心や身体の変化を感じることがあります。
            これはとても自然な反応で、「グリーフ（grief）」と呼ばれています。
          </p>
          <p className="text-text-secondary leading-relaxed">
            当院では、療養中の支援だけでなく、ご家族さまのその後のグリーフサポートも
            積極的に必要だと考えています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            わかちあいの会
          </h2>
          <div className="bg-warm-gray rounded-xl p-6">
            <p className="text-text-secondary leading-relaxed mb-4">
              毎月1回、第2水曜日に開催しています。めぐみ在宅クリニックと関わりのあった
              ご家族が対象です。同じ経験をされた方と気持ちを共有できる場です。
            </p>
            <p className="text-sm text-text-muted">事前のお申し込みは不要です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            個別面談
          </h2>
          <div className="bg-warm-gray rounded-xl p-6">
            <p className="text-text-secondary leading-relaxed mb-4">
              専任のグリーフカウンセラーが1対1でお話をお伺いします。
              1回あたり1時間〜1時間半程度です。
            </p>
            <p className="font-medium text-navy mb-2">費用：無料</p>
            <p className="text-sm text-text-muted">
              事前のお申し込みが必要です。お電話にてご連絡ください。
            </p>
          </div>
        </section>

        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">お問い合わせ</h2>
          <p className="text-text-secondary mb-6 text-sm">
            グリーフサポートのお申し込み・ご相談はお電話ください
          </p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
          >
            {CLINIC_INFO.tel}
          </a>
        </section>
      </div>
    </>
  );
}
