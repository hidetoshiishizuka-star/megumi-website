import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "当院のグリーフケアについて｜瀬谷区",
  description:
    "めぐみ在宅クリニックのグリーフケア。わかちあいの会・個別面談でご遺族を支えます。横浜市瀬谷区。費用無料。お気軽にご相談ください。",
};

export default function GriefPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "当院のグリーフケアについて" },
      ]} />
      <PageHeader
        title="当院のグリーフケアについて"
        subtitle="大切な方をお見送りされたご家族へ。"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            大切なご家族さまとお別れをされて、心や身体の変化を感じることがあります。
            これはとても自然な反応で、「グリーフ（grief）」と呼ばれています。
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            当院では、療養中の支援だけでなく、ご家族さまのその後のグリーフサポートも
            大切にしています。
          </p>
          <p className="font-bold text-text-primary leading-relaxed">
            当院で療養された患者さんのご家族に向けて、以下のサポートを行っています。
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
            <p className="text-sm font-medium text-sunrise">現在、休止中です。</p>
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
            グリーフサポートのお申し込み・ご相談は、お電話かメールよりご連絡ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CLINIC_INFO.tel}
            </a>
            <Link
              href="/clinic/contact"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              お問い合わせフォーム
            </Link>
          </div>
          <p className="text-sm text-text-muted mt-3">電話受付：月〜金 10:00〜16:00</p>
        </section>
      </div>
    </>
  );
}
