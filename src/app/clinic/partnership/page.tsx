import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CLINIC_INFO } from "@/lib/constants";
import { staffMembers as fallbackStaff } from "@/data/staff";
import { getStaffList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "医療機関・介護事業所の方へ｜訪問診療の連携｜瀬谷区",
  description:
    "医療機関・ケアマネジャーの皆さまへ。横浜市瀬谷区のめぐみ在宅クリニックへの患者ご紹介案内。在宅緩和ケア・退院後の訪問診療・緊急往診24時間対応。土曜訪問可。",
};

export const revalidate = 60;

export default async function PartnershipPage() {
  const cmsStaff = await getStaffList().catch(() => []);
  const staffMembers = cmsStaff.length > 0
    ? cmsStaff.map((s) => {
        const fb = fallbackStaff.find((f) => f.name === s.name);
        if (!fb) return s;
        return { ...s, hasPhoto: s.photoUrl ? true : (fb.hasPhoto || false), photoFile: s.photoUrl ? undefined : fb.photoFile, description: s.description || fb.description };
      })
    : fallbackStaff;
  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "医療機関・介護事業所の方へ" },
      ]} />
      <PageHeader
        title="医療機関・介護事業所の皆さまへ"
        subtitle="患者さんのご紹介・地域連携のご案内"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* イントロ */}
        <section className="mb-16">
          <p className="text-text-secondary leading-relaxed mb-4">
            めぐみ在宅クリニックは、2006年の開院以来20年にわたり、
            地域の病院・訪問看護ステーション・ケアマネジャー・介護事業所の皆さまとの
            連携を大切にしてまいりました。
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            「通院が困難になった」「退院後もご自宅で療養を続けたい」「終末期をご自宅で過ごしたい」
            ——そうした患者さんやご家族のご希望に、チーム一丸で応えます。
          </p>
          <p className="text-text-secondary leading-relaxed">
            「家に帰りたい」という患者さんの思いに寄り添うクリニックです。
            患者さんのご紹介は地域連携室にて承っております。
          </p>
        </section>

        {/* 対応可能な患者さん */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            ご紹介いただける患者さん
          </h2>
          <p className="text-text-secondary text-sm mb-6">
            以下のような方のご紹介を承っております。対応の可否はお気軽にお電話でご相談ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "通院が困難になった方（加齢・障害・疾病等）",
              "退院後にご自宅での療養を希望される方",
              "がん終末期の在宅緩和ケアを希望される方",
              "神経難病（ALS・パーキンソン病等）の方",
              "認知症でご自宅での生活を続けたい方",
              "人工呼吸器・在宅酸素・経管栄養等の管理が必要な方",
              "褥瘡管理・点滴・注射等の処置が必要な方",
              "ご自宅での看取りを希望されるご本人・ご家族",
            ].map((item) => (
              <div
                key={item}
                className="bg-warm-gray rounded-lg px-4 py-3 text-sm text-text-secondary flex items-start gap-2"
              >
                <span className="text-navy shrink-0">●</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-4">
            ※ 対応エリア：{CLINIC_INFO.areas.join("・")}（クリニックから原則5km以内）。
          </p>
        </section>

        {/* ご紹介の流れ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            ご紹介の流れ
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "お電話でご連絡",
                desc: "地域連携室にお電話ください。患者さんの状況をお伺いし、対応可否をお伝えいたします。",
                detail: "電話：045-300-6630（月〜金 9:00〜17:00）",
              },
              {
                step: "2",
                title: "患者情報の共有",
                desc: "病名・ADL・現在の治療内容・療養場所の希望・ご家族の状況等をお伝えください。紹介状（診療情報提供書）はFAXまたは郵送で承ります。",
                detail: "FAX：045-300-6631",
              },
              {
                step: "3",
                title: "初回訪問日の調整",
                desc: "できる限り迅速に初回訪問を調整いたします。緊急性の高い場合は最優先で対応します。",
                detail: null,
              },
              {
                step: "4",
                title: "診療開始・経過共有",
                desc: "定期訪問を開始します。診療経過は紹介元の先生方、ケアマネジャー、訪問看護ステーション等と適宜共有いたします。",
                detail: null,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </span>
                <div>
                  <p className="font-bold text-navy">{item.title}</p>
                  <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                  {item.detail && (
                    <p className="text-xs text-twilight font-medium mt-1">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 当院の診療体制 */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            当院の診療体制
          </h2>
          <p className="text-text-secondary text-sm mb-6">
            ご紹介いただいた患者さんを安心してお任せいただけるよう、以下の体制を整えています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "24時間365日の緊急往診",
                desc: "当院では24時間365日医師が対応できる体制をとっております。日中・夜間・休日問わず、必要時緊急往診いたします。",
              },
              {
                title: "継続性のある診療",
                desc: "原則主治医担当制です。当院では電子カルテ情報共有を行い、途切れなく継続性のある診療を行います。",
              },
              {
                title: "日中3名体制の訪問",
                desc: "医師・看護師（またはサポーター）・ドライバーの3名で訪問します。患者さん、ご家族に寄り添い、丁寧な診療を行います。",
              },
              {
                title: "多数の専門医が在籍",
                desc: "当院は緩和医療学会・緩和医療専門医・認定医をはじめ、内科、麻酔科、家庭医など様々な専門分野で活躍する医師が、複数在籍しています。",
              },
              {
                title: "幅広い医療行為に対応",
                desc: "人工呼吸器・CPAP・在宅酸素・胃瘻/経管栄養・中心静脈栄養・褥瘡管理・各種注射等に対応。詳細はお問い合わせください。",
              },
              {
                title: "居宅中心の方針",
                desc: "施設ではなく居宅（ご自宅）中心の訪問診療を基本方針としています。「家に帰りたい」という患者さんの希望に寄り添います。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-light rounded-xl p-5">
                <h3 className="font-bold text-navy text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ケアマネジャー・介護事業所の方へ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            ケアマネジャー・介護事業所の皆さまへ
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            担当されている利用者さまの訪問診療についてのご相談も承っております。
            以下のような場合はお気軽にご連絡ください。
          </p>
          <ul className="space-y-2 text-sm text-text-secondary mb-6">
            {[
              "通院が困難になり、訪問診療の導入を検討されている場合",
              "現在の訪問診療から当院に変更を検討される場合",
              "終末期の在宅看取りについてご相談されたい場合",
              "サービス担当者会議への医師の出席を希望される場合",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-navy shrink-0">●</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary text-sm mb-4">
            居宅療養管理指導のもと、ケアマネジャーの皆さまとの情報共有・連携を重視しています。
            診療内容や患者さんの状態変化について、適時ご報告いたします。
          </p>
          <div className="bg-navy-light rounded-xl p-5">
            <h3 className="font-bold text-navy text-sm mb-2">スタッフ研修のご案内</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              当院では、介護スタッフの皆さまを対象とした研修（看取りケア・緩和ケア・コミュニケーション等）も承っております。
              ご希望の方はお気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* 病院連携担当者の方へ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            病院連携担当者の皆さまへ
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            がん末期・終末期の患者さんの在宅移行をご検討の際は、ぜひ当院にご相談ください。
            以下の体制で、退院後の在宅療養を支えます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "緩和医療専門医・指導医が在籍",
              "24時間365日の緊急往診体制",
              "できる限り迅速に初回訪問を調整",
              "限られた時間でも在宅移行を支援",
              "看取り後のグリーフケアまで対応",
            ].map((item) => (
              <div
                key={item}
                className="bg-navy-light rounded-lg px-4 py-3 text-sm text-navy font-medium flex items-start gap-2"
              >
                <span className="text-sunrise shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>

          <h3 className="font-bold text-navy text-sm mb-3">在籍医師の主な専門領域</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "緩和医療", "総合内科", "総合診療", "家庭医療",
              "麻酔科", "外科", "救急医学", "呼吸器内科",
              "リハビリテーション", "老年医学",
            ].map((spec) => (
              <span
                key={spec}
                className="bg-warm-gray text-text-secondary text-xs px-3 py-1.5 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            ※ 人工呼吸器・CPAP・在宅酸素・中心静脈栄養・経管栄養等の医療処置にも対応しています。
          </p>
        </section>

        {/* 関連ページ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            関連情報
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "診療案内・対応疾患", href: "/clinic/services" },
              { label: "費用について", href: "/clinic/fee" },
              { label: "スタッフ紹介", href: "/clinic/staff" },
              { label: "緩和ケアとは", href: "/concept/palliative-care" },
              { label: "グリーフサポート（ご遺族の方へ）", href: "/clinic/grief" },
              { label: "よくあるご質問", href: "/clinic/faq" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-warm-gray rounded-lg px-5 py-4 text-sm font-medium text-navy hover:bg-navy-light transition-colors flex items-center justify-between group"
              >
                {item.label}
                <span className="text-text-muted group-hover:text-navy transition-colors">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 地域連携室スタッフ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b-2 border-twilight">
            地域連携室スタッフ
          </h2>
          <p className="text-text-secondary text-sm mb-6">
            ご紹介・ご相談の窓口となるスタッフをご紹介します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {staffMembers
              .filter((s) => s.department === "地域連携室")
              .map((staff) => (
                <div
                  key={staff.name}
                  className="bg-warm-gray rounded-xl overflow-hidden flex gap-4 p-4"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
                    {(staff.photoFile || staff.photoUrl) ? (
                      <Image
                        src={staff.photoUrl || `/images/staff/${staff.photoFile}`}
                        alt={staff.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: staff.photoPosition || "center 20%" }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Image
                          src="/images/usagi-original.png"
                          alt="めぐみうさぎ"
                          width={40}
                          height={40}
                          className="object-contain opacity-30"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-sunrise font-medium">{staff.role}</p>
                    <p className="font-bold text-navy">{staff.name}</p>
                    {staff.description && (
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                        {staff.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/clinic/staff"
              className="text-sm text-navy font-medium hover:text-twilight transition-colors"
            >
              全スタッフの紹介を見る →
            </Link>
          </div>
        </section>

        {/* 連携窓口 CTA */}
        <section className="bg-navy-light rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">地域連携室</h2>
          <p className="text-text-secondary mb-2 text-sm">
            患者さんのご紹介・ご相談はこちらまでお気軽にご連絡ください
          </p>
          <a
            href={`tel:${CLINIC_INFO.tel}`}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-dark transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {CLINIC_INFO.tel}
          </a>
          <p className="text-sm text-text-muted mt-3">
            月〜金 9:00〜17:00
          </p>
          <p className="text-sm text-text-muted mt-1">
            FAX: {CLINIC_INFO.fax}（紹介状・診療情報提供書の送付先）
          </p>
        </section>
      </div>
    </>
  );
}
