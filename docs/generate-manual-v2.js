const docx = require("docx");
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  TableLayoutType, ShadingType, PageBreak, Tab, TabStopType,
  ImageRun, VerticalAlign,
} = docx;

// Colors
const NAVY = "192044";
const BLUE = "4A6AAE";
const LIGHT_GRAY = "F5F5F5";
const WHITE = "FFFFFF";
const BLACK = "000000";

// Helper: heading 1
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [
      new TextRun({ text, bold: true, size: 36, color: NAVY, font: "Arial" }),
    ],
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 2, color: NAVY },
    },
  });
}

// Helper: heading 2
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
    children: [
      new TextRun({ text, bold: true, size: 28, color: NAVY, font: "Arial" }),
    ],
  });
}

// Helper: heading 3
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [
      new TextRun({ text, bold: true, size: 24, color: BLUE, font: "Arial" }),
    ],
  });
}

// Helper: normal paragraph
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    indent: opts.indent ? { left: opts.indent } : undefined,
    children: [
      new TextRun({ text, size: 22, font: "Arial", ...opts }),
    ],
  });
}

// Helper: bold label + normal text
function labeledP(label, text) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [
      new TextRun({ text: label, size: 22, font: "Arial", bold: true }),
      new TextRun({ text, size: 22, font: "Arial" }),
    ],
  });
}

// Helper: bullet
function bullet(text, level = 0) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    bullet: { level },
    children: [new TextRun({ text, size: 22, font: "Arial" })],
  });
}

// Helper: numbered list item (manual numbering)
function numbered(num, text) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: `${num}. `, size: 22, font: "Arial", bold: true }),
      new TextRun({ text, size: 22, font: "Arial" }),
    ],
  });
}

// Helper: note/tip box
function note(text) {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    indent: { left: 360 },
    shading: { type: ShadingType.SOLID, color: "FFF8E1" },
    children: [
      new TextRun({ text: "\u26A0 ", size: 22, font: "Arial" }),
      new TextRun({ text, size: 22, font: "Arial", italics: true }),
    ],
  });
}

// Helper: FAQ
function faqQ(q) {
  return new Paragraph({
    spacing: { before: 160, after: 40 },
    children: [
      new TextRun({ text: "Q: ", size: 22, font: "Arial", bold: true, color: NAVY }),
      new TextRun({ text: q, size: 22, font: "Arial", bold: true }),
    ],
  });
}
function faqA(a) {
  return new Paragraph({
    spacing: { before: 40, after: 120 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: "A: ", size: 22, font: "Arial", bold: true, color: BLUE }),
      new TextRun({ text: a, size: 22, font: "Arial" }),
    ],
  });
}

// Helper: simple table
function simpleTable(headers, rows) {
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(h => new TableCell({
      shading: { type: ShadingType.SOLID, color: NAVY },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: h, size: 22, font: "Arial", bold: true, color: WHITE })],
      })],
    })),
  });
  const dataRows = rows.map((row, idx) => new TableRow({
    children: row.map(cell => new TableCell({
      shading: idx % 2 === 0 ? { type: ShadingType.SOLID, color: LIGHT_GRAY } : undefined,
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({
        spacing: { before: 40, after: 40 },
        children: [new TextRun({ text: cell, size: 22, font: "Arial" })],
      })],
    })),
  }));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
  });
}

// ============================================================
// Build the document
// ============================================================
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 },
      },
    },
  },
  sections: [
    // ===================== TITLE PAGE =====================
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
        },
      },
      children: [
        new Paragraph({ spacing: { before: 3000 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "めぐみ在宅クリニック", size: 36, font: "Arial", color: NAVY, bold: true }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
          children: [
            new TextRun({ text: "WEBサイト CMS運用マニュアル", size: 48, font: "Arial", color: NAVY, bold: true }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          border: {
            top: { style: BorderStyle.SINGLE, size: 2, color: BLUE },
            bottom: { style: BorderStyle.SINGLE, size: 2, color: BLUE },
          },
          children: [
            new TextRun({ text: " ", size: 10 }),
          ],
        }),
        new Paragraph({ spacing: { before: 400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "ver 2.0", size: 32, font: "Arial", color: BLUE }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "2026年4月8日", size: 24, font: "Arial", color: BLACK }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "作成：MI-ZA Corporation", size: 24, font: "Arial", color: BLACK }),
          ],
        }),
      ],
    },

    // ===================== MAIN CONTENT =====================
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({ text: "めぐみ在宅クリニック CMS運用マニュアル", size: 16, font: "Arial", color: "888888", italics: true }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: "- ", size: 18, font: "Arial", color: "888888" }),
                new TextRun({ children: [PageNumber.CURRENT], size: 18, font: "Arial", color: "888888" }),
                new TextRun({ text: " -", size: 18, font: "Arial", color: "888888" }),
              ],
            }),
          ],
        }),
      },
      children: [
        // ==================== 1. はじめに ====================
        h1("1. はじめに"),

        h2("1.1 CMS（microCMS）とは"),
        p("CMS（Contents Management System）とは、専門的な知識がなくてもブラウザ上でWEBサイトのコンテンツを編集・管理できるシステムです。めぐみ在宅クリニックのWEBサイトでは「microCMS」というサービスを使用しています。"),

        h2("1.2 管理画面へのアクセス"),
        labeledP("管理画面URL: ", "https://3gc6ro399e.microcms.io/"),
        p("上記URLにアクセスし、登録済みのメールアドレスとパスワードでログインしてください。"),

        h3("ログイン手順"),
        numbered(1, "ブラウザで管理画面URLを開く"),
        numbered(2, "メールアドレスを入力"),
        numbered(3, "パスワードを入力"),
        numbered(4, "「ログイン」ボタンをクリック"),

        h2("1.3 管理対象コンテンツ"),
        p("本マニュアルでは、以下の5つのコンテンツの管理方法を説明します。"),
        simpleTable(
          ["No.", "コンテンツ名", "APIエンドポイント", "用途"],
          [
            ["1", "お知らせ", "news", "クリニックからのお知らせ・告知"],
            ["2", "スタッフ紹介", "staff", "医師・スタッフの紹介情報"],
            ["3", "著書", "books", "院長・スタッフの著書一覧"],
            ["4", "メディア掲載・出演", "media", "メディア掲載・出演実績"],
            ["5", "講演実績", "lectures", "講演・登壇の実績"],
          ]
        ),

        // ==================== 2. お知らせ ====================
        h1("2. お知らせの管理"),

        h2("2.1 新規作成手順"),
        numbered(1, "左メニューから「お知らせ」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力（下記参照）"),
        numbered(4, "「公開」ボタンをクリックして公開"),

        h2("2.2 入力項目"),
        simpleTable(
          ["項目名", "必須", "説明"],
          [
            ["タイトル", "○", "お知らせのタイトルを入力"],
            ["カテゴリタグ", "−", "お知らせ / 採用 / 研修 / メディア / ご案内 から選択"],
            ["リンクURL", "−", "外部リンクがある場合にURLを入力"],
          ]
        ),
        p(""),
        note("公開日はmicroCMSにより自動設定されます。手動での入力は不要です。"),

        h2("2.3 下書き保存と公開"),
        bullet("下書き保存：「下書き保存」をクリック → サイトには表示されません"),
        bullet("公開：「公開」をクリック → サイトに表示されます"),
        bullet("公開中の記事を非公開にしたい場合：「下書きに戻す」をクリック"),

        h2("2.4 編集・削除"),
        bullet("編集：一覧画面から該当記事をクリック → 内容を修正 → 「更新」をクリック"),
        bullet("削除：一覧画面から該当記事をクリック → 右上メニューから「削除」を選択"),
        note("サイトへの反映にはVercelの再デプロイが必要な場合があります（第8章参照）。"),

        // ==================== 3. スタッフ紹介 ====================
        h1("3. スタッフ紹介の管理"),

        h2("3.1 新規追加手順"),
        numbered(1, "左メニューから「スタッフ紹介」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力（下記参照）"),
        numbered(4, "「公開」ボタンをクリック"),

        h2("3.2 入力項目"),
        simpleTable(
          ["項目名", "必須", "説明"],
          [
            ["名前", "○", "スタッフの氏名"],
            ["フリガナ", "−", "名前のフリガナ（カタカナ）"],
            ["役職", "○", "院長、副院長、看護師長、等"],
            ["部門", "−", "マネジメント / 医師 / 看護・サポーター / 地域連携室 / グリーフサポート から選択"],
            ["専門分野", "−", "専門領域を入力"],
            ["資格", "−", "保有資格を入力（複数ある場合は「/」区切り）"],
            ["所属学会", "−", "所属学会名（複数は「/」区切り）"],
            ["興味ある分野", "−", "興味・関心のある分野（複数は「/」区切り）"],
            ["一言メッセージ", "−", "紹介文・メッセージを入力"],
            ["写真", "−", "スタッフの写真をアップロード"],
            ["表示順", "−", "数値を入力（数字が小さいほど上に表示）"],
          ]
        ),

        h2("3.3 写真アップロードについて"),
        bullet("推奨サイズ：正方形 500 × 500 px 以上"),
        bullet("対応形式：JPG / PNG"),
        bullet("ファイルサイズ：5MB以下"),
        bullet("ファイル名：半角英数字とハイフンのみ使用可（日本語不可）"),
        note("写真は正方形にトリミングされて表示されます。あらかじめ正方形に加工してからアップロードすることをお勧めします。"),

        h2("3.4 退職時の対応"),
        p("スタッフが退職した場合は、該当のスタッフ情報を削除せず「下書き」に変更して非公開にしてください。削除よりも安全に管理できます。"),
        numbered(1, "一覧から該当スタッフをクリック"),
        numbered(2, "右上メニューから「下書きに戻す」を選択"),
        numbered(3, "サイトから非表示になります"),

        h2("3.5 表示順の変更"),
        p("「表示順」フィールドの数値を変更することで、サイト上の表示順序を制御できます。"),
        bullet("数字が小さいほど上（先頭）に表示されます"),
        bullet("例：院長=1、副院長=2、看護師長=3 ..."),

        // ==================== 4. 著書 ====================
        h1("4. 著書の管理"),

        h2("4.1 新規追加手順"),
        numbered(1, "左メニューから「著書」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),

        h2("4.2 入力項目"),
        simpleTable(
          ["項目名", "必須", "説明"],
          [
            ["書名", "○", "書籍のタイトル"],
            ["出版社", "−", "出版社名"],
            ["出版日", "−", "出版年月（YYYY-MM形式）"],
          ]
        ),

        note("表紙画像は現在、WEBサイトのプログラム内にハードコードされています。表紙画像の追加・変更が必要な場合は、管理者（石塚）にご連絡ください。"),

        // ==================== 5. メディア掲載・出演 ====================
        h1("5. メディア掲載・出演の管理"),

        h2("5.1 新規追加手順"),
        numbered(1, "左メニューから「メディア掲載・出演」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),

        h2("5.2 入力項目"),
        simpleTable(
          ["項目名", "必須", "説明"],
          [
            ["掲載日", "−", "掲載・出演日を選択"],
            ["媒体名（source）", "−", "掲載メディアの名称"],
            ["タイトル", "−", "記事・番組のタイトル"],
            ["カテゴリ", "−", "専門誌・医療関係 / 新聞・雑誌 / テレビ・ラジオ・その他 / いのちの授業 から選択"],
          ]
        ),

        // ==================== 6. 講演実績 ====================
        h1("6. 講演実績の管理"),

        h2("6.1 新規追加手順"),
        numbered(1, "左メニューから「講演実績」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "タイトルを入力"),
        numbered(4, "「公開」ボタンをクリック"),

        h2("6.2 入力項目"),
        simpleTable(
          ["項目名", "必須", "説明"],
          [
            ["タイトル", "○", "講演のタイトル"],
          ]
        ),

        note("現在、講演実績はタイトルのみの登録です。日付や会場などの項目が必要な場合は、管理者（石塚）にご連絡ください。"),

        // ==================== 7. 画像の管理ルール ====================
        h1("7. 画像の管理ルール"),

        p("microCMSにアップロードする画像は、以下のルールに従ってください。"),

        simpleTable(
          ["項目", "推奨・条件"],
          [
            ["対応形式", "JPG / PNG / WebP"],
            ["スタッフ写真サイズ", "正方形 500 × 500 px 以上"],
            ["ファイル名", "半角英数字 + ハイフンのみ（日本語不可）"],
            ["ファイルサイズ上限", "5MB以下"],
          ]
        ),

        p(""),
        h3("ファイル名の例"),
        bullet("良い例：staff-tanaka.jpg、news-2026-04.png"),
        bullet("悪い例：田中先生.jpg、スタッフ写真（1）.png"),

        // ==================== 8. サイトへの反映 ====================
        h1("8. サイトへの反映について"),

        h2("8.1 反映の仕組み"),
        p("めぐみ在宅クリニックのWEBサイトはVercel上でホスティングされています。microCMSで更新した内容をサイトに反映するためには、Vercelの再デプロイ（再構築）が必要です。"),

        h2("8.2 反映手順"),
        p("以下のいずれかの方法で反映できます。"),

        h3("方法1：管理者に連絡（推奨）"),
        numbered(1, "microCMSでコンテンツの更新が完了したら、管理者（石塚）に連絡"),
        numbered(2, "管理者が再デプロイを実施"),
        numbered(3, "通常1〜2分で反映されます"),

        h3("方法2：git push（技術者向け）"),
        numbered(1, "ターミナルを開く"),
        numbered(2, "プロジェクトディレクトリに移動"),
        numbered(3, "git push origin main を実行"),
        numbered(4, "Vercelが自動的にデプロイを開始します"),

        h2("8.3 反映までの所要時間"),
        p("再デプロイの所要時間は通常1〜2分です。反映されない場合は、ブラウザのキャッシュをクリアして再読み込みしてください。"),

        // ==================== 9. FAQ ====================
        h1("9. よくある質問（FAQ）"),

        faqQ("更新したのにサイトに反映されません"),
        faqA("Vercelの再デプロイが必要です。管理者（石塚）にご連絡ください。第8章をご参照ください。"),

        faqQ("間違えて記事を削除してしまいました"),
        faqA("microCMSのゴミ箱から30日以内であれば復元可能です。左メニューの「ゴミ箱」から復元してください。"),

        faqQ("画像がアップロードできません"),
        faqA("ファイルサイズが5MB以下であること、形式がJPG/PNG/WebPであることを確認してください。また、ファイル名に日本語が含まれていないか確認してください。"),

        faqQ("スタッフの表示順を変えたいです"),
        faqA("該当スタッフの編集画面を開き、「表示順」フィールドの数値を変更してください。数字が小さいほど上に表示されます。"),

        faqQ("パスワードを忘れました"),
        faqA("microCMSのログイン画面にある「パスワードを忘れた方」リンクからパスワードリセットを行ってください。登録メールアドレスにリセット用のメールが届きます。"),

        faqQ("新しいカテゴリを追加したいです"),
        faqA("カテゴリの追加にはmicroCMSのAPI設定変更が必要です。管理者（石塚）にご連絡ください。"),

        faqQ("スマートフォンから更新できますか？"),
        faqA("はい、microCMSはスマートフォンのブラウザからもアクセス可能です。ただし、画面が小さいため、PCからの操作を推奨します。"),

        // ==================== 10. 緊急時の連絡先 ====================
        h1("10. 緊急時の連絡先"),

        p("WEBサイトに関する問題や要望がありましたら、以下の連絡先までご連絡ください。"),

        simpleTable(
          ["項目", "内容"],
          [
            ["WEBサイト管理者", "石塚秀俊（MI-ZA Corporation）"],
            ["メールアドレス", "ishizuka55@gmail.com"],
          ]
        ),

        p(""),
        h2("10.1 対応範囲"),
        bullet("デザインの変更・修正"),
        bullet("新機能の追加"),
        bullet("不具合・エラーの修正"),
        bullet("Vercelの再デプロイ"),
        bullet("microCMSのAPI設定変更"),
        bullet("その他、WEBサイトに関するご相談"),

        p(""),
        p(""),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 600 },
          border: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
          },
          children: [
            new TextRun({ text: "本マニュアルに関するご不明点は、管理者までお気軽にお問い合わせください。", size: 20, font: "Arial", color: "666666", italics: true }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 100 },
          children: [
            new TextRun({ text: "CMS運用マニュアル ver 2.0 | 2026年4月8日 | MI-ZA Corporation", size: 18, font: "Arial", color: "999999" }),
          ],
        }),
      ],
    },
  ],
});

// Generate and save
(async () => {
  const buffer = await Packer.toBuffer(doc);
  const outputPath = "/Users/ishizuka/Documents/megumi-website/docs/CMS運用マニュアル_めぐみ在宅クリニック_v2.docx";
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${outputPath}`);
  console.log(`File size: ${(buffer.length / 1024).toFixed(1)} KB`);
})();
