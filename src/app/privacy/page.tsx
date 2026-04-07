import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜めぐみ在宅クリニック",
  description:
    "めぐみ在宅クリニックのプライバシーポリシー。個人情報の取り扱いについて。横浜市瀬谷区橋戸2-4-3。",
};

export default function PrivacyPage() {
  return (
    <>
      <Header variant="clinic" />
      <main className="min-h-screen">
        <div className="bg-navy-light py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
              プライバシーポリシー
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-sm text-text-secondary leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. 基本方針</h2>
            <p>
              めぐみ在宅クリニック（以下「当院」）は、患者さま・ご家族・お問い合わせいただいた方の個人情報を
              適切に保護することが重要な責務であると考え、以下の方針に基づき個人情報の保護に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. 個人情報の取得</h2>
            <p>
              当院は、診療・お問い合わせ・採用応募・見学研修申込み・講演依頼等の目的で、
              お名前・ご住所・電話番号・メールアドレス等の個人情報をお預かりすることがあります。
              個人情報の取得は、適法かつ公正な手段により行います。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. 利用目的</h2>
            <p>取得した個人情報は、以下の目的に限り使用します。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>診療およびそれに付随する業務</li>
              <li>お問い合わせへの回答・連絡</li>
              <li>採用選考に関する連絡</li>
              <li>見学・研修・講演依頼に関する調整・連絡</li>
              <li>当院からのお知らせ（ご同意いただいた場合のみ）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. 第三者への提供</h2>
            <p>
              当院は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              ただし、診療上必要な場合には、連携医療機関・薬局・訪問看護ステーション等に対し、
              診療に必要な範囲で情報を共有することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. 安全管理</h2>
            <p>
              当院は、個人情報の漏洩・滅失・毀損を防止するため、適切な安全管理措置を講じます。
              スタッフに対しては個人情報保護に関する教育を実施し、適切な取り扱いを徹底します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. 開示・訂正・削除</h2>
            <p>
              ご本人から個人情報の開示・訂正・削除のご請求があった場合は、
              本人確認を行った上で、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. お問い合わせ</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
            <div className="mt-3 bg-warm-gray rounded-lg p-4">
              <p className="font-medium text-text-primary">めぐみ在宅クリニック</p>
              <p>{CLINIC_INFO.address}</p>
              <p>TEL: {CLINIC_INFO.tel}</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. 改定</h2>
            <p>
              当院は、法令の変更等に応じて本ポリシーを改定することがあります。
              改定後のポリシーは、当ウェブサイトに掲載した時点で効力を生じます。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
