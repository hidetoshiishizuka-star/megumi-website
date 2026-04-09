---
name: megumi-website
description: めぐみ在宅クリニックのWEBサイト管理スキル。めぐみ在宅クリニック、めぐみ、megumi、メグミのサイト、クリニックのWEB、めぐみサイトに関する依頼で使用する。サイトの修正、デプロイ、microCMS管理、SEO対応、フィードバック対応、テスト実行など全般をカバー。「めぐみ」「クリニックのサイト」「WEBサイトを修正」「デプロイして」「スタッフを追加」「お知らせを更新」等のリクエストで発動する。
---

# めぐみ在宅クリニック WEBサイト管理

## プロジェクト基本情報

| 項目 | 値 |
|------|-----|
| プロジェクトパス | `/Users/ishizuka/Documents/megumi-website` |
| 技術スタック | Next.js 16 + Tailwind CSS 4 + Vercel + microCMS + Resend |
| 本番URL | https://megumi-website-xi.vercel.app |
| GitHub | https://github.com/hidetoshiishizuka-star/megumi-website |
| microCMS管理画面 | https://3gc6ro399e.microcms.io/ |
| microCMS Domain | `3gc6ro399e` |
| ドメイン | megumizaitaku.jp（さくらインターネット管理） |

## デプロイ方法

```bash
cd /Users/ishizuka/Documents/megumi-website
git add -A && git commit -m "変更内容" && git push origin main
```

- `git push origin main` で**自動デプロイ**（GitHub連携済み）
- ISR 60秒で**microCMSの更新が自動反映**（手動デプロイ不要）
- 手動デプロイ: `vercel --prod --yes --force`

## microCMS API構成（5つ）

### 1. お知らせ (news)
- フィールド: `title`, `tag`（カテゴリ）, `link`
- サイト連携: ✅（トップページ）

### 2. スタッフ (staff)
- フィールド: `name`, `nameKana`, `role`, `department`, `specialty`, `certifications`, `societies`, `interests`, `message`（紹介文）, `photo`（画像）, `order`（表示順）
- 部門: マネジメント / 医師 / 看護・サポーター / 地域連携室 / グリーフサポート
- サイト連携: ✅（スタッフ/はじめての方へ/連携先ページ）
- 注意: CMSにデータがない場合、`src/data/staff.ts`のハードコードデータで自動補完

### 3. 著書 (books)
- フィールド: `title`, `publisher`, `date`（YYYY-MM）, `coverImage`（画像）
- サイト連携: ✅（著書・メディアページ、講演ページ）

### 4. メディア掲載 (media)
- フィールド: `date`, `source`（媒体名）, `title`, `category`
- カテゴリ: 専門誌・医療関係 / 新聞・雑誌 / テレビ・ラジオ・その他 / いのちの授業
- サイト連携: ✅（著書・メディアページ）

### 5. 講演実績 (lectures)
- フィールド: `title`, `date`, `year`（数値）, `location`
- サイト連携: ✅（講演ページ、院長ページ）

## microCMSデータ確認コマンド

```bash
DOMAIN="3gc6ro399e"
API_KEY=$(grep MICROCMS_API_KEY /Users/ishizuka/Documents/megumi-website/.env.local | cut -d'"' -f2)
curl -s "https://${DOMAIN}.microcms.io/api/v1/{endpoint}?limit=0" -H "X-MICROCMS-API-KEY: ${API_KEY}"
```

## コンテンツ管理

### ハードコードデータ（フォールバック用）
- `src/data/staff.ts` — スタッフ情報
- `src/data/columns.ts` — 院長コラム144件（CMS未連携、ハードコードのまま）
- `src/data/lectures.ts` — 講演実績
- `src/data/media.ts` — メディア掲載
- `src/data/books.ts` — 著書

### お問い合わせフォーム
- バックエンド: Resend（`/api/contact`）
- 送信元: `noreply@megumizaitaku.jp`（ドメイン認証済み）
- 送信先: `megumi_zaitaku@miracle.ocn.ne.jp`
- 自動返信: お客様にも確認メール送信
- 環境変数: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`（Vercel）

## SEO対応状況

- 全ページmeta title/description最適化（瀬谷区・訪問診療・往診・在宅医療）
- `sitemap.xml` / `robots.txt` 自動生成（`src/app/sitemap.ts`, `src/app/robots.ts`）
- JSON-LD: MedicalClinic + Person + BreadcrumbList
- パンくずリスト: 全ページ（`src/components/ui/Breadcrumb.tsx`）
- E-E-A-T: 医療監修情報（`src/components/ui/MedicalSupervision.tsx`）
- og:image + Twitter Card設定済み

## サイト構成

### ページ一覧
- `/` — トップページ
- `/clinic/services` — 診療案内
- `/clinic/first-visit` — はじめての方へ
- `/clinic/fee` — 費用について
- `/clinic/faq` — よくあるご質問
- `/clinic/staff` — スタッフ紹介
- `/clinic/grief` — ご遺族の方へ
- `/clinic/recruit` — 採用情報
- `/clinic/partnership` — 医療機関・介護事業所の方へ
- `/clinic/contact` — お問い合わせ
- `/concept/about` — 院長・コンセプト
- `/concept/philosophy` — ユニバーサル・ホスピスマインド
- `/concept/palliative-care` — 緩和ケアとは
- `/concept/training` — 見学・研修
- `/concept/lecture` — 講演・執筆依頼
- `/concept/books` — 著書・メディア
- `/concept/blog` — コラム
- `/concept/blog/[slug]` — コラム詳細
- `/privacy` — プライバシーポリシー

### 主要コンポーネント
- `src/components/layout/Header.tsx` — ヘッダー（3バリアント: top/clinic/concept）
- `src/components/layout/Footer.tsx` — フッター
- `src/components/ui/ServiceAreaMap.tsx` — 対応エリア地図（Leaflet）
- `src/components/ui/ContactForm.tsx` — お問い合わせフォーム
- `src/components/ui/Breadcrumb.tsx` — パンくずリスト
- `src/components/ui/MedicalSupervision.tsx` — 医療監修情報

### レイアウト
- `src/app/clinic/layout.tsx` — クリニックセクション（Header variant="clinic"）
- `src/app/concept/layout.tsx` — コンセプトセクション（Header variant="concept"）
- トップページは直接Headerをインポート（variant="top"）

## フィードバック対応履歴

### 小澤先生（院長）
- 募集職種整理、電話番号統一、UHMコンセプト配置
- 応募フォーム実装、エージェント対策
- 講演実績リンク、地図実装

### 岩渕先生（副院長）
- UHMページ戻るボタン、チームワーク写真
- 実績数字、1日の流れ（保留）

### 美絵さん（事務長）
- ヒーローフォント調整、外来スケジュール修正（月木緩和ケア）
- スタッフ削除（栗田・岡田）/追加、チーム診療表記
- 看護セクション名変更、ドライバー募集停止

## クリニック基本情報

| 項目 | 値 |
|------|-----|
| 正式名 | めぐみ在宅クリニック |
| 住所 | 〒246-0037 神奈川県横浜市瀬谷区橋戸2-4-3 |
| 電話 | 045-300-6630 |
| FAX | 045-300-6631 |
| 設立 | 2006年 |
| 院長 | 小澤竹俊 |
| 副院長 | 岩渕敬介 |
| 事務長 | 石塚美絵 |
| 対応エリア | 瀬谷区・泉区・旭区（一部）・大和市（5km以内） |
| 外来 | 月曜・木曜 緩和ケア外来（予約制） |

## 操作チートシート

```bash
# プロジェクトに移動
cd /Users/ishizuka/Documents/megumi-website

# ビルド確認
npx next build

# デプロイ（自動）
git add -A && git commit -m "変更内容" && git push origin main

# 手動デプロイ
vercel --prod --yes --force

# microCMS全API件数確認
API_KEY=$(grep MICROCMS_API_KEY .env.local | cut -d'"' -f2)
for ep in news staff books media lectures; do
  count=$(curl -s "https://3gc6ro399e.microcms.io/api/v1/${ep}?limit=0" -H "X-MICROCMS-API-KEY: ${API_KEY}" | python3 -c "import sys,json; print(json.load(sys.stdin)['totalCount'])")
  echo "${ep}: ${count}件"
done

# 全ページHTTPステータス確認
for url in / /clinic/staff /concept/books /concept/lecture; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://megumi-website-xi.vercel.app${url}")
  echo "${url}: ${code}"
done
```
