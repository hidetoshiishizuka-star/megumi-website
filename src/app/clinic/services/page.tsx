import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceAreaMap from "@/components/ui/ServiceAreaMap";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "診療案内",
  description:
    "めぐみ在宅クリニックの診療案内。在宅医療（訪問診療・往診）、外来診療、緩和ケア外来のご案内。",
};

export default function ServicesPage() {
  return (
    <>
        {/* Hero */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Services</p>
            <h1 className="heading-hero text-white mb-6">診療案内</h1>
            <p className="subheading text-white/90">
              在宅医療を中心に、外来診療・緩和ケア外来を提供しています
            </p>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          {/* 在宅医療とは */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">在宅医療とは</h2>
              <div className="prose max-w-none text-text-secondary leading-relaxed space-y-4">
                <p>
                  高齢に伴う足腰の負担が増えたり、病気のために通院が困難な方がいます。
                  在宅医療は、通院が困難な方のご自宅（介護施設を含む）で、継続して医療を受けるために
                  医師が訪問して医療を提供するものです。
                </p>
                <p>
                  当院では、安心して医療を受けられるように24時間365日の診療体制を整えています。
                  また、訪問看護ステーション・訪問薬局と連携し、
                  介護との連携を行い、多職種チームで支援を必要としているご本人とご家族の支援を行っています。
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* 対象となる患者さま */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">
                対象となる患者さま
              </h2>
              <ul className="space-y-3 text-text-secondary">
                {[
                  "加齢や病気のために通院が困難になった方",
                  "退院後、ご自宅での医療継続が必要な方",
                  "がん・神経難病・慢性疾患をお持ちの方",
                  "在宅での看取りを希望される方",
                ].map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <li className="flex items-start gap-3">
                      <span className="text-navy mt-1">●</span>
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
              <p className="text-sm text-text-muted mt-3">
                ※ 介護保険・医療保険いずれにも対応しています。
              </p>
            </section>
          </ScrollReveal>

          {/* 診療内容 */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">診療内容</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "定期訪問診療（月2回または月1回など、症状によって異なります）",
                  "緊急往診（24時間365日対応）",
                  "疼痛管理・緩和ケア",
                  "看取り・ACP（アドバンス・ケア・プランニング）",
                  "介護認定意見書・各種診断書",
                  "特定健診（予約制）",
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

          {/* 外来スケジュール */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">外来診療</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-4 py-3 text-left">時間</th>
                      <th className="px-4 py-3">月</th>
                      <th className="px-4 py-3">火</th>
                      <th className="px-4 py-3">水</th>
                      <th className="px-4 py-3">木</th>
                      <th className="px-4 py-3">金</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">9:00〜12:00</td>
                      <td className="px-4 py-3 text-center text-sunrise font-medium">緩和ケア</td>
                      <td className="px-4 py-3 text-center text-text-muted">−</td>
                      <td className="px-4 py-3 text-center text-text-muted">−</td>
                      <td className="px-4 py-3 text-center text-sunrise font-medium">緩和ケア</td>
                      <td className="px-4 py-3 text-center text-text-muted">−</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-muted mt-3">
                ※ 土・日・祝は休診です。緩和ケア外来は予約制です。受付 8:45〜12:00。
                採血・採尿は可能です。X線・CT・内視鏡は連携先の横浜甦生病院外来をご紹介します。
              </p>
            </section>
          </ScrollReveal>

          {/* 対応エリア */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">訪問対応エリア</h2>
              <p className="text-text-secondary mb-6">
                クリニックから5km圏内を対象としています。
              </p>
              <ServiceAreaMap />
              <div className="bg-warm-gray rounded-xl p-6 mt-6">
                <p className="font-medium mb-2">主な対応地域</p>
                <p className="text-text-secondary">
                  {CLINIC_INFO.areas.join("・")}
                </p>
                <p className="text-sm text-text-muted mt-2">
                  ※ 対応エリアはクリニックから5km以内です。
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* 関連ページ */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">関連情報</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "費用について", href: "/clinic/fee", desc: "訪問診療にかかる費用の目安" },
                  { label: "よくあるご質問", href: "/clinic/faq", desc: "在宅医療に関するQ&A" },
                  { label: "スタッフ紹介", href: "/clinic/staff", desc: "医師・看護師・スタッフ一覧" },
                  { label: "ご遺族の方へ", href: "/clinic/grief", desc: "グリーフサポートのご案内" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-warm-gray rounded-xl p-5 hover:shadow-md transition-shadow group block"
                  >
                    <p className="font-bold text-navy group-hover:text-twilight transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-text-muted mt-1">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 text-center">
              <h2 className="heading-section text-navy mb-3">
                訪問診療のご相談はお気軽にお電話ください
              </h2>
              <p className="text-text-secondary mb-2">
                新規ご相談：月〜金 9:00〜17:00
              </p>
              <p className="text-text-secondary mb-6">
                既存患者さまの緊急：24時間365日対応
              </p>
              <a
                href={`tel:${CLINIC_INFO.tel}`}
                className="btn-pill btn-pill-primary inline-flex items-center gap-2 text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CLINIC_INFO.tel}
              </a>
              <p className="mt-4">
                <Link href="/clinic/contact" className="text-navy hover:text-navy-dark underline">
                  お問い合わせフォームはこちら
                </Link>
              </p>
            </section>
          </ScrollReveal>
        </div>
    </>
  );
}
