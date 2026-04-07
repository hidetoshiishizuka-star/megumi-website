import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "見学・研修｜在宅緩和ケアを学ぶ｜瀬谷区",
  description:
    "めぐみ在宅クリニックの見学・研修プログラム。在宅緩和ケア・ホスピスマインドを実践的に学べます。医師・看護師・医学生対象。お申し込みはフォームから。",
};

export default function TrainingPage() {
  return (
    <>
        <Breadcrumb items={[
          { label: "ホーム", href: "/" },
          { label: "院長・コンセプト", href: "/concept/about" },
          { label: "見学・研修" },
        ]} />
        {/* Hero */}
        <section className="gradient-twilight text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Training</p>
            <h1 className="heading-hero text-white mb-6">見学・研修</h1>
            <p className="subheading text-white/90">
              緩和ケアの実践を学ぶ場として
            </p>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          <ScrollReveal>
            <section className="mb-12">
              <p className="text-text-secondary leading-relaxed mb-4">
                めぐみ在宅クリニックは、在宅緩和ケアの「実践の場」であると同時に「学びの場」です。
                ホスピスマインドと対話の技術を体系的に学び、地域に持ち帰って伝えていく。
                そんな志を持った方をお待ちしています。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="heading-section text-navy mb-6">プログラム</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "1日見学",
                    description:
                      "訪問診療に同行し、在宅緩和ケアの現場を体験します。院長や医師との対話の時間も設けています。",
                    target: "対象：医師・看護師・医学生・看護学生・福祉職など",
                  },
                  {
                    title: "短期研修プログラム",
                    description:
                      "数日〜数週間の研修で、訪問診療の流れ、緩和ケアの実践、援助的コミュニケーション（反復・沈黙・傾聴）を学びます。",
                    target: "対象：研修医・緩和ケアに関心のある医療従事者",
                  },
                  {
                    title: "スタッフ向け研修",
                    description:
                      "医療・介護施設のスタッフを対象とした出張研修も対応しています。ホスピスマインド・苦しむ人への関わり方を施設全体で学べます。",
                    target: "対象：病院・介護施設・在宅医療チーム",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-navy text-white px-6 py-4">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                      </div>
                      <div className="px-6 py-5">
                        <p className="text-text-secondary text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <p className="text-sm text-text-muted">{item.target}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-12">
              <h2 className="heading-section text-navy mb-6">学べること</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "ホスピスマインドの基本理念",
                  "苦しみのアセスメント（希望と現実のギャップ）",
                  "援助的コミュニケーション（反復・沈黙）",
                  "ディグニティセラピーの実践",
                  "チームで支える在宅緩和ケア",
                  "グリーフケアの考え方",
                ].map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <div className="bg-navy-light rounded-lg px-4 py-3 text-sm">
                      {item}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 text-center">
              <h2 className="heading-section text-navy mb-3">見学・研修のお申し込み</h2>
              <p className="text-text-secondary mb-6 text-sm">
                下記フォームよりお申し込みください
              </p>
              <Link
                href="/clinic/contact?type=training"
                className="btn-pill btn-pill-primary inline-flex items-center gap-2"
              >
                お申し込みフォームへ
              </Link>
            </section>
          </ScrollReveal>
        </div>
    </>
  );
}
