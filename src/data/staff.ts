export interface StaffMember {
  name: string;
  nameKana?: string;
  role: string;
  department: "マネジメント" | "医師" | "看護・サポーター" | "地域連携室" | "グリーフサポート";
  specialty?: string;
  certifications?: string[];
  societies?: string[];
  interests?: string[];
  description?: string;
  hasPhoto: boolean;
  photoFile?: string; // /images/staff/ 内のファイル名
  photoUrl?: string; // microCMS CDN の完全URL
  photoPosition?: string; // object-position の値（例: "center 30%"）
  photoScale?: number; // 拡大倍率（例: 1.8 = 180%）顔面積70%用
}

export const staffMembers: StaffMember[] = [
  // === マネジメント ===
  {
    name: "小澤竹俊",
    nameKana: "おざわ たけとし",
    role: "院長",
    department: "マネジメント",
    specialty: "緩和医療・総合内科",
    certifications: [
      "緩和医療専門医（日本緩和医療学会）",
      "総合内科専門医（日本内科学会）",
      "認定指導医（日本在宅医療連合学会）",
    ],
    description:
      "苦しんでいる人は、自分の苦しみをわかってくれる人がいると嬉しい。その信念のもと、在宅緩和ケアに取り組んでいます。",
    hasPhoto: true,
    photoFile: "director-portrait.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "岩渕敬介",
    nameKana: "いわぶち けいすけ",
    role: "副院長",
    department: "マネジメント",
    specialty: "総合診療",
    certifications: [
      "日本内科学会認定内科医",
      "総合内科専門医",
      "日本プライマリ・ケア学会認定医",
      "ICD制度協議会認定インフェクションコントロールドクター",
    ],
    societies: [
      "日本内科学会",
      "日本プライマリ・ケア連合学会",
      "日本感染症学会",
      "日本在宅医療連合学会",
      "日本緩和医療学会",
    ],
    interests: ["在宅医療"],
    description:
      "川崎市出身。2004年横浜市立大学医学部卒業。神奈川県足柄上郡・北海道砂川市など、地域医師が少ない地域で18年間勤務。",
    hasPhoto: true,
    photoFile: "20230502.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "石塚美絵",
    nameKana: "いしづか みえ",
    role: "事務長",
    department: "マネジメント",
    hasPhoto: false,
  },

  // === 医師 ===
  {
    name: "津山梓",
    nameKana: "つやま あずさ",
    role: "常勤医師",
    department: "医師",
    specialty: "家庭医療",
    certifications: [
      "日本緩和医療学会認定医",
      "家庭医専門医・指導医",
      "認定内科医",
    ],
    societies: [
      "日本緩和医療学会",
      "プライマリ・ケア連合学会",
      "日本内科学会",
    ],
    interests: ["家庭医療", "在宅医療"],
    description:
      "横浜市出身。山口大学卒業後、家族ぐるみで診れる家庭医を目指す。",
    hasPhoto: true,
    photoFile: "20171128.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "今井洋史",
    nameKana: "いまい ひろふみ",
    role: "常勤医師",
    department: "医師",
    specialty: "麻酔科・重症心身障害児（障害者）",
    certifications: [
      "日本在宅医療連合学会認定専門医・認定指導医",
      "日本プライマリ・ケア連合学会認定指導医・代議員",
      "日本麻酔科学会麻酔科専門医",
      "日本緩和医療学会認定医",
    ],
    societies: [
      "日本在宅医学会",
      "日本プライマリ・ケア連合学会",
      "日本重症心身障害学会",
      "日本麻酔科学会",
      "日本緩和医療学会",
    ],
    interests: ["行政・地域・医療機関・診療所および患者さん御自宅との切れ目の無い連携構築"],
    description:
      "どんな病気であったとしても、安心して自宅で生活を送るため、豊富な経験をもとにお手伝いいたします。",
    hasPhoto: true,
    photoFile: "doc-3.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "町田雄樹",
    nameKana: "まちだ ゆうき",
    role: "非常勤医師",
    department: "医師",
    specialty: "在宅医療・緩和医療",
    societies: ["在宅医学会", "緩和医療学会"],
    hasPhoto: true,
    photoFile: "20171211.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "門田庸子",
    nameKana: "もんでん ようこ",
    role: "非常勤医師",
    department: "医師",
    specialty: "麻酔科、緩和ケア",
    certifications: ["麻酔科専門医"],
    societies: ["日本麻酔科学会"],
    interests: ["緩和ケア", "ペインクリニック", "アニマルセラピー"],
    hasPhoto: true,
    photoFile: "20171204.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "小菅宇之",
    nameKana: "こすげ たかゆき",
    role: "非常勤医師",
    department: "医師",
    specialty: "外科・救急医学",
    certifications: [
      "救急医学会認定医・指導医",
      "日本外科学会認定登録医",
    ],
    societies: ["日本救急医学会", "外科学会"],
    interests: ["病院前救急医療の改善"],
    description:
      "在宅医療と救急医学は表裏一体の関係。訪問診療患者の生活が全体的にレベルアップできることを目指します。",
    hasPhoto: true,
    photoFile: "20171212-4.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "太田一樹",
    nameKana: "おおた かずき",
    role: "非常勤医師（NSTチェアマン）",
    department: "医師",
    specialty: "内科学、脳卒中学、病態栄養学、老年医学",
    certifications: [
      "医学博士",
      "日本内科学会総合内科専門医",
      "日本脳卒中学会脳卒中専門医",
      "日本病態栄養学会病態栄養専門医・指導医",
      "日本病態栄養学会NSTコーディネーター",
      "日本医師会認定産業医",
    ],
    societies: [
      "日本内科学会",
      "日本脳卒中学会",
      "日本緩和医療学会",
      "日本病態栄養学会",
      "日本臨床栄養学会",
      "日本静脈経腸栄養学会",
    ],
    description:
      "脳卒中ほか各種神経疾患の急性期から在宅医療までの診療を実施。",
    hasPhoto: false,
  },
  {
    name: "諸冨伸夫",
    nameKana: "もろとみ のぶお",
    role: "非常勤医師",
    department: "医師",
    specialty: "リハビリテーション医学、在宅医療、心臓リハビリテーション",
    certifications: [
      "日本リハビリテーション医学会認定専門医・指導医",
      "心臓リハビリテーション指導医",
      "日本在宅医療連合会認定専門医・指導医",
      "医学博士",
    ],
    societies: [
      "日本リハビリテーション医学会",
      "日本心臓リハビリテーション医学会",
      "日本在宅医療連合学会",
    ],
    interests: ["心臓病の地域リハビリテーション"],
    hasPhoto: true,
    photoFile: "20190814-4.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "張秀一",
    nameKana: "ちょう ひでかず",
    role: "非常勤医師",
    department: "医師",
    specialty: "呼吸器内科、喘息・肺がん診療",
    certifications: [
      "日本呼吸器学会呼吸器専門医",
      "日本アレルギー学会アレルギー専門医",
      "日本内科学会内科認定医",
      "日本医師会認定産業医",
    ],
    societies: [
      "日本呼吸器学会",
      "日本アレルギー学会",
      "日本緩和医療学会",
      "日本喘息学会",
      "日本在宅医療連合学会",
    ],
    interests: ["緩和ケア・在宅医療"],
    description:
      "大学病院で新型コロナウィルス感染症診療や肺がん診療に携わってまいりました。",
    hasPhoto: true,
    photoFile: "20230425-1.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },

  {
    name: "米村るい",
    nameKana: "よねむら るい",
    role: "非常勤医師",
    department: "医師",
    hasPhoto: false,
  },
  {
    name: "郷佳洋",
    nameKana: "ごう よしひろ",
    role: "非常勤医師",
    department: "医師",
    hasPhoto: false,
  },
  {
    name: "本田有正",
    nameKana: "ほんだ ありまさ",
    role: "非常勤医師",
    department: "医師",
    hasPhoto: false,
  },

  // === 看護 ===
  {
    name: "洲濱良子",
    nameKana: "すはま りょうこ",
    role: "緩和ケア認定看護師",
    department: "看護・サポーター",
    description:
      "どなたでも明るく優しく安心して過ごせるよう、一緒に考えさせていただければと思います。",
    hasPhoto: false,
  },
  {
    name: "一瀬恭子",
    nameKana: "いちのせ きょうこ",
    role: "緩和ケア認定看護師",
    department: "看護・サポーター",
    certifications: ["一般社団法人日本グリーフケア協会 特級グリーフケアアドバイザー"],
    societies: ["日本緩和医療学会", "死の臨床研究会"],
    description:
      "ご本人とご家族が望む場所で安心して過ごせるようチームでサポートさせて頂きます。皆さんの大切にしたいことを是非お聞かせ下さい。",
    hasPhoto: false,
  },
  {
    name: "上田久子",
    nameKana: "うえだ ひさこ",
    role: "看護師",
    department: "看護・サポーター",
    description:
      "地域に密着した在宅医療に興味を持ち、丁寧な対応を心がけ、患者さんやご家族が穏やかに過ごせるよう支援いたします。",
    hasPhoto: true,
    photoFile: "nurse-2.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "佐藤郁恵",
    nameKana: "さとう いくえ",
    role: "看護師",
    department: "看護・サポーター",
    description:
      "在宅医療に関わってきて、患者さん、ご家族が在宅で穏やかに過ごせるようサポートいたします。",
    hasPhoto: true,
    photoFile: "20190826.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "島津綾子",
    nameKana: "しまづ あやこ",
    role: "診療サポーター",
    department: "看護・サポーター",
    description:
      "在宅医療に関わって5年。様々な問題に直面する患者さん、ご家族のお手伝いができればと思います。",
    hasPhoto: false,
  },
  {
    name: "伊東知子",
    nameKana: "いとう ともこ",
    role: "診療サポーター",
    department: "看護・サポーター",
    hasPhoto: true,
    photoFile: "20190814-3.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "久保田明日香",
    nameKana: "くぼた あすか",
    role: "看護師",
    department: "看護・サポーター",
    description:
      "先生方と患者さんの診察がスムーズに運ぶよう、お手伝いさせていただきます。",
    hasPhoto: true,
    photoFile: "20230306.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "片桐文",
    nameKana: "かたぎり ふみ",
    role: "看護師・認定心理士",
    department: "看護・サポーター",
    description:
      "患者さんとご家族の不安や苦痛に寄り添い、意思決定を支える看護師でありたいと思います。",
    hasPhoto: true,
    photoFile: "20231010.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },

  {
    name: "清田美香",
    nameKana: "きよた みか",
    role: "診療サポーター",
    department: "看護・サポーター",
    hasPhoto: false,
  },
  {
    name: "吉川美和",
    nameKana: "よしかわ みわ",
    role: "看護師",
    department: "看護・サポーター",
    hasPhoto: false,
  },
  {
    name: "出津多恵",
    nameKana: "いでづ たえ",
    role: "看護師",
    department: "看護・サポーター",
    hasPhoto: false,
  },

  // === 地域連携室 ===
  {
    name: "久保田明子",
    nameKana: "くぼた あきこ",
    role: "看護師",
    department: "地域連携室",
    description:
      "訪問診療に関する相談とディグニティセラピーを担当。住み慣れた場所での過ごしをお手伝いいたします。",
    hasPhoto: true,
    photoFile: "regional-cooperation-1.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "野場久美子",
    nameKana: "のば くみこ",
    role: "社会福祉士",
    department: "地域連携室",
    description:
      "患者さんが在宅生活を安心して過ごせるよう、お手伝いできればと思います。お気持ちに寄り添い、一緒に考えます。",
    hasPhoto: true,
    photoFile: "20230307.jpg",
    photoPosition: "center center",
    photoScale: 1,
  },
  {
    name: "村田英理子",
    nameKana: "むらた えりこ",
    role: "社会福祉士",
    department: "地域連携室",
    hasPhoto: false,
  },

  // === グリーフサポート ===
  {
    name: "加治陽子",
    nameKana: "かじ ようこ",
    role: "非常勤グリーフ・カウンセラー",
    department: "グリーフサポート",
    certifications: [
      "グリーフ・カウンセリング・センター認定グリーフカウンセラー",
      "一般社団法人日本グリーフケア協会1級グリーフケアアドバイザー",
      "一般社団法人グリーフサポートせたがや理事",
    ],
    description:
      "患者さんを亡くされたご家族のサポートを担当。亡くされた後も地域でサポートできる環境を目指します。",
    hasPhoto: false,
  },
];

export const departments = ["マネジメント", "医師", "看護・サポーター", "地域連携室", "グリーフサポート"] as const;
