import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "よくあるご質問｜瀬谷区の在宅医療・訪問診療",
  description:
    "めぐみ在宅クリニックへのよくあるご質問。訪問診療の費用・夜間対応・看取り・エリアなど。横浜市瀬谷区で24時間365日の在宅医療を提供しています。",
};

const faqs = [
  {
    q: "どうすれば受診できますか？",
    a: `まず地域連携室までお電話ください（TEL: ${CLINIC_INFO.tel}、月〜金 9時〜17時）。ご本人やご家族の状況をお伺いし、訪問診療の開始について調整いたします。緊急性が高い場合は早急に対応します。`,
  },
  {
    q: "家で最期を迎えることはできますか？",
    a: "ご自宅で最期まで過ごされる方もいらっしゃいます。痛みや苦しみを和らげ、穏やかに過ごせるよう支援します。お一人暮らしの方も、状況に応じてご相談しながら進めます。",
  },
  {
    q: "夜間や休日も緊急往診に来てもらえますか？",
    a: "はい。24時間365日対応しています。シフト制で決まった医師が夜間も担当しますので、いつでもご連絡ください。",
  },
  {
    q: "費用はどれくらいかかりますか？",
    a: "訪問回数や治療内容、保険の負担割合により変動します。1割負担で月2回または月1回訪問の場合（症状によって異なります）、約8,000円が目安です。詳しくは「費用について」ページをご覧いただくか、お問い合わせください。",
  },
  {
    q: "在宅療養が困難になった時はどうなりますか？",
    a: "連携先の病院・介護施設と速やかに連携し、対応いたします。状態に合わせた最適な療養環境をご一緒に考えます。",
  },
  {
    q: "ケアマネジャーや訪問看護は紹介してもらえますか？",
    a: "院内にはおりませんが、経験豊富な各地域の訪問看護ステーション・ケアマネジャーをご紹介できます。ご自身で探す必要はありません。",
  },
  {
    q: "薬は持ってきてもらえますか？",
    a: "訪問薬剤師が自宅にお届けする「訪問服薬」が利用可能です。別途料金がかかります（介護保険で1回500〜600円程度）。",
  },
  {
    q: "診療費の支払いはどうなりますか？",
    a: "1か月分をまとめて翌月に請求いたします。訪問時のお支払い、またはお振込みに対応しています。",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="よくあるご質問"
        subtitle="在宅医療・訪問診療についてよくいただくご質問にお答えします"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy-light px-6 py-4">
                <h3 className="font-bold flex items-start gap-3">
                  <span className="text-navy font-bold text-lg">Q</span>
                  {faq.q}
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-text-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-sunrise font-bold text-lg">A</span>
                  <span>{faq.a}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">
            その他ご不明な点がありましたら
          </h2>
          <p className="text-text-secondary mb-6 text-sm">
            お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CLINIC_INFO.tel}`}
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CLINIC_INFO.tel}
            </a>
            <Link
              href="/clinic/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
          <p className="text-sm text-text-muted mt-3">電話受付：月〜金 9:00〜17:00</p>
        </section>
      </div>
    </>
  );
}
