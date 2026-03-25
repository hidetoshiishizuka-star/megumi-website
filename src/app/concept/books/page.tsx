import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "著書・メディア",
  description: "院長・小澤竹俊の著書一覧とメディア掲載実績。",
};

// TODO: microCMS連携後は動的に取得
const books = [
  { title: "めぐみ在宅クリニック式 ケアの教科書", year: "" },
  { title: "死を前にした人にあなたは何ができますか?", year: "" },
  { title: "苦しむ患者から逃げない", year: "" },
  { title: "今日が人生最後の日だと思って生きなさい", year: "" },
];

const media = [
  "NHK「プロフェッショナル 仕事の流儀」",
  "テレビ東京「主治医が見つかる診療所」",
  "日本テレビ「世界一受けたい授業」",
  "TBS「ゴールデンアイ」",
  "NHK BS「偉大なる人生の先輩SP」",
  "朝日新聞・読売新聞・毎日新聞・日経新聞・産経新聞",
  "週刊朝日・週刊現代",
  "TED×Tokyo",
];

export default function BooksPage() {
  return (
    <>
      <PageHeader title="著書・メディア" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            著書
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {books.map((book) => (
              <div
                key={book.title}
                className="flex gap-4 bg-warm-gray rounded-xl p-5"
              >
                <div className="w-20 h-28 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-2xl">
                  📖
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-snug mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-text-muted">小澤竹俊 著</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-4">
            ほか著書多数。microCMS連携後に書影・購入リンクを掲載予定。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            メディア掲載
          </h2>
          <div className="space-y-3">
            {media.map((item) => (
              <div
                key={item}
                className="bg-navy-light rounded-lg px-5 py-3 text-sm text-text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
