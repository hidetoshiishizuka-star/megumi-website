const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        PageBreak, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType,
        Header, Footer, PageNumber, LevelFormat } = require("docx");

// Content for the manual
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "192044" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "192044" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "4A6AAE" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u25CB", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ]},
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers2", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers3", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers4", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
      { reference: "numbers5", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
      ]},
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1200, bottom: 1440, left: 1200 }
      }
    },
    headers: {
      default: new Header({ children: [
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "めぐみ在宅クリニック CMS運用マニュアル", size: 16, color: "999999" })]
        })
      ]})
    },
    footers: {
      default: new Footer({ children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Page ", size: 16 }), new TextRun({ children: [PageNumber.CURRENT], size: 16 })]
        })
      ]})
    },
    children: [
      // === TITLE PAGE ===
      new Paragraph({ spacing: { before: 3000 } }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [
        new TextRun({ text: "めぐみ在宅クリニック", size: 48, bold: true, color: "192044", font: "Arial" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [
        new TextRun({ text: "WEBサイト CMS運用マニュアル", size: 36, bold: true, color: "4A6AAE", font: "Arial" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [
        new TextRun({ text: "ver 1.0", size: 24, color: "666666" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [
        new TextRun({ text: "2026年4月7日", size: 22, color: "666666" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 2000 }, children: [
        new TextRun({ text: "作成：MI-ZA Corporation", size: 20, color: "999999" })
      ]}),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "E87430", space: 1 } },
        spacing: { after: 400 },
        children: [new TextRun({ text: "本マニュアルはクリニック内部資料です。外部への配布はお控えください。", size: 18, color: "999999", italics: true })]
      }),

      // === PAGE BREAK ===
      new Paragraph({ children: [new PageBreak()] }),

      // === 1. はじめに ===
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. はじめに")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun("本マニュアルは、めぐみ在宅クリニックのWEBサイトのコンテンツを、スタッフの皆さまがご自身で更新・管理できるようにするための手引きです。")
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("CMS（microCMS）とは")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun("CMS（Content Management System）とは、ブラウザ上でWEBサイトのコンテンツを編集・管理できるシステムです。当クリニックでは「"),
        new TextRun({ text: "microCMS", bold: true }),
        new TextRun("」というサービスを利用しています。プログラミングの知識は不要で、普段のメールやWordと同じ感覚で操作できます。")
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("管理対象コンテンツ")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("お知らせ（休診情報・イベント・採用情報など）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("スタッフ紹介（入退職管理・写真・プロフィール）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("院長コラム（ブログ記事の追加・編集）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("著書（新刊の追加・表紙画像）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("講演実績（講演情報の追加）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("メディア掲載・出演（掲載情報の追加）")] }),

      // === 2. ログイン方法 ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. ログイン方法")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("管理画面URL")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "https://megumizaitaku.microcms.io/", bold: true, color: "4A6AAE" })
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("上記URLをブラウザ（Chrome推奨）で開いてください。")
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("ログイン手順")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, children: [new TextRun("ブラウザでmicroCMS管理画面URLを開く")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, children: [new TextRun("メールアドレスとパスワードを入力")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, children: [new TextRun("「ログイン」ボタンをクリック")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 200 }, children: [new TextRun("ダッシュボードが表示されればログイン完了")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "※ 初回ログイン時は管理者（石塚）からメールで届く招待リンクからパスワードを設定してください。", size: 20, color: "E87430" })
      ]}),

      // === 3. お知らせの管理 ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. お知らせの管理")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("新規作成")] }),
      new Paragraph({ numbering: { reference: "numbers2", level: 0 }, children: [new TextRun("左メニューから「お知らせ」をクリック")] }),
      new Paragraph({ numbering: { reference: "numbers2", level: 0 }, children: [new TextRun("右上の「追加」ボタンをクリック")] }),
      new Paragraph({ numbering: { reference: "numbers2", level: 0 }, children: [new TextRun("以下の項目を入力：")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "タイトル", bold: true }), new TextRun("（必須）：お知らせの件名")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "本文", bold: true }), new TextRun("（必須）：詳しい内容")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "カテゴリ", bold: true }), new TextRun("（必須）：お知らせ / 採用 / 研修 / メディア / ご案内 から選択")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "公開日", bold: true }), new TextRun("（必須）：掲載開始日")] }),
      new Paragraph({ numbering: { reference: "numbers2", level: 0 }, children: [new TextRun("「公開」ボタンをクリック")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("下書き保存と公開の違い")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "下書き保存", bold: true }), new TextRun("：内容を保存するが、WEBサイトには表示されない")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "公開", bold: true }), new TextRun("：WEBサイトに即座に反映される（※再デプロイが必要な場合あり）")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("編集・削除")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("編集：一覧から該当記事をクリック → 内容を修正 → 「更新」ボタン")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("削除：一覧から該当記事をクリック → 右上の「...」→「削除」")] }),

      // === 4. スタッフ紹介の管理 ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. スタッフ紹介の管理")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("スタッフの追加")] }),
      new Paragraph({ numbering: { reference: "numbers3", level: 0 }, children: [new TextRun("左メニューから「スタッフ」をクリック")] }),
      new Paragraph({ numbering: { reference: "numbers3", level: 0 }, children: [new TextRun("「追加」ボタンをクリック")] }),
      new Paragraph({ numbering: { reference: "numbers3", level: 0 }, children: [new TextRun("以下の項目を入力：")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "名前", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "フリガナ", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "役職", bold: true }), new TextRun("（例：常勤医師、看護師、事務長など）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "部門", bold: true }), new TextRun("：マネジメント / 医師 / 看護・サポーター / 地域連携室 / グリーフサポート")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "写真", bold: true }), new TextRun("：正方形にトリミングした顔写真（500x500px以上推奨）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "専門分野・資格", bold: true }), new TextRun("（任意）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "一言メッセージ", bold: true }), new TextRun("（任意）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "並び順", bold: true }), new TextRun("：数値が小さいほど上に表示（例：院長=1、副院長=2）")] }),
      new Paragraph({ numbering: { reference: "numbers3", level: 0 }, spacing: { after: 200 }, children: [new TextRun("「公開」ボタンをクリック")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("写真のアップロード方法")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "推奨形式", bold: true }), new TextRun("：JPG または PNG")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "推奨サイズ", bold: true }), new TextRun("：正方形（500x500px以上）。顔が中心に来るようにトリミング")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "ファイルサイズ", bold: true }), new TextRun("：5MB以下")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [new TextRun("写真がない場合はアップロードせずに保存すると、めぐみうさぎのアイコンが表示されます")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("スタッフ退職時の対応")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("退職したスタッフは「削除」ではなく「"),
        new TextRun({ text: "非公開", bold: true }),
        new TextRun("」にすることを推奨します。記事を開き、ステータスを「下書き」に変更して保存してください。これによりWEBサイトには表示されなくなりますが、データは残ります。")
      ]}),

      // === 5. 院長コラムの管理 ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. 院長コラムの管理")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("コラム記事の新規作成")] }),
      new Paragraph({ numbering: { reference: "numbers4", level: 0 }, children: [new TextRun("左メニューから「コラム」をクリック")] }),
      new Paragraph({ numbering: { reference: "numbers4", level: 0 }, children: [new TextRun("「追加」ボタンをクリック")] }),
      new Paragraph({ numbering: { reference: "numbers4", level: 0 }, children: [new TextRun("以下の項目を入力：")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "タイトル", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "本文", bold: true }), new TextRun("（必須）：リッチテキストエディタで入力。太字・リンク・画像挿入が可能")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun({ text: "公開日", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "numbers4", level: 0 }, spacing: { after: 200 }, children: [new TextRun("「公開」ボタンをクリック")] }),

      // === 6. 著書の管理 ===
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. 著書の管理")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("新刊の追加")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "書名", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "出版社", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "出版日", bold: true }), new TextRun("（必須）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "表紙画像", bold: true }), new TextRun("：書籍の表紙写真をアップロード")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "AmazonリンクURL", bold: true }), new TextRun("（任意）")] }),

      // === 7. 講演実績の管理 ===
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. 講演実績の管理")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "日付", bold: true }), new TextRun("（必須）：講演日")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "タイトル", bold: true }), new TextRun("（必須）：講演タイトル")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "年", bold: true }), new TextRun("（必須）：年別フィルタ用")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "会場", bold: true }), new TextRun("（任意）")] }),

      // === 8. メディア掲載の管理 ===
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. メディア掲載・出演の管理")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "カテゴリ", bold: true }), new TextRun("（必須）：以下から選択")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun("専門誌・医療関係")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun("新聞・雑誌")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun("テレビ・ラジオ・その他")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 1 }, children: [new TextRun("「いのちの授業」関係")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "媒体名", bold: true }), new TextRun("（必須）：掲載先の媒体名")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "タイトル", bold: true }), new TextRun("（必須）：記事タイトルや内容")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text: "掲載詳細", bold: true }), new TextRun("（任意）：号数、ページ数など")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun({ text: "日付", bold: true }), new TextRun("（必須）：掲載日（ソート用）")] }),

      // === 9. 画像の管理 ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("9. 画像の管理ルール")] }),

      // Table for image specs
      ...(() => {
        const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
        const borders = { top: border, bottom: border, left: border, right: border };
        const hdrShading = { fill: "192044", type: ShadingType.CLEAR };
        const margins = { top: 60, bottom: 60, left: 100, right: 100 };
        return [new Table({
          width: { size: 9506, type: WidthType.DXA },
          columnWidths: [2500, 2500, 2500, 2006],
          rows: [
            new TableRow({ children: [
              new TableCell({ borders, shading: hdrShading, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "用途", bold: true, color: "FFFFFF", size: 20 })] })] }),
              new TableCell({ borders, shading: hdrShading, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "推奨サイズ", bold: true, color: "FFFFFF", size: 20 })] })] }),
              new TableCell({ borders, shading: hdrShading, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "形式", bold: true, color: "FFFFFF", size: 20 })] })] }),
              new TableCell({ borders, shading: hdrShading, margins, width: { size: 2006, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "上限", bold: true, color: "FFFFFF", size: 20 })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "スタッフ写真", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "500x500px以上（正方形）", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "JPG / PNG", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2006, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "5MB", size: 20 })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "書籍表紙", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "300x450px以上", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "JPG / PNG", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2006, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "5MB", size: 20 })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "コラム内画像", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "横1200px以上", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "JPG / PNG / WebP", size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 2006, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "5MB", size: 20 })] })] }),
            ]}),
          ]
        })];
      })(),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [
        new TextRun({ text: "画像ファイル名のルール：", bold: true }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("日本語のファイル名は使用不可")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun("半角英数字+ハイフンで命名（例：staff-tanaka.jpg）")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [new TextRun("スペースは使用不可（ハイフンに置き換え）")] }),

      // === 10. FAQ ===
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("10. よくある質問（FAQ）")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Q: 更新したのにサイトに反映されません")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "A: ", bold: true }),
        new TextRun("microCMSで更新した後、WEBサイトへの反映にはVercelの再デプロイが必要な場合があります。管理者（石塚）にご連絡ください。通常は数分で反映されます。")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Q: 間違えて記事を削除してしまいました")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "A: ", bold: true }),
        new TextRun("microCMSには「ゴミ箱」機能があります。削除後30日以内であれば復元可能です。ゴミ箱から復元できない場合は管理者にご連絡ください。")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Q: 画像がアップロードできません")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "A: ", bold: true }),
        new TextRun("以下をご確認ください：ファイルサイズが5MB以下であること、形式がJPG/PNG/WebPであること、ファイル名に日本語が含まれていないこと。")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Q: スタッフの表示順を変えたいです")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "A: ", bold: true }),
        new TextRun("各スタッフの「並び順」フィールドの数値を変更してください。数値が小さいほど上に表示されます（例：院長=1、副院長=2、常勤医師=10〜）。")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Q: パスワードを忘れてしまいました")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "A: ", bold: true }),
        new TextRun("ログイン画面の「パスワードを忘れた方」リンクからリセットできます。それでも解決しない場合は管理者にご連絡ください。")
      ]}),

      // === 11. 緊急連絡先 ===
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("11. 緊急時の連絡先")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun("WEBサイトに関する緊急のお問い合わせは、以下までご連絡ください。")
      ]}),

      ...(() => {
        const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
        const borders = { top: border, bottom: border, left: border, right: border };
        const margins = { top: 60, bottom: 60, left: 100, right: 100 };
        return [new Table({
          width: { size: 9506, type: WidthType.DXA },
          columnWidths: [3000, 6506],
          rows: [
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "F5F5F7", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "WEBサイト管理者", bold: true, size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 6506, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "石塚秀俊（MI-ZA Corporation）", size: 20 })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "F5F5F7", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "メール", bold: true, size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 6506, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "ishizuka55@gmail.com", size: 20 })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, margins, width: { size: 3000, type: WidthType.DXA }, shading: { fill: "F5F5F7", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "対応範囲", bold: true, size: 20 })] })] }),
              new TableCell({ borders, margins, width: { size: 6506, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "デザイン変更、機能追加、不具合修正、再デプロイ", size: 20 })] })] }),
            ]}),
          ]
        })];
      })(),

      new Paragraph({ spacing: { before: 400 }, border: { top: { style: BorderStyle.SINGLE, size: 6, color: "192044", space: 1 } }, children: [] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 }, children: [
        new TextRun({ text: "以上", size: 22, color: "666666" })
      ]}),
    ]
  }]
});

const outPath = "/Users/ishizuka/Documents/megumi-website/docs/CMS運用マニュアル_めぐみ在宅クリニック.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log("Created: " + outPath);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
