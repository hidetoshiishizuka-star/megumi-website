import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ｜めぐみ在宅クリニック瀬谷区",
  description:
    "めぐみ在宅クリニックへのお問い合わせ。訪問診療・採用・見学研修・講演依頼など。横浜市瀬谷区橋戸2-4-3。電話045-300-6630。フォームからもお問い合わせいただけます。",
};

export default function ContactPage() {
  return (
    <>
        <Breadcrumb items={[
          { label: "ホーム", href: "/" },
          { label: "お問い合わせ" },
        ]} />
        {/* Hero */}
        <section className="gradient-dawn text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Contact</p>
            <h1 className="heading-hero text-white mb-6">お問い合わせ</h1>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          <ScrollReveal>
            <p className="text-text-secondary mb-10 leading-relaxed">
              お問い合わせは各目的に応じて、下記参照の上、お問い合わせください。
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
                  <div className="bg-navy-light rounded-xl p-6 h-full">
                    <h3 className="font-bold mb-2">診療について</h3>
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
                      地域連携室
                      <br />
                      新規ご相談：月〜金 9:00〜17:00
                      <br />
                      既存患者さまの緊急連絡：24時間対応
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={80}>
                  <div className="bg-navy-light rounded-xl p-6 h-full">
                    <h3 className="font-bold mb-2">採用（求人）・研修・講演・取材について</h3>
                    <p className="text-sm text-text-secondary">
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
              <ContactForm />
            </section>
          </ScrollReveal>

        </div>
    </>
  );
}
