import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "見学・研修プログラム",
  description: "めぐみ在宅クリニックの見学・研修プログラム。緩和ケア・ホスピスマインドを学ぶ。",
};

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        title="見学・研修プログラム"
        subtitle="緩和ケアの実践を学ぶ場として"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            めぐみ在宅クリニックは、在宅緩和ケアの「実践の場」であると同時に「学びの場」です。
            ホスピスマインドと対話の技術を体系的に学び、地域に持ち帰って伝えていく。
            そんな志を持った方をお待ちしています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            プログラム
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy text-white px-6 py-4">
                <h3 className="font-bold text-lg">1日見学</h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  訪問診療に同行し、在宅緩和ケアの現場を体験します。
                  院長や医師との対話の時間も設けています。
                </p>
                <p className="text-sm text-text-muted">
                  対象：医師・看護師・医学生・看護学生・福祉職など
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy text-white px-6 py-4">
                <h3 className="font-bold text-lg">短期研修プログラム</h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  数日〜数週間の研修で、訪問診療の流れ、緩和ケアの実践、
                  援助的コミュニケーション（反復・沈黙・傾聴）を学びます。
                </p>
                <p className="text-sm text-text-muted">
                  対象：研修医・緩和ケアに関心のある医療従事者
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy text-white px-6 py-4">
                <h3 className="font-bold text-lg">スタッフ向け研修</h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  医療・介護施設のスタッフを対象とした出張研修も対応しています。
                  ホスピスマインド・苦しむ人への関わり方を施設全体で学べます。
                </p>
                <p className="text-sm text-text-muted">
                  対象：病院・介護施設・在宅医療チーム
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            学べること
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "ホスピスマインドの基本理念",
              "苦しみのアセスメント（希望と現実のギャップ）",
              "援助的コミュニケーション（反復・沈黙）",
              "ディグニティセラピーの実践",
              "チームで支える在宅緩和ケア",
              "グリーフケアの考え方",
            ].map((item) => (
              <div key={item} className="bg-navy-light rounded-lg px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">見学・研修のお申し込み</h2>
          <p className="text-text-secondary mb-6 text-sm">
            お電話またはお問い合わせフォームよりお申し込みください
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
