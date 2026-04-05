import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINIC_INFO } from "@/lib/constants";

export default function TopPage() {
  return (
    <>
      <Header variant="top" />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-visit.jpg"
              alt="訪問診療の様子"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/70" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
            <p className="text-white/80 text-sm font-medium tracking-widest mb-4">
              横浜市瀬谷区 在宅医療・訪問診療
            </p>
            <h1 className="heading-hero text-white mb-6">
              通院が困難な方に、
              <br className="hidden sm:block" />
              住み慣れたご自宅で
              <br className="hidden sm:block" />
              継続した医療を届けたい。
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              めぐみ在宅クリニックは2006年の開院以来、通院が困難な方やご家族への支援に努めています。
              24時間365日の診療体制で、住み慣れたご自宅での療養を支えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CLINIC_INFO.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-sunrise text-white px-8 py-4 rounded-lg font-medium hover:bg-sunrise-dark transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                まずはお電話ください
              </a>
              <Link
                href="/clinic/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/40 px-8 py-4 rounded-lg font-medium hover:bg-white/30 transition-colors text-lg backdrop-blur-sm"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </section>

        {/* 5 Navigation Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            目的に合わせてご案内します
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NavCard
              icon="🏠"
              title="患者さま・ご家族の方"
              description="在宅医療の流れ、費用、対応エリア、よくあるご質問などをご案内します。"
              href="/clinic/first-visit"
              color="bg-navy-light"
            />
            <NavCard
              icon="🤝"
              title="医療機関・連携先の方"
              description="患者さまのご紹介の手順、連携窓口のご案内です。"
              href="/clinic/partnership"
              color="bg-dawn-light"
            />
            <NavCard
              icon="🎓"
              title="見学・研修をお考えの方"
              description="緩和ケアの学びの場として、見学プログラム・研修をご案内します。"
              href="/concept/training"
              color="bg-twilight-light"
            />
            <NavCard
              icon="👥"
              title="一緒に働きたい方"
              description="医師・看護師・コメディカルスタッフの採用情報をご案内します。"
              href="/clinic/recruit"
              color="bg-sunrise-light"
            />
            <NavCard
              icon="🎤"
              title="講演・執筆を依頼したい方"
              description="院長の講演テーマ・実績、ご依頼方法をご案内します。"
              href="/concept/lecture"
              color="bg-twilight-light"
            />
          </div>
        </section>

        {/* お知らせ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <h2 className="text-xl font-bold mb-4">お知らせ</h2>
          <div className="divide-y divide-gray-200 bg-white rounded-2xl overflow-hidden border border-gray-100">
            {[
              { date: "2026.02.05", title: "2月オンライン・イベントのお知らせ" },
              { date: "2025.12.17", title: "小澤院長メディア掲載・出演＜専門誌・医療関係＞を更新しました" },
              { date: "2025.12.01", title: "医師/看護師採用情報を掲載しています" },
            ].map((item, i) => (
              <div key={i} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-baseline gap-4">
                  <time className="text-xs text-text-muted shrink-0 tabular-nums">{item.date}</time>
                  <p className="text-sm text-text-primary">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 採用バナー */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <Link
            href="/clinic/recruit"
            className="block bg-gradient-to-r from-navy to-twilight rounded-2xl p-8 text-white hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sunrise-light text-sm font-medium mb-1">Recruitment</p>
                <h3 className="text-xl font-bold mb-1">一緒に働く仲間を募集しています</h3>
                <p className="text-white/70 text-sm">ドライバー募集中。在宅医療チームの一員として働きませんか。</p>
              </div>
              <span className="text-white/50 text-3xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </section>

        {/* Strengths */}
        <section className="bg-warm-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              当院の診療体制
            </h2>
            <p className="text-center text-text-secondary mb-10 max-w-xl mx-auto">
              地域で20年の実績と、チームで支える在宅医療体制
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StrengthCard
                title="24時間365日対応"
                description="シフト制の決まった医師が夜間も担当。当直室を完備し、いつでも駆けつけます。"
              />
              <StrengthCard
                title="継続性のある診療"
                description="同じ医師が継続して診察。毎回医師が変わる不安がありません。"
              />
              <StrengthCard
                title="3名体制の訪問"
                description="医師・看護師・ドライバーの3名体制。手厚い処置と相談しやすい環境を実現。"
              />
              <StrengthCard
                title="交通費無料"
                description="当院では訪問診療時の交通費をいただいておりません。安心して在宅医療を続けられる環境を整えています。"
              />
            </div>
          </div>
        </section>

        {/* Learning Place */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="bg-gradient-to-r from-twilight-light to-dawn-light rounded-2xl p-8 sm:p-12">
            <p className="text-dawn text-sm font-medium mb-2">Learning Community</p>
            <h2 className="text-2xl font-bold mb-4">学びの場としてのめぐみ</h2>
            <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">
              めぐみ在宅クリニックは、在宅医療の「実践の場」であると同時に「学びの場」です。
              ホスピスマインドと対話の技術を体系的に学び、地域に持ち帰って伝えていく。
              医療者の見学・研修も受け入れています。
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
              2015年に設立したエンドオブライフ・ケア協会と連携し、
              苦しむ人の傍らに寄り添える援助者を全国に広げる活動を続けています。
            </p>
            <Link
              href="/concept/training"
              className="inline-flex items-center gap-1 text-navy font-medium hover:text-navy-dark"
            >
              見学・研修プログラムについて →
            </Link>
          </div>
        </section>

        {/* About Director */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/director-car.jpg"
                  alt="院長 小澤竹俊"
                  fill
                  className="object-cover object-[75%_center]"
                />
              </div>
              <p className="text-xs text-text-muted text-center mt-2">
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-navy text-sm font-medium mb-2">院長紹介</p>
              <h2 className="text-2xl font-bold mb-4">小澤竹俊 Taketoshi Ozawa</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                1963年東京生まれ。東京慈恵会医科大学卒業後、救命救急・農村医療を経てホスピス病棟長を務め、
                2006年にめぐみ在宅クリニックを開院。
                「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」という信念のもと、
                在宅緩和ケアに取り組んでいます。
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                2000年より全国で「いのちの授業」を展開。
                2015年にはエンドオブライフ・ケア協会を設立し、援助者の養成に取り組んでいます。
              </p>
              <Link
                href="/concept/about"
                className="inline-flex items-center gap-1 text-navy font-medium hover:text-navy-dark"
              >
                院長について詳しく →
              </Link>
            </div>
          </div>
        </section>

        {/* Clinic Overview */}
        <section className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">クリニック概要</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-medium text-navy-light mb-2">所在地</h3>
                <p className="text-sm">{CLINIC_INFO.address}</p>
              </div>
              <div>
                <h3 className="font-medium text-navy-light mb-2">診療体制</h3>
                <p className="text-sm">24時間365日対応</p>
                <p className="text-sm">外来：{CLINIC_INFO.outpatient.general}</p>
                <p className="text-sm">緩和ケア外来：{CLINIC_INFO.outpatient.palliative}</p>
              </div>
              <div>
                <h3 className="font-medium text-navy-light mb-2">対応エリア</h3>
                <p className="text-sm">{CLINIC_INFO.areas.join("・")}など</p>
                <p className="text-sm mt-1">クリニックから5km以内</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NavCard({
  icon,
  title,
  description,
  href,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className={`${color} rounded-xl p-6 hover:shadow-lg transition-shadow group`}
    >
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="font-bold text-lg mb-2 group-hover:text-navy transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </Link>
  );
}

function StrengthCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
