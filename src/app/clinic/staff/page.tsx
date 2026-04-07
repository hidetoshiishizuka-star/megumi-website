import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { staffMembers, departments } from "@/data/staff";

export const metadata: Metadata = {
  title: "スタッフ紹介｜めぐみ在宅クリニック瀬谷区",
  description:
    "めぐみ在宅クリニックの医師・看護師・スタッフをご紹介。緩和医療専門医の院長を中心に、チームで在宅医療を支えています。横浜市瀬谷区。",
};

export default function StaffPage() {
  return (
    <>
        <Breadcrumb items={[
          { label: "ホーム", href: "/" },
          { label: "スタッフ紹介" },
        ]} />
        {/* ヒーロー */}
        <section className="gradient-night text-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="overline text-sunrise-light mb-6">Staff</p>
            <h1 className="heading-hero text-white mb-6">スタッフ紹介</h1>
            <p className="subheading text-white/90">
              チーム一丸で在宅医療を支えています
            </p>
          </div>
        </section>

        {/* 部門ごとにスタッフ表示 */}
        {departments.map((dept) => {
          const members = staffMembers.filter((m) => m.department === dept);
          if (members.length === 0) return null;

          return (
            <section key={dept} className="py-16 md:py-24 border-b border-gray-100 last:border-0">
              <div className="max-w-[var(--content-wide)] mx-auto px-6">
                <ScrollReveal>
                  <h2 className="heading-section text-navy mb-10">{dept}</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((staff, i) => (
                    <ScrollReveal key={staff.name} delay={i * 60}>
                      <div className="rounded-3xl bg-warm-gray overflow-hidden">
                        {/* 写真エリア */}
                        <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
                          {staff.photoFile ? (
                            <Image
                              src={`/images/staff/${staff.photoFile}`}
                              alt={staff.name}
                              fill
                              className="object-cover"
                              style={{
                                objectPosition: staff.photoPosition || "center 25%",
                                transform: `scale(${staff.photoScale || 1.5})`,
                                transformOrigin: "center top",
                              }}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center">
                              <Image
                                src="/images/usagi-original.png"
                                alt="めぐみうさぎ"
                                width={160}
                                height={160}
                                className="object-contain opacity-30"
                              />
                            </div>
                          )}
                        </div>

                        {/* 情報 */}
                        <div className="p-6">
                          <p className="text-xs font-medium text-sunrise mb-1">{staff.role}</p>
                          <h3 className="text-lg font-semibold text-navy mb-1">{staff.name}</h3>
                          {staff.nameKana && (
                            <p className="text-xs text-text-muted mb-2">{staff.nameKana}</p>
                          )}
                          {staff.specialty && (
                            <p className="text-xs text-twilight font-medium mb-2">
                              専門：{staff.specialty}
                            </p>
                          )}
                          {staff.certifications && staff.certifications.length > 0 && (
                            <div className="mb-2">
                              <p className="text-[10px] text-text-muted font-medium mb-1">認定資格</p>
                              <p className="text-[11px] text-text-secondary leading-relaxed">
                                {staff.certifications.join(" / ")}
                              </p>
                            </div>
                          )}
                          {staff.societies && staff.societies.length > 0 && (
                            <div className="mb-2">
                              <p className="text-[10px] text-text-muted font-medium mb-1">所属学会</p>
                              <p className="text-[11px] text-text-secondary leading-relaxed">
                                {staff.societies.join("、")}
                              </p>
                            </div>
                          )}
                          {staff.interests && staff.interests.length > 0 && (
                            <div className="mb-2">
                              <p className="text-[10px] text-text-muted font-medium mb-1">興味ある分野</p>
                              <p className="text-[11px] text-text-secondary leading-relaxed">
                                {staff.interests.join("、")}
                              </p>
                            </div>
                          )}
                          {staff.description && (
                            <p className="text-sm text-text-secondary leading-relaxed mt-3">
                              {staff.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* 訪問の3名体制 */}
        <section className="bg-navy text-white py-16 md:py-24">
          <div className="max-w-[var(--content-narrow)] mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="heading-section text-white mb-4">
                  日中の訪問は3名体制
                </h2>
                <p className="subheading text-white/80">
                  医師・看護師（またはサポーター）・ドライバーの<br />3名でご自宅に伺います
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "医師", desc: "診察・処方・治療方針の決定" },
                { title: "看護師（またはサポーター）", desc: "処置・バイタル確認・療養相談" },
                { title: "ドライバー", desc: "運転・物品搬入・駐車場確保" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="rounded-3xl bg-white/5 p-8 text-center">
                    <h3 className="text-xl font-semibold text-sunrise-light mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
