import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "はじめての方へ",
  description: "在宅医療とは何か、訪問診療を開始するまでの流れをご説明します。",
};

export default function FirstVisitPage() {
  return (
    <>
      <PageHeader
        title="はじめての方へ"
        subtitle="在宅医療をご検討中の方へ、わかりやすくご説明します"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* こんな方が対象です */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            こんな方が在宅医療の対象です
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "通院が難しくなってきた方",
              "がん末期で自宅療養を希望される方",
              "神経難病・慢性疾患をお持ちの方",
              "退院後、ご自宅での医療継続が必要な方",
              "介護施設に入所中で医療が必要な方",
              "お一人暮らしで医療の不安がある方",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-navy-light rounded-lg p-4">
                <span className="text-navy text-lg mt-0.5">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 訪問診療開始までの流れ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            訪問診療開始までの流れ
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "まずはお電話ください",
                description:
                  "地域連携室までお電話ください。ご本人やご家族の状況をお伺いし、対応可能かお伝えします。ケアマネジャーや病院の地域連携室からのご連絡も歓迎です。",
              },
              {
                step: "2",
                title: "初回訪問の日程調整",
                description:
                  "状況をお伺いした上で、初回訪問の日程を調整します。緊急性が高い場合は、できるだけ早急に対応いたします。",
              },
              {
                step: "3",
                title: "初回訪問・診療開始",
                description:
                  "医師がご自宅にお伺いし、診察を行います。今後の治療方針やケアの内容についてご相談します。",
              },
              {
                step: "4",
                title: "定期訪問の開始",
                description:
                  "月2回の定期訪問を基本に、状態に応じて頻度を調整します。24時間365日、緊急往診にも対応します。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* お電話時にお伝えいただきたいこと */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            お電話時にお伝えいただきたいこと
          </h2>
          <div className="bg-warm-gray rounded-xl p-6 space-y-3 text-sm text-text-secondary">
            <p>① ご本人・ご家族のお名前・ご連絡先</p>
            <p>② 現在の状況（病名・食事量・動ける範囲・覚醒程度・ここ1か月の変化）</p>
            <p>③ 療養場所のご希望（ご自宅・施設など）</p>
            <p>④ 希望されるケアの内容</p>
            <p className="text-text-muted pt-2">
              ※ すべてがわからなくても大丈夫です。お気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">ご相談はお気軽にお電話ください</h2>
          <p className="text-text-secondary mb-6 text-sm">
            地域連携室が対応いたします（月〜金 9時〜17時）
          </p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors text-lg"
          >
            {CLINIC_INFO.tel}
          </a>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/clinic/fee" className="text-navy hover:underline">
              費用について →
            </Link>
            <Link href="/clinic/faq" className="text-navy hover:underline">
              よくあるご質問 →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
