export const SITE_NAME = "めぐみ在宅クリニック";
export const SITE_DESCRIPTION =
  "横浜市瀬谷区の在宅医療・訪問診療・往診クリニック。瀬谷駅徒歩9分。24時間365日対応。";
export const SITE_URL = "https://www.megumizaitaku.jp";

export const CLINIC_INFO = {
  name: "めぐみ在宅クリニック",
  address: "〒246-0037 神奈川県横浜市瀬谷区橋戸2-4-3",
  tel: "045-300-6630",
  fax: "045-300-6631",
  telPlanning: "045-300-6630",
  hours: "月〜金 9:00〜17:00",
  established: 2006,
  areas: ["瀬谷区全般", "泉区（一部）", "旭区（一部）", "大和市（一部）"],
  access: "相鉄線 瀬谷駅より徒歩9分",
  outpatient: {
    general: "月曜・木曜 午前（受付 8:45〜12:00）",
    palliative: "月曜・火曜・木曜 午前（予約制）",
  },
} as const;

export const DIRECTOR = {
  name: "小澤竹俊",
  nameEn: "Taketoshi Ozawa",
  title: "院長",
  birthYear: 1963,
  specialty: [
    "総合内科専門医（日本内科学会）",
    "緩和医療専門医・指導医（日本緩和医療学会）",
    "認定指導医（日本在宅医療連合学会）",
  ],
  career: [
    "1987年 東京慈恵会医科大学医学部卒業",
    "1991年 山形大学大学院医学研究科博士課程修了",
    "救命救急センター・農村医療に従事",
    "1994年 横浜甦生病院内科・ホスピス勤務",
    "1996年 ホスピス病棟長",
    "2006年 めぐみ在宅クリニック開院・院長",
    "2015年 一般社団法人エンドオブライフ・ケア協会設立・代表理事",
  ],
  activities: [
    "2000年より「いのちの授業」を全国展開",
    "TEDxTokyo登壇",
    "NHK「プロフェッショナル 仕事の流儀」出演",
    "テレビ東京「主治医が見つかる診療所」出演",
    "日本テレビ「世界一受けたい授業」出演",
  ],
} as const;

export const VICE_DIRECTOR = {
  name: "岩渕敬介",
  nameEn: "Keisuke Iwabuchi",
  title: "副院長",
  description:
    "日常的な訪問診療・運営管理を担当。新規患者の受け入れ調整・スタッフ育成も担う。",
} as const;

export const NAV_CLINIC = [
  { label: "診療案内", href: "/clinic/services" },
  { label: "はじめての方へ", href: "/clinic/first-visit" },
  { label: "費用について", href: "/clinic/fee" },
  { label: "よくあるご質問", href: "/clinic/faq" },
  { label: "スタッフ紹介", href: "/clinic/staff" },
  { label: "ご遺族の方へ", href: "/clinic/grief" },
  { label: "採用情報", href: "/clinic/recruit" },
  { label: "医療機関・介護事業所の方へ", href: "/clinic/partnership" },
  { label: "お問い合わせ", href: "/clinic/contact" },
] as const;

export const NAV_CONCEPT = [
  { label: "院長・コンセプト", href: "/concept/about" },
  { label: "ユニバーサル・ホスピスマインド", href: "/concept/philosophy" },
  { label: "緩和ケアとは", href: "/concept/palliative-care" },
  { label: "見学・研修", href: "/concept/training" },
  { label: "講演・執筆依頼", href: "/concept/lecture" },
  { label: "著書・メディア", href: "/concept/books" },
] as const;
