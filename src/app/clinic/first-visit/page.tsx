import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MedicalSupervision from "@/components/ui/MedicalSupervision";
import { CLINIC_INFO } from "@/lib/constants";
import { staffMembers as fallbackStaff } from "@/data/staff";
import { getStaffList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "はじめての方へ｜瀬谷区の訪問診療の流れ",
  description:
    "在宅医療・訪問診療をご検討中の方へ。横浜市瀬谷区のめぐみ在宅クリニックが訪問診療開始までの流れをわかりやすくご説明します。瀬谷駅徒歩9分。まずはお電話ください。",
};

export const revalidate = 60;

export default async function FirstVisitPage() {
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
          { label: "はじめての方へ" },
        ]} />
        {/* Hero */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">First Visit</p>
            <h1 className="heading-hero text-white mb-6">はじめての方へ</h1>
            <p className="subheading text-white/90">
              在宅医療をご検討中の方へ、わかりやすくご説明します
            </p>
          </div>
        </section>

        {/* 訪問診療の写真 */}
        <ScrollReveal>
          <section className="max-w-[var(--content-wide)] mx-auto px-4 sm:px-6 -mt-8 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9] relative">
              <Image
                src="/images/visit-care.jpg"
                alt="訪問診療の様子 — ご自宅で安心して療養いただけます"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1120px) 100vw, 1120px"
                priority
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="max-w-[var(--content-narrow)] mx-auto px-4 sm:px-6 py-12">
          {/* こんな方が対象です */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">
                このような方々が在宅医療の対象です
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "がんの療養で自宅を希望される方",
                  "慢性疾患・神経難病をお持ちの方",
                  "退院後、ご自宅での医療継続が必要な方",
                  "通院が難しくなってきた方",
                  "お一人暮らしで医療の不安がある方",
                ].map((item, i) => (
                  <ScrollReveal key={item} delay={i * 80}>
                    <div className="flex items-start gap-3 bg-navy-light rounded-lg p-4">
                      <span className="text-navy text-lg mt-0.5">✓</span>
                      <span className="text-sm">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 訪問診療開始までの流れ */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-6">
                訪問診療開始までの流れ
              </h2>

              {/* チーム訪問写真 */}
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7] relative">
                <Image
                  src="/images/team-visit.jpg"
                  alt="3名体制でのチーム訪問 — 医師・看護師（またはサポーター）・ドライバーがご自宅に伺います"
                  fill
                  className="object-cover"
                  sizes="740px"
                />
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "まずはお電話ください",
                    description:
                      "地域連携室までお電話ください。ご本人やご家族の状況をお伺いし、対応可能かお伝えします。ケアマネジャー、病院の地域連携室などの、担当者の皆様からのご連絡もお受けします。",
                  },
                  {
                    step: "2",
                    title: "初回訪問の日程調整",
                    description:
                      "状況をお伺いした上で、初回訪問の日程を調整します。緊急性が高い場合は、できるだけ早急に対応いたします。",
                  },
                  {
                    step: "3",
                    title: "初回訪問・診療開始",
                    description:
                      "医師がご自宅にお伺いし、診察を行います。今後の治療方針やケアの内容についてご相談します。",
                  },
                  {
                    step: "4",
                    title: "定期訪問の開始",
                    description:
                      "月2回または月1回の定期訪問を基本に（症状によって異なります）、状態に応じて頻度を調整します。24時間365日、緊急往診にも対応します。",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.step} delay={i * 80}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* お電話時にお伝えいただきたいこと */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-4">
                お電話時に<br />お伝えいただきたいこと
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6 italic">
                あなたが今、困っていること、悩んでいることを、まずそのままお聞かせください。私たちはその声を大切に受けとめます。
              </p>
              <div className="bg-warm-gray rounded-xl p-6 space-y-3 text-sm text-text-secondary">
                <p>① ご本人・ご家族のお名前・ご連絡先</p>
                <p>② 現在の状況（病名・食事量・動ける範囲・起きている時間の目安・ここ1か月の変化）</p>
                <p>③ 今、困っていること、悩んでいること</p>
                <p>④ 療養場所のご希望（ご自宅・施設など）</p>
                <p>⑤ 希望されるケアの内容</p>
                <p className="text-text-muted pt-2">
                  ※ すべてがわからなくても大丈夫です。お気軽にご相談ください。
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* クリニック写真 */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="rounded-2xl overflow-hidden aspect-[16/7] relative">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="めぐみ在宅クリニック"
                  fill
                  className="object-cover"
                  sizes="740px"
                />
              </div>
              <p className="text-xs text-text-muted text-center mt-2">めぐみ在宅クリニック（横浜市瀬谷区）</p>
            </section>
          </ScrollReveal>

          {/* 地域連携室スタッフ */}
          <ScrollReveal>
            <section className="mb-16">
              <h2 className="heading-section text-navy mb-4">
                ご相談窓口 — 地域連携室
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                まずはお気軽にお電話ください。地域連携室のスタッフが対応いたします。
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
                          <div className="w-full h-full bg-gray-200" />
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
            </section>
          </ScrollReveal>

          <MedicalSupervision lastUpdated="2026-04-07" />

          {/* CTA */}
          <ScrollReveal>
            <section className="bg-navy-light rounded-2xl p-8 text-center mt-16">
              <h2 className="heading-section text-navy mb-3">ご相談はお気軽にご連絡ください</h2>
              <p className="text-text-secondary mb-6 text-sm">
                地域連携室が対応いたします（月〜金 9時〜17時）
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a
                  href={`tel:${CLINIC_INFO.tel}`}
                  className="btn-pill btn-pill-primary inline-flex items-center justify-center gap-2 text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {CLINIC_INFO.tel}
                </a>
                <Link
                  href="/clinic/contact"
                  className="btn-pill btn-pill-secondary inline-flex items-center justify-center gap-2 text-lg"
                >
                  お問い合わせフォーム
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <Link href="/clinic/fee" className="btn-pill btn-pill-secondary">
                  費用について →
                </Link>
                <Link href="/clinic/faq" className="btn-pill btn-pill-secondary">
                  よくあるご質問 →
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>
    </>
  );
}
