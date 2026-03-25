import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINIC_INFO } from "@/lib/constants";

export default function TopPage() {
  return (
    <>
      <Header variant="top" />
      <main>
        {/* Hero */}
        <section className="relative bg-forest-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
            <p className="text-forest text-sm font-medium tracking-widest mb-4">
              横浜市瀬谷区 在宅医療・緩和ケア専門
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
              どんな病気であったとしても、
              <br className="hidden sm:block" />
              安心して最期を迎える社会を目指します
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              めぐみ在宅クリニックは2006年の開院以来、地域で悩み苦しむ患者さん・ご家族への支援に努めています。
              24時間365日の診療体制で、住み慣れたご自宅での療養を支えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CLINIC_INFO.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded-lg font-medium hover:bg-forest-dark transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                まずはお電話ください
              </a>
              <Link
                href="/clinic/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-8 py-4 rounded-lg font-medium hover:bg-forest-light transition-colors text-lg"
              >
                メールでお問い合わせ
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
              color="bg-forest-light"
            />
            <NavCard
              icon="🎓"
              title="見学・研修をお考えの方"
              description="緩和ケアの学びの場として、見学プログラム・研修をご案内します。"
              href="/concept/training"
              color="bg-blue-50"
            />
            <NavCard
              icon="👥"
              title="一緒に働きたい方"
              description="医師・看護師・コメディカルスタッフの採用情報をご案内します。"
              href="/clinic/recruit"
              color="bg-amber-50"
            />
            <NavCard
              icon="🤝"
              title="医療機関・連携先の方"
              description="患者さまのご紹介の手順、連携窓口のご案内です。"
              href="/clinic/partnership"
              color="bg-green-50"
            />
            <NavCard
              icon="🎤"
              title="講演・執筆を依頼したい方"
              description="院長の講演テーマ・実績、ご依頼方法をご案内します。"
              href="/concept/lecture"
              color="bg-purple-50"
            />
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-warm-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              当院が選ばれる理由
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
                title="緩和ケアの専門性"
                description="院長は緩和医療専門医。ディグニティセラピー、グリーフケアにも対応。"
              />
            </div>
          </div>
        </section>

        {/* About Director */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-[3/4] bg-gray-200 rounded-2xl flex items-center justify-center text-6xl">
                🐰
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-forest text-sm font-medium mb-2">院長紹介</p>
              <h2 className="text-2xl font-bold mb-4">小澤竹俊 Taketoshi Ozawa</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                1963年東京生まれ。東京慈恵会医科大学卒業後、救命救急・農村医療を経てホスピス病棟長を務め、
                2006年にめぐみ在宅クリニックを開院。
                「苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい」という信念のもと、
                在宅緩和ケアに取り組んでいます。
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                2000年より全国で「いのちの授業」を展開。2015年にはエンドオブライフ・ケア協会を設立。
                NHK「プロフェッショナル 仕事の流儀」など多数のメディアにも出演。
              </p>
              <Link
                href="/concept/about"
                className="inline-flex items-center gap-1 text-forest font-medium hover:text-forest-dark"
              >
                院長について詳しく →
              </Link>
            </div>
          </div>
        </section>

        {/* Clinic Overview */}
        <section className="bg-forest text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">クリニック概要</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-medium text-forest-light mb-2">所在地</h3>
                <p className="text-sm">{CLINIC_INFO.address}</p>
              </div>
              <div>
                <h3 className="font-medium text-forest-light mb-2">診療体制</h3>
                <p className="text-sm">24時間365日対応</p>
                <p className="text-sm">外来：{CLINIC_INFO.outpatient.general}</p>
                <p className="text-sm">緩和ケア外来：{CLINIC_INFO.outpatient.palliative}</p>
              </div>
              <div>
                <h3 className="font-medium text-forest-light mb-2">対応エリア</h3>
                <p className="text-sm">{CLINIC_INFO.areas.join("・")}など</p>
                <p className="text-sm mt-1">おおむね5km圏内（要相談可）</p>
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
      <h3 className="font-bold text-lg mb-2 group-hover:text-forest transition-colors">
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
