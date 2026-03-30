import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DIRECTOR } from "@/lib/constants";
import { lectureRecords } from "@/data/lectures";
import { columns } from "@/data/columns";

export const metadata: Metadata = {
  title: "院長 小澤竹俊について",
  description:
    "めぐみ在宅クリニック院長・小澤竹俊のプロフィール。緩和医療専門医・エンドオブライフケア協会代表理事。",
};

export default function AboutDirectorPage() {
  return (
    <>
        {/* Hero */}
        <section className="gradient-twilight text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Director</p>
            <h1 className="heading-hero text-white mb-6">院長 小澤竹俊</h1>
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

          {/* 理念 */}
          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 mb-12">
              <h2 className="heading-section text-navy mb-4 text-center">院長の想い</h2>
              <blockquote className="text-center text-lg text-text-primary leading-relaxed italic">
                「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」
              </blockquote>
              <p className="text-text-secondary text-center mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
                在宅医療の技術や仕組みだけでなく、人生の終盤で穏やかさ・尊厳・関係性を実現するための
                対人援助の思想を大切にしています。それを実践するだけでなく、学びたい人に伝え、
                全国へ波及させる使命を持って活動しています。
              </p>
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
