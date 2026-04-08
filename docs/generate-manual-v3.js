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

// Helper: bullet with bold prefix
function bulletBold(boldText, normalText, level = 0) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    bullet: { level },
    children: [
      new TextRun({ text: boldText, size: 22, font: "Arial", bold: true }),
      new TextRun({ text: normalText, size: 22, font: "Arial" }),
    ],
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

// Helper: important box (green)
function important(text) {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    indent: { left: 360 },
    shading: { type: ShadingType.SOLID, color: "E8F5E9" },
    children: [
      new TextRun({ text: "\u2714 ", size: 22, font: "Arial", color: "2E7D32" }),
      new TextRun({ text, size: 22, font: "Arial", bold: true, color: "2E7D32" }),
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
      margins: { top: 60, bottom: 60, left: 120, right: 120 },
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
      margins: { top: 40, bottom: 40, left: 120, right: 120 },
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

// Helper: key-value table (2 columns, no header, label bold)
function kvTable(pairs) {
  const rows = pairs.map((pair, idx) => new TableRow({
    children: [
      new TableCell({
        width: { size: 30, type: WidthType.PERCENTAGE },
        shading: { type: ShadingType.SOLID, color: NAVY },
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 40, bottom: 40, left: 120, right: 120 },
        children: [new Paragraph({
          children: [new TextRun({ text: pair[0], size: 22, font: "Arial", bold: true, color: WHITE })],
        })],
      }),
      new TableCell({
        width: { size: 70, type: WidthType.PERCENTAGE },
        shading: idx % 2 === 0 ? { type: ShadingType.SOLID, color: LIGHT_GRAY } : undefined,
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 40, bottom: 40, left: 120, right: 120 },
        children: [new Paragraph({
          children: [new TextRun({ text: pair[1], size: 22, font: "Arial" })],
        })],
      }),
    ],
  }));
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows,
  });
}

// Helper: empty line
function spacer() {
  return new Paragraph({ spacing: { before: 0, after: 0 }, children: [] });
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
        spacer(), spacer(), spacer(), spacer(), spacer(), spacer(),
        spacer(), spacer(), spacer(), spacer(), spacer(), spacer(),
        // Top line
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 6, color: NAVY } },
          children: [],
        }),
        spacer(), spacer(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "めぐみ在宅クリニック", size: 32, font: "Arial", color: BLUE }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "WEBサイト", size: 48, font: "Arial", bold: true, color: NAVY }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({ text: "CMS運用マニュアル", size: 48, font: "Arial", bold: true, color: NAVY }),
          ],
        }),
        spacer(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "ver 3.0", size: 28, font: "Arial", color: BLUE }),
          ],
        }),
        spacer(), spacer(), spacer(), spacer(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "2026\u5E744\u67088\u65E5", size: 24, font: "Arial", color: BLACK }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "\u4F5C\u6210\uFF1AMI-ZA Corporation", size: 24, font: "Arial", color: BLACK }),
          ],
        }),
        spacer(),
        // Bottom line
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY } },
          children: [],
        }),
      ],
    },

    // ===================== MAIN CONTENT =====================
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          pageNumbers: { start: 1 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({ text: "\u3081\u3050\u307F\u5728\u5B85\u30AF\u30EA\u30CB\u30C3\u30AF CMS\u904B\u7528\u30DE\u30CB\u30E5\u30A2\u30EB v3.0", size: 16, font: "Arial", color: "999999", italics: true }),
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
                new TextRun({ text: "- ", size: 18, font: "Arial", color: "999999" }),
                new TextRun({ children: [PageNumber.CURRENT], size: 18, font: "Arial", color: "999999" }),
                new TextRun({ text: " -", size: 18, font: "Arial", color: "999999" }),
              ],
            }),
          ],
        }),
      },
      children: [

        // ========== 1. はじめに ==========
        h1("1. はじめに"),
        spacer(),
        h2("1.1 CMS（microCMS）とは"),
        p("CMS（Contents Management System）とは、ブラウザ上でWEBサイトのコンテンツを簡単に編集・管理できるシステムです。当院のWEBサイトでは「microCMS」というサービスを使用しています。専門的な知識は一切不要で、ブラウザから管理画面にログインするだけで、お知らせの投稿やスタッフ情報の編集などが行えます。"),
        spacer(),

        h2("1.2 管理画面へのアクセス"),
        labeledP("管理画面URL: ", "https://3gc6ro399e.microcms.io/"),
        labeledP("ログイン方法: ", "メールアドレスとパスワードでログインします。"),
        labeledP("推奨ブラウザ: ", "Google Chrome（最新版）"),
        spacer(),

        h2("1.3 管理対象コンテンツ"),
        p("microCMSで管理するコンテンツは以下の5つです。"),
        bullet("お知らせ"),
        bullet("スタッフ紹介"),
        bullet("著書"),
        bullet("メディア掲載・出演"),
        bullet("講演実績"),
        spacer(),

        important("重要：microCMSで「公開」ボタンを押すだけで、約60秒以内にWEBサイトに自動反映されます。"),
        spacer(),

        // ========== 2. お知らせの管理 ==========
        h1("2. お知らせの管理"),
        spacer(),

        h2("2.1 新規作成"),
        numbered(1, "管理画面の左メニューから「お知らせ」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),
        spacer(),

        h2("2.2 入力項目"),
        bulletBold("タイトル（必須）: ", "お知らせのタイトルを入力します。"),
        bulletBold("カテゴリタグ: ", "以下から選択します。"),
        bullet("お知らせ", 1),
        bullet("採用", 1),
        bullet("研修", 1),
        bullet("メディア", 1),
        bullet("ご案内", 1),
        bulletBold("リンクURL（任意）: ", "外部リンク先がある場合にURLを入力します。"),
        spacer(),
        note("公開日は自動設定されます。手動で変更する必要はありません。"),
        spacer(),

        h2("2.3 下書き保存と公開"),
        bulletBold("下書き保存: ", "内容を保存しますが、WEBサイトには反映されません。後から編集・公開が可能です。"),
        bulletBold("公開: ", "公開後、約60秒でWEBサイトに自動反映されます。"),
        spacer(),

        h2("2.4 編集・削除"),
        bulletBold("編集: ", "一覧から対象のお知らせをクリックし、内容を修正して「更新」をクリックします。"),
        bulletBold("削除: ", "一覧から対象のお知らせをクリックし、画面下部の「削除」をクリックします。"),
        note("削除したコンテンツはmicroCMSのゴミ箱から30日以内であれば復元可能です。"),
        spacer(),

        // ========== 3. スタッフ紹介の管理 ==========
        h1("3. スタッフ紹介の管理"),
        spacer(),

        h2("3.1 新規追加"),
        numbered(1, "管理画面の左メニューから「スタッフ」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),
        spacer(),

        h2("3.2 入力項目"),
        bulletBold("名前（必須）: ", "スタッフの氏名を入力"),
        bulletBold("フリガナ: ", "名前のフリガナをカタカナで入力"),
        bulletBold("役職（必須）: ", "例：院長、副院長、看護師長 など"),
        bulletBold("部門: ", "以下から選択"),
        bullet("マネジメント", 1),
        bullet("医師", 1),
        bullet("看護・サポーター", 1),
        bullet("地域連携室", 1),
        bullet("グリーフサポート", 1),
        bulletBold("専門分野: ", "専門分野を入力"),
        bulletBold("資格: ", "「/」（スラッシュ）区切りで複数入力。例：医師 / 緩和ケア認定医 / 在宅医療認定医"),
        bulletBold("所属学会: ", "「/」区切りで複数入力"),
        bulletBold("興味ある分野: ", "「/」区切りで複数入力"),
        bulletBold("一言メッセージ: ", "紹介文を入力。WEBサイトのスタッフ詳細ページに表示されます。"),
        bulletBold("写真: ", "画像をアップロードします（詳細は下記参照）。"),
        bulletBold("表示順: ", "数字が小さいほど上（先頭）に表示されます。例：院長=1、副院長=2"),
        spacer(),

        h2("3.3 写真のアップロード"),
        bullet("推奨サイズ：500\u00D7500px以上の正方形"),
        bullet("対応形式：JPG または PNG"),
        bullet("ファイルサイズ上限：5MB"),
        bullet("写真がない場合は、めぐみうさぎのアイコンが自動的に表示されます"),
        spacer(),

        h2("3.4 退職時の対応"),
        p("スタッフが退職した場合は、削除ではなく「下書き」に変更して非公開にしてください。"),
        numbered(1, "該当スタッフの編集画面を開く"),
        numbered(2, "右上のステータスを「下書き」に変更"),
        numbered(3, "「更新」をクリック"),
        note("削除するとデータが完全に消えてしまうため、「下書き」への変更を推奨します。"),
        spacer(),

        h2("3.5 表示順の変更"),
        p("「表示順」フィールドの数値を変更することで、WEBサイト上の表示順を制御できます。数字が小さいほど上（先頭）に表示されます。"),
        spacer(),

        h2("3.6 注意事項"),
        note("資格・学会・紹介文がmicroCMSに未入力の場合、システム内の既存データが自動補完されます。microCMSに入力した内容が優先されますので、変更したい場合はmicroCMSで直接編集してください。"),
        spacer(),

        // ========== 4. 著書の管理 ==========
        h1("4. 著書の管理"),
        spacer(),

        h2("4.1 新規追加"),
        numbered(1, "管理画面の左メニューから「著書」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),
        spacer(),

        h2("4.2 入力項目"),
        bulletBold("書名（必須）: ", "著書のタイトルを入力"),
        bulletBold("出版社: ", "出版社名を入力"),
        bulletBold("出版日: ", "YYYY-MM形式で入力（例：2026-04）"),
        bulletBold("表紙画像: ", "microCMS管理画面から直接アップロードできます。JPGまたはPNG形式、推奨300\u00D7450px以上。"),
        spacer(),
        p("著書はWEBサイト上で新しい順に自動ソートされます。"),
        spacer(),

        // ========== 5. メディア掲載・出演の管理 ==========
        h1("5. メディア掲載・出演の管理"),
        spacer(),

        h2("5.1 新規追加"),
        numbered(1, "管理画面の左メニューから「メディア掲載・出演」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),
        spacer(),

        h2("5.2 入力項目"),
        bulletBold("掲載日（date）: ", "掲載・出演日を選択"),
        bulletBold("媒体名（source）: ", "掲載された媒体名を入力"),
        bulletBold("タイトル: ", "記事・番組のタイトルを入力"),
        bulletBold("カテゴリ: ", "以下から選択"),
        bullet("専門誌・医療関係", 1),
        bullet("新聞・雑誌", 1),
        bullet("テレビ・ラジオ・その他", 1),
        bullet("いのちの授業", 1),
        spacer(),
        p("メディア掲載情報はWEBサイト上で新しい順に自動ソートされます。"),
        spacer(),

        // ========== 6. 講演実績の管理 ==========
        h1("6. 講演実績の管理"),
        spacer(),

        h2("6.1 新規追加"),
        numbered(1, "管理画面の左メニューから「講演実績」をクリック"),
        numbered(2, "右上の「＋追加」ボタンをクリック"),
        numbered(3, "各項目を入力"),
        numbered(4, "「公開」ボタンをクリック"),
        spacer(),

        h2("6.2 入力項目"),
        bulletBold("タイトル（必須）: ", "講演のタイトルを入力"),
        bulletBold("日付: ", "講演日を入力（例：2026年4月1日（火）終了）"),
        bulletBold("年（数字）: ", "講演年を数字で入力（例：2026）。年ごとのフィルタリングに使用されます。"),
        bulletBold("会場（任意）: ", "講演会場を入力"),
        spacer(),
        p("講演実績はWEBサイト上で新しい順に自動ソートされます。"),
        spacer(),

        // ========== 7. 画像の管理ルール ==========
        h1("7. 画像の管理ルール"),
        spacer(),
        p("画像をアップロードする際は、以下のルールに従ってください。"),
        spacer(),
        simpleTable(
          ["用途", "推奨サイズ", "形式", "上限"],
          [
            ["スタッフ写真", "500\u00D7500px以上（正方形）", "JPG / PNG", "5MB"],
            ["著書表紙", "300\u00D7450px以上", "JPG / PNG", "5MB"],
          ]
        ),
        spacer(),
        note("ファイル名に日本語は使用できません。半角英数字とハイフンのみを使用してください。例：staff-tanaka.jpg"),
        spacer(),

        // ========== 8. サイトへの反映について ==========
        h1("8. サイトへの反映について"),
        spacer(),
        bullet("microCMSで「公開」ボタンを押すだけで、約60秒以内にWEBサイトに自動反映されます"),
        bullet("反映されない場合は、管理者（石塚）にご連絡ください"),
        spacer(),

        // ========== 9. よくある質問 ==========
        h1("9. よくある質問（FAQ）"),
        spacer(),

        faqQ("更新したのにサイトに反映されません"),
        faqA("約60秒お待ちください。反映されない場合は管理者（石塚）にご連絡ください。"),

        faqQ("間違えて記事を削除してしまいました"),
        faqA("microCMSのゴミ箱から30日以内であれば復元可能です。管理画面の「ゴミ箱」から対象を選択し、「復元」をクリックしてください。"),

        faqQ("画像がアップロードできません"),
        faqA("5MB以下のJPG/PNG/WebP形式の画像をご使用ください。また、ファイル名に日本語が含まれているとアップロードに失敗する場合があります。半角英数字とハイフンのみのファイル名に変更してお試しください。"),

        faqQ("スタッフの表示順を変えたい"),
        faqA("各スタッフの編集画面にある「表示順」フィールドの数値を変更してください。数字が小さいほどWEBサイト上で上（先頭）に表示されます。"),

        faqQ("パスワードを忘れました"),
        faqA("ログイン画面の「パスワードを忘れた方」リンクからパスワードをリセットできます。"),

        faqQ("新しいカテゴリを追加したい"),
        faqA("カテゴリの追加にはシステム設定の変更が必要です。管理者（石塚）にご連絡ください。"),

        faqQ("コラム（院長ブログ）を更新したい"),
        faqA("コラムはシステム内で直接管理しています。microCMSからは編集できません。更新が必要な場合は管理者（石塚）にご連絡ください。"),
        spacer(),

        // ========== 10. 緊急時の連絡先 ==========
        h1("10. 緊急時の連絡先"),
        spacer(),
        p("WEBサイトに関するお問い合わせ・不具合報告は、以下の連絡先までご連絡ください。"),
        spacer(),
        kvTable([
          ["WEBサイト管理者", "石塚秀俊（MI-ZA Corporation）"],
          ["メール", "ishizuka55@gmail.com"],
          ["対応範囲", "デザイン変更、機能追加、不具合修正、コラム更新"],
        ]),
        spacer(), spacer(),

        // Footer note
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 400, after: 0 },
          border: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" } },
          children: [
            new TextRun({ text: "\u00A9 2026 MI-ZA Corporation. All rights reserved.", size: 18, font: "Arial", color: "999999" }),
          ],
        }),
      ],
    },
  ],
});

// Generate and save
(async () => {
  const buffer = await Packer.toBuffer(doc);
  const outPath = "/Users/ishizuka/Documents/megumi-website/docs/CMS\u904B\u7528\u30DE\u30CB\u30E5\u30A2\u30EB_\u3081\u3050\u307F\u5728\u5B85\u30AF\u30EA\u30CB\u30C3\u30AF_v3.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Generated: " + outPath);
  console.log("Size: " + (buffer.length / 1024).toFixed(1) + " KB");
})();
