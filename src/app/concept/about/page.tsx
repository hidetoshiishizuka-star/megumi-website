import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { DIRECTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "院長 小澤竹俊について",
  description:
    "めぐみ在宅クリニック院長・小澤竹俊のプロフィール。緩和医療専門医・エンドオブライフケア協会代表理事。",
};

export default function AboutDirectorPage() {
  return (
    <>
      <PageHeader title="院長 小澤竹俊" subtitle="Taketoshi Ozawa, M.D., Ph.D." />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* プロフィール */}
        <section className="mb-16 md:flex gap-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="aspect-[3/4] bg-gray-200 rounded-2xl flex items-center justify-center text-6xl">
              🐰
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl font-bold mb-4">プロフィール</h2>
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

        {/* 資格 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-forest">
            資格・所属
          </h2>
          <ul className="space-y-2 text-text-secondary">
            {DIRECTOR.specialty.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-forest">●</span>
                {s}
              </li>
            ))}
            <li className="flex items-start gap-2">
              <span className="text-forest">●</span>
              常任世話人（日本死の臨床研究会）
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest">●</span>
              代表理事（一般社団法人エンドオブライフ・ケア協会）
            </li>
          </ul>
        </section>

        {/* 経歴 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-forest">
            経歴
          </h2>
          <div className="space-y-3">
            {DIRECTOR.career.map((item) => (
              <div key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                <span className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* メディア */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-forest">
            主なメディア出演
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(DIRECTOR.activities ?? []).map((item) => (
              <div key={item} className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
                {item}
              </div>
            ))}
            <div className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
              朝日・読売・毎日・日経・産経新聞
            </div>
            <div className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary">
              週刊朝日・週刊現代ほか多数
            </div>
          </div>
        </section>

        {/* 理念 */}
        <section className="bg-forest-light rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4 text-center">院長の想い</h2>
          <blockquote className="text-center text-lg text-text-primary leading-relaxed italic">
            「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」
          </blockquote>
          <p className="text-text-secondary text-center mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
            在宅医療の技術や仕組みだけでなく、人生の終盤で穏やかさ・尊厳・関係性を実現するための
            対人援助の思想を大切にしています。それを実践するだけでなく、学びたい人に伝え、
            全国へ波及させる使命を持って活動しています。
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/concept/training"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded-lg font-medium hover:bg-forest-dark transition-colors"
          >
            見学・研修のご案内 →
          </Link>
          <Link
            href="/concept/lecture"
            className="inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-8 py-4 rounded-lg font-medium hover:bg-forest-light transition-colors"
          >
            講演・執筆依頼 →
          </Link>
        </div>
      </div>
    </>
  );
}
