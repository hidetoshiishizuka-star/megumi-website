import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINIC_INFO } from "@/lib/constants";
import { getNewsList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "めぐみ在宅クリニック｜瀬谷区の在宅医療・訪問診療",
  description:
    "横浜市瀬谷区の在宅医療・訪問診療クリニック。瀬谷駅徒歩9分。24時間365日対応、緩和ケア専門医在籍。通院が困難な方のご自宅に医師が訪問します。まずはお電話ください。",
};

export const revalidate = 60;

const fallbackNews: { date: string; title: string; link?: string }[] = [
  { date: "2026.02.05", title: "2月オンライン・イベントのお知らせ" },
  { date: "2025.12.17", title: "小澤院長メディア掲載・出演＜専門誌・医療関係＞を更新しました" },
  { date: "2025.12.01", title: "医師/看護師採用情報を掲載しています" },
];

export default async function TopPage() {
  const cmsNews = await getNewsList(5).catch(() => []);
  const newsItems = cmsNews.length > 0 ? cmsNews : fallbackNews;
  return (
    <>
      <Header variant="top" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-visit.jpg"
              alt="訪問診療の様子"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 gradient-twilight opacity-70" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
            <p className="text-white/80 text-sm font-medium tracking-widest mb-4">
              横浜市瀬谷区の在宅医療・訪問診療・在宅緩和ケア
            </p>
            <h1 className="heading-hero text-white mb-6">
              瀬谷区の訪問診療・在宅医療<br />めぐみ在宅クリニック
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              横浜市瀬谷区を中心に、泉区・旭区・大和市へ訪問診療を行っています。
              24時間365日の緊急往診体制で、在宅緩和ケア・在宅看取りまで一貫して支えます。
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
              description="在宅医療の流れ、費用、対応エリア、よくあるご質問をご案内します。"
              href="/clinic/first-visit"
              color="bg-navy-light"
              links={[
                { label: "はじめての方へ", href: "/clinic/first-visit" },
                { label: "費用について", href: "/clinic/fee" },
                { label: "対応エリア", href: "/clinic/services#area" },
                { label: "よくあるご質問", href: "/clinic/faq" },
              ]}
            />
            <NavCard
              icon="🤝"
              title="医療機関・連携先の方"
              description="患者さまのご紹介の手順、連携窓口のご案内です。"
              href="/clinic/partnership"
              color="bg-dawn-light"
              links={[
                { label: "連携のご案内", href: "/clinic/partnership" },
                { label: "診療案内", href: "/clinic/services" },
                { label: "よくあるご質問", href: "/clinic/faq" },
                { label: "お問い合わせ", href: "/clinic/contact" },
              ]}
            />
            <NavCard
              icon="🎓"
              title="見学・研修をお考えの方"
              description="緩和ケアの学びの場として、見学プログラム・研修をご案内します。"
              href="/concept/training"
              color="bg-twilight-light"
              links={[
                { label: "見学・研修のご案内", href: "/concept/training" },
                { label: "院長・コンセプト", href: "/concept/about" },
                { label: "スタッフ紹介", href: "/clinic/staff" },
                { label: "お問い合わせ", href: "/clinic/contact" },
              ]}
            />
            <NavCard
              icon="👥"
              title="一緒に働きたい方"
              description="医師・看護師・コメディカルスタッフの採用情報をご案内します。"
              href="/clinic/recruit"
              color="bg-sunrise-light"
              links={[
                { label: "採用情報", href: "/clinic/recruit" },
                { label: "スタッフ紹介", href: "/clinic/staff" },
                { label: "診療案内", href: "/clinic/services" },
                { label: "お問い合わせ", href: "/clinic/contact" },
              ]}
            />
            <NavCard
              icon="🎤"
              title="講演・執筆を依頼したい方"
              description="院長の講演テーマ・実績、ご依頼方法をご案内します。"
              href="/concept/lecture"
              color="bg-twilight-light"
              links={[
                { label: "講演・執筆依頼", href: "/concept/lecture" },
                { label: "著書・メディア", href: "/concept/books" },
                { label: "院長・コンセプト", href: "/concept/about" },
                { label: "お問い合わせ", href: "/clinic/contact" },
              ]}
            />
          </div>
        </section>

        {/* お知らせ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <h2 className="text-xl font-bold mb-4">お知らせ</h2>
          <div className="divide-y divide-gray-200 bg-white rounded-2xl overflow-hidden border border-gray-100">
            <div className="px-6 py-4 bg-navy-light/50 hover:bg-navy-light transition-colors">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-sunrise font-bold shrink-0">重要</span>
                <a
                  href="/documents/basic-fee-list.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy font-medium hover:underline"
                >
                  当院が届け出ている基本診療料・特掲診療料一覧（PDF）
                </a>
              </div>
            </div>
            {newsItems.map((item, i) => (
              <div key={i} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-baseline gap-4">
                  <time className="text-xs text-text-muted shrink-0 tabular-nums">{item.date}</time>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-navy transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{item.title}</p>
                  )}
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
                <p className="text-white/70 text-sm">在宅医療チームの一員として働きませんか。</p>
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
                description="日中・夜間・休日問わず医師が、いつでも対応します。"
              />
              <StrengthCard
                title="継続性のある診療"
                description="医師・全てのスタッフで、電子カルテで情報共有を行い、途切れなく安心して診療が受けられる体制をとっています。"
              />
              <StrengthCard
                title="3名体制の訪問"
                description="医師・看護師（またはサポーター）・ドライバーの3名体制で訪問し、手厚い処置と相談しやすい環境をつくります。"
              />
              <StrengthCard
                title="交通費無料"
                description="当院では訪問診療時の交通費をいただいておりません。金銭面も安心して在宅医療を続けられる環境を整えています。"
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[75%_center]"
                />
              </div>
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
                <p className="text-sm">
                  〒246-0037<br />
                  神奈川県横浜市瀬谷区橋戸2-4-3
                </p>
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
  links,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
  links?: { label: string; href: string }[];
}) {
  if (links && links.length > 0) {
    return (
      <div
        className={`${color} rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col`}
      >
        <span className="text-3xl mb-4 block">{icon}</span>
        <Link href={href} className="group">
          <h3 className="font-bold text-lg mb-2 group-hover:text-navy transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-text-secondary mb-4 min-h-[2.75rem]">{description}</p>
        <ul className="mt-auto space-y-2 border-t border-white/60 pt-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-navy font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>→</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
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
