import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "めぐみ在宅クリニックからのお知らせ。",
};

// TODO: microCMS連携後は動的に取得
const news = [
  {
    date: "2026.02.05",
    title: "2月オンライン・イベントのお知らせ",
  },
  {
    date: "2025.12.17",
    title: "小澤院長メディア掲載＜専門誌・医療関係＞を更新しました",
  },
  {
    date: "2025.12.01",
    title: "医師/看護師採用情報を掲載しています",
  },
  {
    date: "2025.11.15",
    title: "めぐみ在宅クリニックでは特定健診を実施しております（予約制）",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader title="お知らせ" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4">
          {news.map((item, i) => (
            <article
              key={i}
              className="border-b border-gray-200 pb-4"
            >
              <time className="text-sm text-text-muted">{item.date}</time>
              <h2 className="font-medium mt-1 hover:text-forest cursor-pointer">
                {item.title}
              </h2>
            </article>
          ))}
        </div>
        <p className="text-sm text-text-muted mt-8 text-center">
          ※ microCMS連携後、お知らせはクリニック側で更新可能になります。
        </p>
      </div>
    </>
  );
}
