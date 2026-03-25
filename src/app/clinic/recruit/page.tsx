import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "めぐみ在宅クリニックの採用情報。医師・看護師・コメディカルスタッフを募集しています。",
};

export default function RecruitPage() {
  return (
    <>
      <PageHeader
        title="採用情報"
        subtitle="「継続性のある在宅医療」を一緒に作りませんか"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* メッセージ */}
        <section className="mb-16">
          <div className="bg-navy-light rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4">院長メッセージ</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              めぐみ在宅クリニックは、在宅医療の技術だけでなく、
              在宅医療の現場で「穏やかさ・尊厳・関係性」を実現するための対人援助の思想を大切にしています。
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              ここは実践の場であると同時に、学びの場でもあります。
              ホスピスマインドを体系的に学び、地域に持ち帰って伝えていく。
              そんな志を持った方をお待ちしています。
            </p>
            <p className="text-sm text-text-muted">院長 小澤竹俊</p>
          </div>
        </section>

        {/* 当院で働く魅力 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            当院で働く魅力
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "チーム医療の実践",
                text: "医師・看護師・ドライバーの3名体制。一人で抱え込まない環境です。",
              },
              {
                title: "緩和ケアが学べる",
                text: "緩和医療専門医のもとで、ホスピスマインドと対話の技術を体系的に学べます。",
              },
              {
                title: "継続性のある診療",
                text: "同じ患者さんを継続して診る方針。顔の見える関係性の中で医療を実践できます。",
              },
              {
                title: "夜間体制の安心",
                text: "当直室完備・シフト制で運用。時間内に仕事を終えられる仕組みがあります。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-gray rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 募集職種 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            募集職種
          </h2>
          <div className="space-y-4">
            {[
              { title: "医師（常勤・非常勤）", tag: "積極採用" },
              { title: "看護師", tag: "募集中" },
              { title: "訪問診療サポーター/ドライバー", tag: "募集中" },
              { title: "医療事務", tag: "" },
            ].map((job) => (
              <div
                key={job.title}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4"
              >
                <span className="font-medium">{job.title}</span>
                {job.tag && (
                  <span className="text-xs bg-sunrise text-white px-3 py-1 rounded-full">
                    {job.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-4">
            ※ 詳しい募集要項・待遇についてはお問い合わせください。
          </p>
          <div className="mt-6 bg-twilight-light rounded-xl p-6">
            <p className="font-medium mb-2">まずは見学から始めることもできます</p>
            <p className="text-sm text-text-secondary mb-3">
              1日見学や短期研修プログラムで、当院の雰囲気や診療スタイルを体験いただけます。
            </p>
            <Link href="/concept/training" className="text-sm text-navy font-medium hover:text-navy-dark">
              見学・研修プログラムを見る →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">ご応募・お問い合わせ</h2>
          <p className="text-text-secondary mb-6 text-sm">
            採用に関するお問い合わせは、お電話またはメールにて承っております
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
            >
              {CLINIC_INFO.tel}（採用係）
            </a>
            <Link
              href="/clinic/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
