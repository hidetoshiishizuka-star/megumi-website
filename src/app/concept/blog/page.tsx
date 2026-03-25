import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "コラム",
  description: "院長・小澤竹俊のコラム。緩和ケア・在宅医療の現場から。",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="コラム"
        subtitle="院長が綴る、緩和ケアと在宅医療の現場から"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center py-16">
          <div className="text-5xl mb-6">📝</div>
          <h2 className="text-xl font-bold mb-3">準備中です</h2>
          <p className="text-text-secondary">
            microCMS連携後、院長のコラムをこちらに掲載します。
            <br />
            月1〜2回の更新を予定しています。
          </p>
        </div>
      </div>
    </>
  );
}
