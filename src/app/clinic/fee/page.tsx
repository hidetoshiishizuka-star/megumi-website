import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "費用について",
  description: "めぐみ在宅クリニックの訪問診療にかかる費用の目安をご案内します。",
};

export default function FeePage() {
  return (
    <>
      <PageHeader
        title="費用について"
        subtitle="訪問診療にかかる費用の目安をご案内します"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-text-secondary mb-8 leading-relaxed">
          ひと月に訪問する回数や治療内容（在宅酸素・中心静脈栄養など）で医療費が変わります。
          下記はあくまで目安です。詳しくはお気軽にお問い合わせください。
        </p>

        {/* 標準負担額 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-twilight">
            標準負担額の目安（月2回訪問・24時間緊急体制）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left">対象</th>
                  <th className="px-4 py-3">負担割合</th>
                  <th className="px-4 py-3">自己負担額（目安）</th>
                  <th className="px-4 py-3">負担上限</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">高齢者</td>
                  <td className="px-4 py-3 text-center">1割</td>
                  <td className="px-4 py-3 text-center">約8,000円</td>
                  <td className="px-4 py-3 text-center">18,000円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">高齢者</td>
                  <td className="px-4 py-3 text-center">2割</td>
                  <td className="px-4 py-3 text-center">約16,000円</td>
                  <td className="px-4 py-3 text-center">18,000円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">高齢者</td>
                  <td className="px-4 py-3 text-center">3割</td>
                  <td className="px-4 py-3 text-center">約24,000円</td>
                  <td className="px-4 py-3 text-center">高額療養費制度の限度額</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">一般（70歳未満）</td>
                  <td className="px-4 py-3 text-center">3割</td>
                  <td className="px-4 py-3 text-center">約24,000円</td>
                  <td className="px-4 py-3 text-center">高額療養費制度の限度額</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 交通費 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-twilight">
            交通費
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left">距離</th>
                  <th className="px-4 py-3">日中（6:00〜22:00）</th>
                  <th className="px-4 py-3">夜間（22:00〜6:00）</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">5km未満</td>
                  <td className="px-4 py-3 text-center">500円</td>
                  <td className="px-4 py-3 text-center">3,000円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">5km以上</td>
                  <td className="px-4 py-3 text-center">1,000円</td>
                  <td className="px-4 py-3 text-center">3,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* その他 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-twilight">
            その他
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-navy">●</span>
              介護保険利用者は居宅療養管理指導費が別途かかります（1割: 598円、2割: 1,196円、3割: 1,794円／月）
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy">●</span>
              院外処方のため、お薬代は別途かかります
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy">●</span>
              予防接種（インフルエンザ等）、診断書・申請書等の文書作成料は自費となります
            </li>
            <li className="flex items-start gap-2">
              <span className="text-navy">●</span>
              お支払いは1か月分まとめて翌月に請求いたします
            </li>
          </ul>
        </section>

        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <p className="text-text-secondary mb-4">
            費用についてご不明な点がありましたら、お気軽にお問い合わせください。
          </p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
          >
            {CLINIC_INFO.tel}
          </a>
        </section>
      </div>
    </>
  );
}
