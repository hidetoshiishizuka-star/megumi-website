import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "ユニバーサル・ホスピスマインド",
  description:
    "めぐみ在宅クリニックのコンセプト「ユニバーサル・ホスピスマインド」。治す医療ではなく支える医療。",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-twilight text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="overline text-sunrise-light mb-6">Philosophy</p>
          <h1 className="heading-hero text-white mb-6">
            ユニバーサル・ホスピスマインド
          </h1>
          <p className="subheading text-white/90">
            治す医療ではなく、支える医療を
          </p>
        </div>
      </section>

      <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
        {/* はじめに */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">はじめに</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                めぐみ在宅クリニックは在宅緩和ケアを中心に、
                人生の最期まで安心して過ごせる社会の実現を目指して活動を続けてきました。
              </p>
              <p>
                このページでは、ホスピスの現場で培ってきた対人援助の基礎的な考え方
                ——「ユニバーサル・ホスピスマインド」をご紹介します。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 人生の目的 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">
              人生の目的は、幸せになること
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                医療に限らず、対人援助の目的を「幸せになること（Well-Beingを実感できること）」とします。
                これは医療だけではなく、福祉や教育の現場でも、あるいは子育てや親の介護においても
                普遍的な視点であると考えます。
              </p>
              <p>
                その上で、めぐみ在宅クリニックとして、関わる患者さんとご家族が
                幸せを実感できる援助を行えているかを、常に問い続けていきたいと考えています。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 問題解決思考の限界 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">
              問題解決思考の限界
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                一般的に、何かで苦しんでいる人が幸せになるために、
                苦しみの原因を見つけ、適切な介入をすることを医療は提供してきました。
                適切な診断と治療は、その一つのアプローチです。
              </p>
              <p>
                しかし、どれほど医療が発達したとしても、すべての病気を完治することはできません。
                老いと喪失の社会において、従来の問題解決思考では限界があります。
              </p>
              <p>
                たとえ解決が難しい苦しみを抱えたとしても、人が幸せを実感できるための関わり方を、
                めぐみ在宅クリニックとしてはこだわって提供したいと考えています。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 概念図 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">
              ユニバーサル・ホスピスマインドの概論
            </h2>
            <div className="rounded-2xl overflow-hidden bg-white p-4 mb-6 shadow-sm">
              <Image
                src="/images/uhm-concept.png"
                alt="ユニバーサル・ホスピスマインド 概念図"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                目標を、患者さんご本人、ご家族、そして援助者も穏やかであることとします。
                ここで言う「穏やか」とは、嬉しい・楽しい・ホッとする——
                そうしたプラスの気持ちを総称した言葉です。
              </p>
              <p>その上で、5つのステップを大切にします。</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-6">
              {[
                { num: "1", title: "援助的コミュニケーション", desc: "心理的安全性を提供する聴く技術" },
                { num: "2", title: "苦しみに気づく", desc: "希望と現実の開きを理解する" },
                { num: "3", title: "支えに気づく", desc: "穏やかになれる理由を見つける" },
                { num: "4", title: "支えを強める", desc: "対話を通して支えを育てる" },
                { num: "5", title: "自らの支えを知る", desc: "援助者自身の心を守る" },
              ].map((item) => (
                <div key={item.num} className="bg-navy-light rounded-xl p-5 text-center">
                  <span className="text-2xl font-bold text-navy block mb-1">{item.num}</span>
                  <span className="text-sm font-medium text-navy block mb-1">{item.title}</span>
                  <span className="text-xs text-text-muted">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* コンピテンシー6領域 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-4">
              めぐみ在宅クリニックのコンピテンシー
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              めぐみ在宅クリニックのコンピテンシーとは、
              解決が難しい苦しみを抱えたとしても、関わりを通して穏やかさを支えることができる能力であり、
              その中核は、苦しみ（希望と現実の開き）と支え（穏やかになれる理由）を言語化し、
              対話を通して関係性を築く力です。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: "1",
                  title: "患者・家族中心のケア",
                  desc: "苦しみと支えに気づき、患者・家族・援助者が穏やかになれる方策を立案できる",
                },
                {
                  num: "2",
                  title: "症状緩和と臨床判断",
                  desc: "痛み・呼吸困難・せん妄などの評価と対応。在宅環境下を踏まえた意思決定",
                },
                {
                  num: "3",
                  title: "援助的コミュニケーション",
                  desc: "心理的安全性を提供する聴く技術。負の気持ちにノイズを入れずに反復できる",
                },
                {
                  num: "4",
                  title: "意思決定支援（ACP）",
                  desc: "将来の予想される状況を前提に対話でき、本人・家族間のズレを調整できる",
                },
                {
                  num: "5",
                  title: "多職種連携・地域連携",
                  desc: "訪問看護・ケアマネ・薬剤師との協働。地域資源を活用できる",
                },
                {
                  num: "6",
                  title: "プロフェッショナリズム",
                  desc: "燃え尽きを予防し、学び続ける姿勢。自己省察と成長",
                },
              ].map((item) => (
                <ScrollReveal key={item.num} delay={Number(item.num) * 80}>
                  <div className="bg-warm-gray rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {item.num}
                      </span>
                      <h3 className="font-bold text-navy text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* EPA */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-4">
              信頼可能な専門的活動（EPA）
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              EPA（Entrustable Professional Activities）とは、
              指導医の監督下あるいは監督なしで安心して「任せる」ことができる具体的な診療業務の単位です。
              めぐみ在宅クリニックでは以下の9つの業務を定義しています。
            </p>

            <div className="space-y-3">
              {[
                { id: "EPA 1", title: "初回訪問で信頼関係を構築する", desc: "患者・家族と心理的安全性を実感できる対話ができる。予測指示を含めた安心の方策を立案できる。" },
                { id: "EPA 2", title: "苦しみと支えを言語化し、穏やかさを取り戻す援助を実践する", desc: "苦しみ（希望と現実の開き）と支え（頑張れる理由）に気づき、4分割を用いて対話を行う。" },
                { id: "EPA 3", title: "症状緩和を在宅で安全に実践する", desc: "疼痛マネージメント、痛み以外の諸症状、非癌の症状、緊急時対応。" },
                { id: "EPA 4", title: "ADL低下時を想定した対話", desc: "患者本人と家族の思いに気づき、将来に備えた準備を整える。" },
                { id: "EPA 5", title: "看取り期のケアを実践する", desc: "意識レベル低下時のコミュニケーション、家族への関わり、死後対応。" },
                { id: "EPA 6", title: "多職種チームを機能させる", desc: "情報共有、役割調整、カンファレンス参加。" },
                { id: "EPA 7", title: "在宅医療における緊急対応を行う", desc: "夜間対応、入院判断、家族対応。" },
                { id: "EPA 8", title: "家族ケア・グリーフケアを行う", desc: "家族の苦しみの理解、死後の関わり。" },
                { id: "EPA 9", title: "自らを振り返り、学び続ける", desc: "ケースレビュー、感情の言語化、ロールプレイ参加。" },
              ].map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 60}>
                  <div className="border border-gray-200 rounded-lg px-5 py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-twilight font-bold shrink-0">{item.id}</span>
                      <div>
                        <p className="font-medium text-navy text-sm">{item.title}</p>
                        <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 教育方法 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">教育方法</h2>
            <div className="bg-navy-light rounded-2xl p-8">
              <p className="text-navy font-bold text-lg mb-4 text-center">
                感性は「知識」ではなく「体験」で育つ
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "ロールプレイ", desc: "「いのちの限られた患者役」を体験し、対話の力を養う" },
                  { title: "ケース振り返り", desc: "実際の症例を通じて、自らの関わりを省察する" },
                  { title: "シャドーイング", desc: "経験豊富な医師に同行し、対話と判断を学ぶ" },
                  { title: "同行訪問", desc: "段階的に責任を持ち、自立した診療へと歩む" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-4">
                    <p className="font-medium text-navy text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/concept/about"
              className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2"
            >
              ← 院長・コンセプトに戻る
            </Link>
            <Link
              href="/concept/training"
              className="btn-pill btn-pill-primary inline-flex items-center justify-center gap-2"
            >
              見学・研修のご案内 →
            </Link>
            <Link
              href="/clinic/recruit"
              className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2"
            >
              採用情報 →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
