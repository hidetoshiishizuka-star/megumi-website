import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getNewsList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ｜めぐみ在宅クリニック",
  description: "めぐみ在宅クリニックからのお知らせ。診療・採用・研修・メディア掲載情報を掲載しています。",
};

export const revalidate = 60;

export default async function NewsPage() {
  const newsList = await getNewsList(50).catch(() => []);

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "お知らせ" },
      ]} />
      <PageHeader title="お知らせ" subtitle="クリニックからの最新情報" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {newsList.length > 0 ? (
          <div className="space-y-4">
            {newsList.map((item, i) => (
              <article
                key={i}
                className="border-b border-gray-200 pb-4"
              >
                <div className="flex items-center gap-3">
                  <time className="text-sm text-text-muted tabular-nums">{item.date}</time>
                  {item.category && (
                    <span className="text-xs bg-navy-light text-navy px-2 py-0.5 rounded-full font-medium">
                      {item.category}
                    </span>
                  )}
                </div>
                <h2 className="font-medium mt-1 text-text-primary">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h2>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-muted py-12">現在、お知らせはありません。</p>
        )}
      </div>
    </>
  );
}
