import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "診療案内",
  description:
    "めぐみ在宅クリニックの診療案内。在宅医療（訪問診療・往診）、外来診療、緩和ケア外来のご案内。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="診療案内"
        subtitle="在宅医療を中心に、外来診療・緩和ケア外来を提供しています"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* 在宅医療とは */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            在宅医療とは
          </h2>
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

        {/* 対象となる患者さま */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            対象となる患者さま
          </h2>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-forest mt-1">●</span>
              がん末期・神経難病・慢性疾患などで通院が困難な方
            </li>
            <li className="flex items-start gap-3">
              <span className="text-forest mt-1">●</span>
              ターミナル期の在宅看取りを希望される方
            </li>
            <li className="flex items-start gap-3">
              <span className="text-forest mt-1">●</span>
              介護保険・医療保険いずれにも対応
            </li>
          </ul>
        </section>

        {/* 診療内容 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            診療内容
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "定期訪問診療（月2回・週1回など）",
              "緊急往診（24時間365日対応）",
              "疼痛管理・緩和ケア",
              "看取り・ACP（アドバンス・ケア・プランニング）",
              "介護認定意見書・各種診断書",
              "特定健診（予約制）",
            ].map((item) => (
              <div
                key={item}
                className="bg-forest-light rounded-lg px-4 py-3 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 外来スケジュール */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            外来診療
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-forest text-white">
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
                  <td className="px-4 py-3 text-center text-forest font-medium">一般</td>
                  <td className="px-4 py-3 text-center text-coral font-medium">緩和ケア</td>
                  <td className="px-4 py-3 text-center text-text-muted">−</td>
                  <td className="px-4 py-3 text-center text-forest font-medium">一般</td>
                  <td className="px-4 py-3 text-center text-text-muted">−</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-muted mt-3">
            ※ 緩和ケア外来は予約制です。受付 8:45〜12:00。
            採血・採尿は可能です。X線・CT・内視鏡は連携先の横浜甦生病院外来をご紹介します。
          </p>
        </section>

        {/* 対応エリア */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            訪問対応エリア
          </h2>
          <p className="text-text-secondary mb-4">
            おおむねクリニックから5km圏内を中心に対応しています。
          </p>
          <div className="bg-warm-gray rounded-xl p-6">
            <p className="font-medium mb-2">主な対応地域</p>
            <p className="text-text-secondary">
              {CLINIC_INFO.areas.join("・")}
            </p>
            <p className="text-sm text-text-muted mt-2">
              ※ 5km以上の地域もご相談ください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">
            訪問診療のご相談はお気軽にお電話ください
          </h2>
          <p className="text-text-secondary mb-6">
            地域連携室が対応いたします（月〜金 9時〜17時）
          </p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-forest text-white px-8 py-4 rounded-lg font-medium hover:bg-forest-dark transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {CLINIC_INFO.tel}
          </a>
          <p className="mt-4">
            <Link href="/clinic/contact" className="text-forest hover:text-forest-dark underline">
              メールでのお問い合わせはこちら
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
