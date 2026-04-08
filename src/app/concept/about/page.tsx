import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { DIRECTOR } from "@/lib/constants";
import { lectureRecords as fallbackLectures } from "@/data/lectures";
import { columns } from "@/data/columns";
import { getLectureList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "院長・コンセプト｜小澤竹俊｜瀬谷区の在宅医療",
  description:
    "めぐみ在宅クリニック院長・小澤竹俊のプロフィールとコンセプト。緩和医療専門医。ユニバーサル・ホスピスマインドで在宅医療を実践。横浜市瀬谷区。",
};

export default async function AboutDirectorPage() {
  const cmsLectures = await getLectureList().catch(() => []);
  const lectureRecords = cmsLectures.length > 0 ? cmsLectures : fallbackLectures;

  return (
    <>
        <Breadcrumb items={[
          { label: "ホーム", href: "/" },
          { label: "院長・コンセプト" },
        ]} />
        {/* Hero */}
        <section className="gradient-twilight text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Director & Concept</p>
            <h1 className="heading-hero text-white mb-6">院長・コンセプト</h1>
            <p className="subheading text-white/90">Taketoshi Ozawa, M.D., Ph.D.</p>
          </div>
        </section>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          {/* プロフィール */}
          <ScrollReveal>
            <section className="mb-16 md:flex gap-10">
              <div className="md:w-1/3 mb-8 md:mb-0">
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
                <h2 className="heading-section text-navy mb-4">プロフィール</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  1963年東京生まれ。東京慈恵会医科大学医学部卒業、山形大学大学院医学研究科博士課程修了。
                  救命救急センター・農村医療に従事した後、1994年より横浜甦生病院ホスピスに勤務。
                  1996年にホスピス病棟長に就任。
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  2006年にめぐみ在宅クリニックを開院し、院長として現在に至る。
                  2000年より全国で「いのちの授業」を展開し、小学校から医療者まで幅広い対象に、
                  苦しみへの向き合い方を伝えている。
                </p>
                <p className="text-text-secondary leading-relaxed">
                  2015年に一般社団法人エンドオブライフ・ケア協会を設立し、代表理事を務める。
                  全国に援助者養成の仕組みを広げ、苦しむ人の傍らに寄り添える人材を育成している。
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* 資格 */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">資格・所属</h2>
              <ul className="space-y-2 text-text-secondary">
                {DIRECTOR.specialty.map((s, i) => (
                  <ScrollReveal key={s} delay={i * 80}>
                    <li className="flex items-start gap-2">
                      <span className="text-navy">●</span>
                      {s}
                    </li>
                  </ScrollReveal>
                ))}
                <ScrollReveal delay={DIRECTOR.specialty.length * 80}>
                  <li className="flex items-start gap-2">
                    <span className="text-navy">●</span>
                    常任世話人（日本死の臨床研究会）
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={(DIRECTOR.specialty.length + 1) * 80}>
                  <li className="flex items-start gap-2">
                    <span className="text-navy">●</span>
                    代表理事（一般社団法人エンドオブライフ・ケア協会）
                  </li>
                </ScrollReveal>
              </ul>
            </section>
          </ScrollReveal>

          {/* 経歴 */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">経歴</h2>
              <div className="space-y-3">
                {DIRECTOR.career.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <div className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* メディア */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">主なメディア出演</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(DIRECTOR.activities ?? []).map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <div className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
                      {item}
                    </div>
                  </ScrollReveal>
                ))}
                <ScrollReveal delay={(DIRECTOR.activities?.length ?? 0) * 80}>
                  <div className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
                    朝日・読売・毎日・日経・産経新聞
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={((DIRECTOR.activities?.length ?? 0) + 1) * 80}>
                  <div className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
                    週刊朝日・週刊現代ほか多数
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollReveal>

          {/* 講演実績 */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="heading-section text-navy">講演実績</h2>
                <span className="text-sm text-text-muted">{lectureRecords.length}件</span>
              </div>
              <div className="divide-y divide-gray-100">
                {lectureRecords.slice(0, 5).map((lecture, i) => (
                  <ScrollReveal key={`${lecture.date}-${i}`} delay={i * 60}>
                    <div className="py-3 flex items-baseline gap-3">
                      <span className="text-text-muted text-xs shrink-0 tabular-nums w-20">
                        {lecture.date.slice(0, 12)}
                      </span>
                      <p className="text-sm text-text-secondary leading-snug">{lecture.title}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/concept/lecture"
                  className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2"
                >
                  全{lectureRecords.length}件の講演実績を見る →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* 院長コラム */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="heading-section text-navy">院長コラム</h2>
                <span className="text-sm text-text-muted">{columns.length}件</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {columns.slice(0, 4).map((col, i) => (
                  <ScrollReveal key={col.slug} delay={i * 80}>
                    <Link
                      href={`/concept/blog/${col.slug}`}
                      className="block bg-warm-gray rounded-xl p-5 hover:shadow-md transition-shadow group"
                    >
                      <p className="text-xs text-text-muted mb-1">{col.date}</p>
                      <p className="text-sm font-medium text-navy group-hover:text-twilight transition-colors leading-snug">
                        {col.title}
                      </p>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/concept/blog"
                  className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2"
                >
                  全{columns.length}件のコラムを読む →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* 院長の想い — ユニバーサル・ホスピスマインド */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6 text-center">院長の想い</h2>
              <blockquote className="text-center text-xl text-text-primary leading-relaxed italic mb-8">
                「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」
              </blockquote>

              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  医療に限らず、対人援助の目的は「幸せになること（Well-Beingを実感できること）」にあると考えています。
                  これは医療だけではなく、福祉や教育の現場でも、あるいは子育てや親の介護においても普遍的な視点です。
                </p>
                <p>
                  めぐみ在宅クリニックとして、関わる患者さんとご家族が幸せを実感できる援助を行えているかを、
                  常に問い続けていきたいと考えています。
                </p>

                <h3 className="text-lg font-bold text-navy pt-4">問題解決思考の限界</h3>
                <p>
                  一般的に、何かで苦しんでいる人が幸せになるために、苦しみの原因を見つけ、適切な介入をすることを医療は提供してきました。
                  適切な診断と治療は、その一つのアプローチです。しかし、どれほど医療が発達したとしても、
                  すべての病気を完治することはできません。
                </p>
                <p>
                  老いと喪失の社会において、従来の問題解決思考だけでは限界があります。
                  たとえ解決が難しい苦しみを抱えたとしても、人が幸せを実感できるための関わり方を、
                  めぐみ在宅クリニックとしてはこだわって提供したいと考えています。
                </p>

                <h3 className="text-lg font-bold text-navy pt-4">ユニバーサル・ホスピスマインド</h3>
                <p>
                  具体的には、ホスピスの現場で培ってきた対人援助のマインド
                  ——「ユニバーサル・ホスピスマインド」を、スタッフ全員が習得し、
                  実際の現場で具体的に関わることができるよう環境を整えています。
                </p>
              </div>

              {/* 概念図 */}
              <div className="my-8 rounded-2xl overflow-hidden bg-white p-4">
                <Image
                  src="/images/uhm-concept.png"
                  alt="ユニバーサル・ホスピスマインド 概念図"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  目標は、患者さんご本人、ご家族、そして援助者も穏やかであること。
                  ここで言う「穏やか」とは、嬉しい・楽しい・ホッとする——そうしたプラスの気持ちを総称した言葉です。
                </p>
                <p>
                  その上で、5つのステップを大切にしています。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6">
                  {[
                    { num: "1", text: "援助的コミュニケーション" },
                    { num: "2", text: "相手の苦しみに気づく" },
                    { num: "3", text: "相手の支えに気づく" },
                    { num: "4", text: "相手の支えを強める" },
                    { num: "5", text: "自らの支えを知る" },
                  ].map((item) => (
                    <div key={item.num} className="bg-navy-light rounded-xl p-4 text-center">
                      <span className="text-xl font-bold text-navy block mb-1">{item.num}</span>
                      <span className="text-xs text-text-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-navy pt-4">「治す医療」ではなく「支える医療」</h3>
                <p>
                  苦しみとは「希望と現実の開き」。支えとは「穏やかになれる理由」。
                  めぐみ在宅クリニックのコンピテンシーとは、解決が難しい苦しみを抱えたとしても、
                  関わりを通して穏やかさを支えることができる能力です。
                </p>
                <p>
                  その中核は、苦しみと支えを言語化し、対話を通して関係性を築く力にあります。
                  在宅医療の技術や仕組みだけでなく、人生の終盤で穏やかさ・尊厳・関係性を実現するための
                  対人援助の思想を大切にしています。
                </p>
                <p>
                  それを実践するだけでなく、学びたい人に伝え、全国へ波及させる使命を持って活動しています。
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/concept/philosophy"
                  className="btn-pill btn-pill-primary inline-flex items-center justify-center gap-2"
                >
                  ユニバーサル・ホスピスマインドについて詳しく →
                </Link>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/concept/training"
                className="btn-pill btn-pill-primary inline-flex items-center justify-center gap-2"
              >
                見学・研修のご案内 →
              </Link>
              <Link
                href="/concept/lecture"
                className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2"
              >
                講演・執筆依頼 →
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
