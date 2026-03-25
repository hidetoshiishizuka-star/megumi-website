import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "緩和ケアとは",
  description: "めぐみ在宅クリニックが実践する緩和ケア・ホスピスマインドについて。",
};

export default function PalliativeCarePage() {
  return (
    <>
      <PageHeader
        title="緩和ケアとは"
        subtitle="苦しむ人の傍らに寄り添い、その人らしく生きることを支える"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-forest">
            ホスピスマインドとは
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            当院が大切にしている「ホスピスマインド」とは、
            医療の技術だけではなく、苦しむ人への寄り添い方そのものを指します。
          </p>
          <p className="text-text-secondary leading-relaxed">
            本人、家族、そして支援者全員が「穏やか」であること。
            それが私たちの目指す援助のあり方です。
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-forest">
            苦しみへのアプローチ
          </h2>
          <div className="bg-forest-light rounded-2xl p-8 mb-6">
            <p className="text-center font-bold text-lg mb-2">
              苦しみ ＝ 希望と現実のギャップ
            </p>
            <p className="text-center text-text-secondary text-sm">
              この定義から出発し、解決できる苦しみと解決が難しい苦しみに分けて対応します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-warm-gray rounded-xl p-6">
              <h3 className="font-bold mb-3 text-forest">解決できる苦しみ</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>痛みの緩和（薬物療法・処置）</li>
                <li>介護保険制度を利用したサービス導入</li>
                <li>希望する場所での療養選択</li>
                <li>身体的・精神的な苦痛の軽減</li>
              </ul>
            </div>
            <div className="bg-warm-gray rounded-xl p-6">
              <h3 className="font-bold mb-3 text-coral">解決が難しい苦しみ</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>「何のために生きているかわからない」</li>
                <li>「家族に迷惑をかけたくない」</li>
                <li>「孫の成長を見届けられない」</li>
                <li>スピリチュアルな苦しみ</li>
              </ul>
              <p className="text-xs text-text-muted mt-3">
                → 「わかってくれる人がいる」ことが、この苦しみを和らげます
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-forest">
            当院の特色あるケア
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-forest pl-6">
              <h3 className="font-bold mb-2">ディグニティセラピー</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                患者さんの人生の中で大切にしてきたこと、伝えたいことを語っていただき、
                文書として残すプログラムです。その人の「尊厳」を形にします。
              </p>
            </div>
            <div className="border-l-4 border-forest pl-6">
              <h3 className="font-bold mb-2">グリーフケア</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                大切な方を亡くされたご遺族に対し、専任のグリーフカウンセラーが
                「わかちあいの会」や個別面談を通じてサポートします。
              </p>
            </div>
            <div className="border-l-4 border-forest pl-6">
              <h3 className="font-bold mb-2">援助的コミュニケーション</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                反復と沈黙を活用した傾聴。相手の苦しみをキャッチし、
                「わかってくれる人」になるためのコミュニケーション技法を実践しています。
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/concept/training"
            className="inline-flex items-center justify-center gap-2 bg-forest text-white px-8 py-4 rounded-lg font-medium hover:bg-forest-dark transition-colors"
          >
            緩和ケアを学ぶ →
          </Link>
          <Link
            href="/clinic/grief"
            className="inline-flex items-center justify-center gap-2 bg-white text-forest border-2 border-forest px-8 py-4 rounded-lg font-medium hover:bg-forest-light transition-colors"
          >
            ご遺族の方へ →
          </Link>
        </div>
      </div>
    </>
  );
}
