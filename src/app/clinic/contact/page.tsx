import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "めぐみ在宅クリニックへのお問い合わせ。診療・採用・研修・講演に関するご連絡先。",
};

export default function ContactPage() {
  return (
    <>
        {/* Hero */}
        <section className="gradient-dawn text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Contact</p>
            <h1 className="heading-hero text-white mb-6">お問い合わせ</h1>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          <ScrollReveal>
            <p className="text-text-secondary mb-4 leading-relaxed">
              お問い合わせは各目的に応じて、下記の通りお寄せください。
            </p>
            <p className="text-sm text-text-muted mb-10 leading-relaxed">
              新規ご相談：月〜金 9:00〜17:00 / 既存患者さまの緊急連絡：24時間対応
            </p>
          </ScrollReveal>

          {/* 電話 */}
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="heading-section text-navy mb-6">
                お電話でのお問い合わせ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ScrollReveal delay={0}>
                  <div className="bg-navy-light rounded-xl p-6">
                    <h3 className="font-bold mb-2">診療・採用について</h3>
                    <a
                      href={`tel:${CLINIC_INFO.tel}`}
                      className="inline-flex items-center gap-2 text-2xl font-bold text-navy hover:text-navy-dark"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      {CLINIC_INFO.tel}
                    </a>
                    <p className="text-sm text-text-muted mt-2">
                      地域連携室・採用係
                      <br />
                      月〜金 9:00〜17:00
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={80}>
                  <div className="bg-navy-light rounded-xl p-6">
                    <h3 className="font-bold mb-2">研修・講演・取材について</h3>
                    <p className="text-sm text-text-secondary mb-3">
                      下記のお問い合わせフォームよりご連絡ください。
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollReveal>

          {/* フォーム */}
          <ScrollReveal>
            <section className="mb-12">
              <h2 className="heading-section text-navy mb-6">
                お問い合わせフォーム
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    ご用件 <span className="text-sunrise">*</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy">
                    <option value="">選択してください</option>
                    <option>診療について</option>
                    <option>求人に関する問い合わせ</option>
                    <option>研修会・勉強会について</option>
                    <option>在宅医療・緩和ケアを学びたい</option>
                    <option>講演依頼</option>
                    <option>取材の申し込み</option>
                    <option>その他</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お名前 <span className="text-sunrise">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="例：山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      フリガナ <span className="text-sunrise">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="例：ヤマダ タロウ"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      メールアドレス <span className="text-sunrise">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      電話番号 <span className="text-sunrise">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    お問い合わせ内容 <span className="text-sunrise">*</span>
                  </label>
                  <textarea
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                </div>

                <div className="flex items-start gap-3 bg-warm-gray rounded-lg p-4">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-text-secondary">
                    <Link href="/privacy" className="text-navy underline hover:text-navy-dark" target="_blank">
                      プライバシーポリシー
                    </Link>
                    に同意の上、送信してください。
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-pill btn-pill-primary"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </section>
          </ScrollReveal>

          {/* アクセス */}
          <ScrollReveal>
            <section>
              <h2 className="heading-section text-navy mb-6">アクセス</h2>
              <div className="bg-warm-gray rounded-xl p-6">
                <p className="font-bold mb-2">めぐみ在宅クリニック</p>
                <p className="text-sm text-text-secondary">{CLINIC_INFO.address}</p>
                <p className="text-sm text-text-muted mt-2">
                  ※ 当院は在宅医療を中心とした診療を行っています。外来は月曜・木曜の午前のみです。
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
    </>
  );
}
