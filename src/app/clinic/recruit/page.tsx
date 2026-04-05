import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "めぐみ在宅クリニックの採用情報。医師・看護師・コメディカルスタッフを募集しています。",
};

export default function RecruitPage() {
  return (
    <>
        {/* Hero */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Recruitment</p>
            <h1 className="heading-hero text-white mb-6">採用情報</h1>
            <p className="subheading text-white/90">
              「継続性のある在宅医療」を一緒に作りませんか
            </p>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          {/* メッセージ */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="bg-navy-light rounded-2xl p-8">
                <h2 className="heading-section text-navy mb-4">院長メッセージ</h2>
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
          </ScrollReveal>

          {/* 働く風景 */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { src: "/images/team-visit.jpg", alt: "訪問診療の様子 — 3名体制でご自宅を訪問", caption: "3名体制での訪問診療" },
                  { src: "/images/recruit-team.jpg", alt: "チームカンファレンスの様子", caption: "チームカンファレンス" },
                  { src: "/images/recruit-atmosphere.jpg", alt: "クリニックの日常風景", caption: "クリニックの日常" },
                ].map((photo, i) => (
                  <ScrollReveal key={photo.src} delay={i * 100}>
                    <div className="rounded-2xl overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      <p className="text-xs text-text-muted text-center py-2">{photo.caption}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 当院で働く魅力 */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">当院で働く魅力</h2>
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
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <div className="bg-warm-gray rounded-xl p-6">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* ユニバーサル・ホスピスマインド */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="bg-gradient-to-r from-twilight-light to-dawn-light rounded-2xl p-8">
                <p className="text-dawn text-sm font-medium mb-2">Philosophy</p>
                <h2 className="heading-section text-navy mb-4">ユニバーサル・ホスピスマインド</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  めぐみ在宅クリニックでは「治す医療」ではなく「支える医療」を実践しています。
                  解決が難しい苦しみを抱えたとしても、関わりを通して穏やかさを支えることができる
                  ——そのための対人援助の思想「ユニバーサル・ホスピスマインド」を全スタッフで共有しています。
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  入職後はロールプレイやケース振り返り、シャドーイングを通じて体系的に学べる環境を整えています。
                </p>
                <Link
                  href="/concept/philosophy"
                  className="btn-pill btn-pill-secondary inline-flex"
                >
                  ユニバーサル・ホスピスマインドについて →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* 募集職種 */}
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="heading-section text-navy mb-6">募集職種</h2>

              {/* ドライバー */}
              <div className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4 mb-4">
                <span className="font-medium">ドライバー</span>
                <span className="text-xs bg-sunrise text-white px-3 py-1 rounded-full">
                  募集中
                </span>
              </div>

              {/* 常勤医師 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-lg">常勤医師</h3>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">条件調整中</span>
                </div>
                <div className="px-6 py-6 space-y-4 text-sm">
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務地</span>
                    <span className="text-text-secondary">めぐみ在宅クリニック（クリニック半径5km圏内の訪問、9割以上が自宅訪問）</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務時間</span>
                    <span className="text-text-secondary">月〜金 8:30〜17:30</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務日数</span>
                    <span className="text-text-secondary">週3日以上</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">給与</span>
                    <span className="text-text-secondary">経験・スキル・勤務日数に応じて決定</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">その他</span>
                    <span className="text-text-secondary">学会参加支援あり（規定による）、電子カルテ使用（基本的なPCスキル要）</span>
                  </div>
                  <p className="text-sm text-text-muted mt-2">
                    ※ 勤務条件を調整中です。詳しくはお問い合わせください。
                  </p>
                </div>
              </div>

              {/* 看護師 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <div className="bg-navy text-white px-6 py-4">
                  <h3 className="font-bold text-lg">看護師</h3>
                </div>
                <div className="px-6 py-6 space-y-4 text-sm">
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務地</span>
                    <span className="text-text-secondary">めぐみ在宅クリニック</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務時間</span>
                    <span className="text-text-secondary">8:30〜17:30</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">勤務日数</span>
                    <span className="text-text-secondary">週5日（土日祝含む）</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <span className="font-medium text-navy">給与</span>
                    <span className="text-text-secondary">経験・スキルに応じて決定</span>
                  </div>
                  <p className="text-sm text-text-muted mt-2">※ 現在募集しておりません</p>
                </div>
              </div>

              {/* 訪問診療サポーター / 医療事務 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4">
                  <div>
                    <span className="font-medium">訪問診療サポーター</span>
                    <p className="text-sm text-text-muted mt-1">※ 現在募集しておりません</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4">
                  <span className="font-medium">医療事務</span>
                </div>
                <p className="text-sm text-text-muted">
                  ※ 事務職の詳しい募集要項はお問い合わせください。
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* 選考プロセス */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">選考の流れ</h2>
              <div className="flex flex-col gap-0">
                {[
                  { step: "1", title: "書類選考", desc: "履歴書・職務経歴書をメールにてお送りください" },
                  { step: "2", title: "面談・見学", desc: "個別面談と訪問診療の同行見学を行います" },
                  { step: "3", title: "内定", desc: "入職日等の詳細を調整いたします" },
                ].map((item, i) => (
                  <ScrollReveal key={item.step} delay={i * 80}>
                    <div className="flex items-start gap-4 py-5 border-b border-gray-100 last:border-b-0">
                      <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-text-secondary mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-6 bg-twilight-light rounded-xl p-6">
                <p className="font-medium mb-2">まずは見学から始めることもできます</p>
                <p className="text-sm text-text-secondary mb-3">
                  1日見学や短期研修プログラムで、当院の雰囲気や診療スタイルを体験いただけます。
                </p>
                <Link href="/concept/training" className="btn-pill btn-pill-secondary inline-flex">
                  見学・研修プログラムを見る →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 text-center">
              <h2 className="heading-section text-navy mb-3">ご応募・お問い合わせ</h2>
              <p className="text-text-secondary mb-6 text-sm">
                下記フォームよりご応募ください。
              </p>
              <Link
                href="/clinic/contact?type=recruit"
                className="btn-pill btn-pill-primary inline-flex items-center justify-center gap-2"
              >
                応募フォームへ
              </Link>
            </section>
          </ScrollReveal>
        </div>
    </>
  );
}
