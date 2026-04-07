import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MedicalSupervision from "@/components/ui/MedicalSupervision";

export const metadata: Metadata = {
  title: "ユニバーサル・ホスピスマインド｜めぐみ在宅",
  description:
    "めぐみ在宅クリニックのコンセプト「ユニバーサル・ホスピスマインド」。治す医療ではなく支える医療。苦しみの中でも穏やかさを支える対人援助の思想をご紹介します。",
};

export default function PhilosophyPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "院長・コンセプト", href: "/concept/about" },
        { label: "ユニバーサル・ホスピスマインド" },
      ]} />
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

      {/* 訪問ケア写真 */}
      <ScrollReveal>
        <section className="max-w-[var(--content-wide)] mx-auto px-4 sm:px-6 -mt-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9] relative">
            <Image
              src="/images/visit-care.jpg"
              alt="訪問ケアの様子"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1120px) 100vw, 1120px"
              priority
            />
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
        {/* はじめに */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">はじめに</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                めぐみ在宅クリニックは2006年の開院以来、在宅緩和ケアを中心に、
                人生の最期まで安心して過ごせる社会の実現を目指して活動を続けてきました。
                20年にわたり3,000人以上の患者さんを看取ってきた経験から、
                私たちは一つの確信に至りました。
              </p>
              <p>
                それは、医療の役割は「病気を治す」ことだけではないということです。
                治せない病を抱えた方であっても、穏やかに、尊厳をもって過ごすことはできる。
                そのための関わり方を、私たちは「ユニバーサル・ホスピスマインド」と呼んでいます。
              </p>
              <p>
                このページでは、ホスピスの現場で培ってきた対人援助の基礎的な考え方をご紹介します。
                医療・介護に携わる方だけでなく、ご家族の介護をされている方、
                人と関わるすべての方に通じる普遍的な視点です。
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
                病気が治ることだけが幸せではありません。
                家族と穏やかに過ごせること、自分の人生に意味を見出せること、
                誰かに苦しみをわかってもらえること——それもまた幸せの形です。
              </p>
              <p>
                その上で、めぐみ在宅クリニックとして、関わる患者さんとご家族が
                幸せを実感できる援助を行えているかを、常に問い続けていきたいと考えています。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 院長写真+引用 */}
        <ScrollReveal>
          <section className="mb-16">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/director-portrait.jpg"
                    alt="院長 小澤竹俊"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-xl text-navy leading-relaxed italic mb-4">
                  「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」
                </blockquote>
                <p className="text-text-secondary leading-relaxed">
                  この言葉は、院長・小澤竹俊がホスピス病棟で多くの患者さんから学んだ原点です。
                  どれほど医療が進歩しても、すべての苦しみを取り除くことはできません。
                  しかし、「わかってくれる人がいる」という実感は、苦しみの中にあっても
                  穏やかさを取り戻す力になります。
                </p>
                <p className="text-sm text-text-muted mt-3">— 院長 小澤竹俊</p>
              </div>
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
                「治す」ことを前提にした関わりだけでは、治らない病と向き合う患者さんに
                寄り添うことができません。
              </p>
              <p>
                たとえば、末期がんの患者さんが「もう治らないのか」と問うとき、
                医療者が「治療法はもうありません」と答えるだけでは、
                その方の苦しみに応えたことにはなりません。
                苦しみの本質は、病気そのものではなく「希望と現実の開き」にあるからです。
              </p>
              <p>
                たとえ解決が難しい苦しみを抱えたとしても、人が幸せを実感できるための関わり方を、
                めぐみ在宅クリニックとしてはこだわって提供したいと考えています。
                具体的には、ホスピスの現場で培ってきた対人援助のマインドを習得し、
                実際の現場で具体的に関わることができるよう環境を整えています。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* 苦しみと支え */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">
              苦しみとは何か、支えとは何か
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-twilight-light rounded-2xl p-6">
                <h3 className="font-bold text-navy text-lg mb-3">苦しみ</h3>
                <p className="text-navy text-2xl font-bold mb-3">＝ 希望と現実の開き</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  「歩きたいのに歩けない」「家に帰りたいのに帰れない」
                  「家族に迷惑をかけたくないのにかけてしまう」——
                  こうした希望と現実のギャップが、苦しみの正体です。
                  苦しみは身体的な痛みだけではなく、社会的・精神的・スピリチュアルな領域にも及びます。
                </p>
              </div>
              <div className="bg-sunrise-light rounded-2xl p-6">
                <h3 className="font-bold text-navy text-lg mb-3">支え</h3>
                <p className="text-navy text-2xl font-bold mb-3">＝ 穏やかになれる理由</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  「家族がそばにいてくれる」「自分の人生には意味があった」
                  「わかってくれる人がいる」——
                  こうした穏やかになれる理由が、支えです。
                  支えは過去の経験、現在の関係性、未来への希望の中にあります。
                  私たちはその支えに気づき、強めるお手伝いをします。
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 概念図（CSS再作成） */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">
              ユニバーサル・ホスピスマインドの概論
            </h2>

            {/* 概念図（原本） */}
            <div className="rounded-2xl overflow-hidden bg-white p-4 mb-8 shadow-sm">
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
                重要なのは、援助者自身も穏やかであること。
                燃え尽きた援助者は、患者さんを支えることができません。
              </p>
              <p>
                この5つのステップは順番に進むものではなく、常に循環しています。
                対話の中で苦しみに気づき、支えを見つけ、それを強めていく。
                そして自分自身の心も大切にする。この繰り返しが、ユニバーサル・ホスピスマインドの実践です。
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* チーム訪問写真 */}
        <ScrollReveal>
          <section className="mb-16">
            <div className="rounded-2xl overflow-hidden aspect-[16/7] relative">
              <Image
                src="/images/team-visit.jpg"
                alt="チーム訪問の様子 — 医師・看護師（またはサポーター）・ドライバーの3名体制"
                fill
                className="object-cover"
                sizes="740px"
              />
            </div>
            <p className="text-xs text-text-muted text-center mt-2">
              医師・看護師（またはサポーター）・ドライバーの3名体制で訪問。チームで支える在宅医療を実践しています。
            </p>
          </section>
        </ScrollReveal>

        {/* コンピテンシー6領域 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-4">
              めぐみ在宅クリニックのコンピテンシー
            </h2>
            <p className="text-text-secondary mb-4 leading-relaxed">
              コンピテンシーとは、知識・技能・態度を統合し、実際の臨床場面で発揮できる能力です。
              単なる「知っている」ではなく、「適切な場面で、適切に行動できる」ことが重要です。
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              めぐみ在宅クリニックのコンピテンシーとは、
              解決が難しい苦しみを抱えたとしても、関わりを通して穏やかさを支えることができる能力であり、
              その中核は、苦しみ（希望と現実の開き）と支え（穏やかになれる理由）を言語化し、
              対話を通して関係性を築く力です。
              つまり「治す医療」ではなく「支える医療」を実践できる能力体系です。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: "1",
                  title: "患者・家族中心のケア",
                  titleEn: "Patient-centered Care",
                  desc: "苦しみと支えに気づき、患者・家族・援助者が穏やかになれる方策を立案できる。一方的な医療提供ではなく、ご本人の価値観を尊重した関わりを実践する。",
                },
                {
                  num: "2",
                  title: "症状緩和と臨床判断",
                  titleEn: "Clinical Competence",
                  desc: "痛み・呼吸困難・せん妄などの評価と対応。在宅環境下を踏まえた意思決定。病院とは異なる在宅ならではの判断力が求められる。",
                },
                {
                  num: "3",
                  title: "援助的コミュニケーション",
                  titleEn: "Communication",
                  desc: "心理的安全性を提供する聴く技術。負の気持ちにノイズを入れずに反復できる。支えに気づく問いかけを用いる。",
                },
                {
                  num: "4",
                  title: "意思決定支援（ACP）",
                  titleEn: "Advance Care Planning",
                  desc: "将来の予想される状況を前提に対話でき、本人・家族間のズレを調整できる。「もしものとき」に備えた対話を日常の中で行う。",
                },
                {
                  num: "5",
                  title: "多職種連携・地域連携",
                  titleEn: "Interprofessional Work",
                  desc: "訪問看護・ケアマネ・薬剤師との協働。地域資源を活用できる。在宅療養困難な時のレスパイト先との連携も含む。",
                },
                {
                  num: "6",
                  title: "プロフェッショナリズム",
                  titleEn: "Professionalism",
                  desc: "燃え尽きを予防し、学び続ける姿勢。自己省察と成長。自らの支えを知り、チームで支え合う文化を育てる。",
                },
              ].map((item) => (
                <ScrollReveal key={item.num} delay={Number(item.num) * 80}>
                  <div className="bg-warm-gray rounded-xl p-5 h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-bold text-navy text-sm">{item.title}</h3>
                        <p className="text-[10px] text-text-muted">{item.titleEn}</p>
                      </div>
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
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                EPA（Entrustable Professional Activities）とは、
                医学教育において、研修医や医学生が指導医の監督下あるいは監督なしで
                安心して「任せる（Entrust）」ことができる具体的な診療業務の単位です。
                知識・技術・態度を統合して評価する、コンピテンシー基盤型医学教育の現場での評価手法です。
              </p>
              <p>
                めぐみ在宅クリニックでは、ユニバーサル・ホスピスマインドの実践を
                9つの具体的な業務として定義し、段階的に習得できるよう設計しています。
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: "EPA 1", title: "初回訪問で信頼関係を構築する", desc: "患者・家族と心理的安全性を実感できる対話ができる。これからの在宅療養において、予測指示を含めた安心の方策を立案できる。" },
                { id: "EPA 2", title: "苦しみと支えを言語化し、穏やかさを取り戻す援助を実践する", desc: "苦しみ（希望と現実の開き）と支え（頑張れる理由）に気づき、過去・未来・事実・思いの4分割を用いて対話を行うことができる。" },
                { id: "EPA 3", title: "症状緩和を在宅で安全に実践する", desc: "疼痛マネージメント、痛み以外の諸症状への対応、非癌の諸症状への対応、緊急時対応。" },
                { id: "EPA 4", title: "ADL低下時を想定した対話", desc: "トイレの移動が難しくなった時など、患者本人と家族の思いに気づき、将来に備えた準備を整える。" },
                { id: "EPA 5", title: "看取り期のケアを実践する", desc: "意識レベル低下時のコミュニケーション、家族への関わり、死後対応。最期の時間を穏やかに過ごせるよう支える。" },
                { id: "EPA 6", title: "多職種チームを機能させる", desc: "情報共有、役割調整、カンファレンス参加。チーム全体で患者さんを支える仕組みを作る。" },
                { id: "EPA 7", title: "在宅医療における緊急対応を行う", desc: "夜間対応、入院判断、家族対応。限られた情報と資源の中で最善の判断を下す。" },
                { id: "EPA 8", title: "家族ケア・グリーフケアを行う", desc: "家族の苦しみの理解と死後の関わり。療養中の支援だけでなく、ご遺族のその後もサポートする。" },
                { id: "EPA 9", title: "自らを振り返り、学び続ける", desc: "ケースレビュー、感情の言語化、ロールプレイ参加。対人援助者としての成長を止めない。" },
              ].map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 60}>
                  <div className="border border-gray-200 rounded-lg px-5 py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-twilight font-bold shrink-0">{item.id}</span>
                      <div>
                        <p className="font-medium text-navy text-sm">{item.title}</p>
                        <p className="text-xs text-text-muted mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 評価レベル */}
            <div className="mt-8 bg-warm-gray rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-4">評価レベル（Entrustment Levels）</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { level: "1", label: "見学", desc: "観察して学ぶ" },
                  { level: "2", label: "指導下", desc: "指導医と共に実施" },
                  { level: "3", label: "部分自立", desc: "一部を任せられる" },
                  { level: "4", label: "自立", desc: "独力で実施可能" },
                  { level: "5", label: "指導可能", desc: "他者を指導できる" },
                ].map((item) => (
                  <div key={item.level} className="text-center">
                    <span className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-1">
                      {item.level}
                    </span>
                    <p className="text-xs font-medium text-navy">{item.label}</p>
                    <p className="text-[10px] text-text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-4 text-center">
                目標：6ヶ月〜1年でレベル4（自立して実施可能）
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* カンファレンス写真 */}
        <ScrollReveal>
          <section className="mb-16">
            <div className="rounded-2xl overflow-hidden aspect-[16/7] relative">
              <Image
                src="/images/staff-meeting.jpg"
                alt="スタッフミーティングの様子"
                fill
                className="object-cover"
                sizes="740px"
              />
            </div>
            <p className="text-xs text-text-muted text-center mt-2">
              ケースレビューやロールプレイを通じて、チーム全体でホスピスマインドを育てています。
            </p>
          </section>
        </ScrollReveal>

        {/* 教育方法 */}
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="heading-section text-navy mb-6">教育方法</h2>
            <div className="bg-navy-light rounded-2xl p-8">
              <p className="text-navy font-bold text-lg mb-2 text-center">
                感性は「知識」ではなく「体験」で育つ
              </p>
              <p className="text-text-secondary text-sm text-center mb-6">
                ユニバーサル・ホスピスマインドは、テキストを読むだけでは身につきません。
                実際の現場で体験し、振り返り、仲間と対話することで初めて自分のものになります。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "ロールプレイ", desc: "「いのちの限られた患者役」を体験し、対話の力を養う。苦しむ人の立場に立つことで、言葉の重みを知る。" },
                  { title: "ケース振り返り", desc: "実際の症例を通じて、自らの関わりを省察する。何ができたか、何ができなかったかを言語化する。" },
                  { title: "シャドーイング", desc: "経験豊富な医師に同行し、対話と判断を間近で学ぶ。態度や非言語コミュニケーションも含めて吸収する。" },
                  { title: "同行訪問", desc: "段階的に責任を持ち、自立した診療へと歩む。安全な環境で実践経験を積み重ねる。" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-4">
                    <p className="font-medium text-navy text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <MedicalSupervision lastUpdated="2026-04-07" />

        {/* CTA */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-12">
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
