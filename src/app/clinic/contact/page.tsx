import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "めぐみ在宅クリニックへのお問い合わせ。診療・採用・研修・講演に関するご連絡先。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="お問い合わせ" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-text-secondary mb-10 leading-relaxed">
          お問い合わせは各目的に応じて、下記の通りお寄せください。
        </p>

        {/* 電話 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            お電話でのお問い合わせ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-navy-light rounded-xl p-6">
              <h3 className="font-bold mb-2">診療・採用について</h3>
              <a
                href={`tel:${CLINIC_INFO.tel}`}
                className="text-2xl font-bold text-navy hover:text-navy-dark"
              >
                {CLINIC_INFO.tel}
              </a>
              <p className="text-sm text-text-muted mt-2">
                地域連携室・採用係
                <br />
                月〜金 9:00〜17:00
              </p>
            </div>
            <div className="bg-navy-light rounded-xl p-6">
              <h3 className="font-bold mb-2">研修・講演・取材について</h3>
              <a
                href={`tel:${CLINIC_INFO.telPlanning}`}
                className="text-2xl font-bold text-navy hover:text-navy-dark"
              >
                {CLINIC_INFO.telPlanning}
              </a>
              <p className="text-sm text-text-muted mt-2">
                企画運営係
                <br />
                月〜金 9:00〜17:00
              </p>
            </div>
          </div>
        </section>

        {/* フォーム */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            メールでのお問い合わせ
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                ご用件 <span className="text-sunrise">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy">
                <option value="">選択してください</option>
                <option>診療について</option>
                <option>求人に関する問い合わせ</option>
                <option>研修会・勉強会について</option>
                <option>在宅医療・緩和ケアを学びたい</option>
                <option>講演依頼</option>
                <option>取材の申し込み</option>
                <option>その他</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  お名前 <span className="text-sunrise">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="例：山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  フリガナ <span className="text-sunrise">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="例：ヤマダ タロウ"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  メールアドレス <span className="text-sunrise">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  電話番号 <span className="text-sunrise">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                お問い合わせ内容 <span className="text-sunrise">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-navy text-white px-12 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </section>

        {/* アクセス */}
        <section>
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            アクセス
          </h2>
          <div className="bg-warm-gray rounded-xl p-6">
            <p className="font-bold mb-2">めぐみ在宅クリニック</p>
            <p className="text-sm text-text-secondary">{CLINIC_INFO.address}</p>
            <p className="text-sm text-text-muted mt-2">
              ※ 当院は在宅医療専門です。外来は月曜・木曜の午前のみです。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
