import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AreaTabs from "@/components/ui/AreaTabs";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MedicalSupervision from "@/components/ui/MedicalSupervision";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "診療案内｜訪問診療・在宅緩和ケア・緊急往診｜瀬谷区",
  description:
    "横浜市瀬谷区の訪問診療・在宅緩和ケア・在宅看取り。24時間365日緊急往診対応。泉区・旭区・大和市も訪問。退院後の在宅療養、一人暮らしの方もご相談ください。",
};

export default function ServicesPage() {
  return (
    <>
        <Breadcrumb items={[
          { label: "ホーム", href: "/" },
          { label: "診療案内" },
        ]} />
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
                  病気・高齢のために通院が困難な方がいます。
                  在宅医療は、通院が困難な方のご自宅（介護施設を含む）で、継続して医療を受けるために
                  医師が訪問して医療を提供するものです。
                </p>
                <p>
                  当院では、安心して医療を受けられるように24時間365日の診療体制を整えています。地域の介護・福祉サービス事業所や訪問看護ステーション、薬局、医療機関と連携し、患者様が住み慣れた環境で療養生活が送れるように支援を行います。
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
                  "がん末期・終末期の在宅緩和ケアを希望される方",
                  "神経難病（ALS・パーキンソン病・多系統萎縮症等）の方",
                  "認知症でご自宅での生活を続けたい方",
                  "心不全・呼吸器疾患・腎疾患等の慢性疾患をお持ちの方",
                  "人工呼吸器・在宅酸素・経管栄養等の管理が必要な方",
                  "加齢や病気のために通院が困難になった方",
                  "退院後、ご自宅での医療継続が必要な方",
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
              <p className="text-sm text-text-muted mt-4">
                ※ 精神科疾患が主体の場合は、専門医療機関をご案内しています。
              </p>
            </section>
          </ScrollReveal>

          {/* 診療内容 */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">診療内容</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "定期訪問診療", sub: "月2回または月1回（症状により異なります）" },
                  { title: "緊急往診", sub: "24時間365日対応" },
                  { title: "疼痛管理・緩和ケア", sub: "痛みの緩和と心身の支え" },
                  { title: "看取り・ACP", sub: "意思決定支援と穏やかな最期" },
                  { title: "介護認定意見書・各種診断書", sub: "書類作成に対応" },
                  { title: "特定健診", sub: "予約制" },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <div className="bg-navy-light rounded-lg px-5 py-4">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-text-muted mt-0.5">{item.sub}</p>
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
                      <th scope="col" className="px-4 py-3 text-left">時間</th>
                      <th scope="col" className="px-4 py-3">月</th>
                      <th scope="col" className="px-4 py-3">火</th>
                      <th scope="col" className="px-4 py-3">水</th>
                      <th scope="col" className="px-4 py-3">木</th>
                      <th scope="col" className="px-4 py-3">金</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">9:00〜12:00</td>
                      <td className="px-4 py-3 text-center">
                        <span className="block text-navy font-medium">一般外来</span>
                        <span className="block text-sunrise font-medium text-xs mt-1">緩和ケア外来</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="block text-sunrise font-medium">緩和ケア外来</span>
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">−</td>
                      <td className="px-4 py-3 text-center">
                        <span className="block text-navy font-medium">一般外来</span>
                        <span className="block text-sunrise font-medium text-xs mt-1">緩和ケア外来</span>
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">−</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-muted mt-3">
                ※ 外来は土・日・祝は休診です。緩和ケア外来は予約制です。受付 8:45〜12:00。
                採血・採尿は可能です。X線・CT・内視鏡は連携先の横浜甦生病院外来をご紹介します。
              </p>
              <p className="text-sm text-navy font-medium mt-2">
                ※ 緊急往診は24時間365日対応です。
              </p>
            </section>
          </ScrollReveal>

          {/* 対応エリア・外来アクセス */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">訪問対応エリア・外来アクセス</h2>
              <AreaTabs />
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
                  { label: "当院のグリーフケアについて", href: "/clinic/grief", desc: "グリーフサポートのご案内" },
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

          <MedicalSupervision lastUpdated="2026-04-07" />

          {/* CTA */}
          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 text-center mt-16">
              <h2 className="heading-section text-navy mb-3">
                訪問診療のご相談は<br />お気軽にお電話ください
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
