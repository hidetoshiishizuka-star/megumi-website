import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description: "めぐみ在宅クリニックの医師・スタッフをご紹介します。",
};

// TODO: microCMS連携後は動的に取得
// 副院長ヒアリング：看護師・事務の個人特定情報は出さない（ヘッドハンティングリスク）
// → 医師のみ個人名を掲載。その他は職種と人数で表現。

const doctors = [
  {
    name: "小澤竹俊",
    role: "院長",
    specialty: "緩和医療専門医・総合内科専門医",
    message:
      "苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい。その信念のもと、在宅緩和ケアに取り組んでいます。",
  },
  {
    name: "岩渕敬介",
    role: "副院長",
    specialty: "",
    message:
      "継続性のある在宅医療を大切に、顔の見える関係で患者さんとご家族を支えます。",
  },
  {
    name: "津山梓",
    role: "常勤医師",
    specialty: "",
    message: "",
  },
  {
    name: "今井洋史",
    role: "常勤医師",
    specialty: "",
    message: "",
  },
  {
    name: "栗田瑛里子",
    role: "常勤医師",
    specialty: "",
    message: "",
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHeader
        title="スタッフ紹介"
        subtitle="チーム一丸で在宅医療を支えています"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* 医師 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8 pb-2 border-b-2 border-forest">
            医師
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-4xl">
                  🐰
                </div>
                <div className="p-5">
                  <p className="text-xs text-forest font-medium mb-1">
                    {doc.role}
                  </p>
                  <h3 className="font-bold text-lg mb-1">{doc.name}</h3>
                  {doc.specialty && (
                    <p className="text-xs text-text-muted mb-2">
                      {doc.specialty}
                    </p>
                  )}
                  {doc.message && (
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {doc.message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-4">
            ほか非常勤医師が多数在籍しています。
          </p>
        </section>

        {/* チーム体制 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8 pb-2 border-b-2 border-forest">
            チーム体制
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "看護師",
                description:
                  "緩和ケア認定看護師を含む看護チームが、訪問診療に同行し、きめ細やかなケアを提供します。",
              },
              {
                title: "地域連携室",
                description:
                  "社会福祉士・看護師が在籍し、新規患者の受け入れ調整、地域の病院・訪問看護・ケアマネとの連携を行います。",
              },
              {
                title: "グリーフサポート",
                description:
                  "専任のグリーフカウンセラーが、大切な方を亡くされたご遺族の心のケアに対応しています。",
              },
              {
                title: "訪問診療サポーター",
                description:
                  "ドライバーを含むサポーターが訪問に同行。駐車場の確保、物品の運搬などを担います。",
              },
              {
                title: "医療事務",
                description:
                  "受付・請求業務を担当し、患者さまやご家族からのお電話にも対応しています。",
              },
              {
                title: "事務部",
                description:
                  "総務・経理を担当。クリニック全体の運営をバックオフィスから支えています。",
              },
            ].map((team) => (
              <div key={team.title} className="bg-warm-gray rounded-xl p-6">
                <h3 className="font-bold mb-2">{team.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 訪問の3名体制 */}
        <section className="bg-forest-light rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-4 text-center">
            訪問は3名体制で伺います
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <h3 className="font-bold">医師</h3>
              <p className="text-sm text-text-secondary mt-1">
                診察・処方・治療方針の決定
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">👩‍⚕️</div>
              <h3 className="font-bold">看護師</h3>
              <p className="text-sm text-text-secondary mt-1">
                処置・バイタル確認・療養相談
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚗</div>
              <h3 className="font-bold">ドライバー</h3>
              <p className="text-sm text-text-secondary mt-1">
                運転・物品搬入・駐車場確保
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
