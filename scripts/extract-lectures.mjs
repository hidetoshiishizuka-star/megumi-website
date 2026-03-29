/**
 * 旧サイトの講演スケジュールデータを抽出してTypeScriptデータファイルを生成
 */
import fs from "fs";
import path from "path";

const BASE = "/Users/ishizuka/Documents/020_MI-ZA/012_めぐみ在宅クリニック/ wwwデータ/www/dat/schedule";
const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2025];

const lectures = [];

for (const y of years) {
  const datFile = path.join(BASE, `${y}_jp.dat`);
  if (!fs.existsSync(datFile)) continue;

  const datContent = fs.readFileSync(datFile, "utf-8").trim();
  const monthLines = datContent.split("\n").filter(l => l.trim());

  for (const ml of monthLines) {
    const ym = ml.split("<>")[0]?.trim();
    if (!ym || ym.length !== 6) continue;

    const venueFile = path.join(BASE, ym, "venue_jp.dat");
    if (!fs.existsSync(venueFile)) continue;

    const venueContent = fs.readFileSync(venueFile, "utf-8").trim();
    const venueLines = venueContent.split("\n").filter(l => l.trim());

    for (const vline of venueLines) {
      const fields = vline.split("<>");
      const dateTitle = fields[0]?.trim();
      if (!dateTitle) continue;

      let lectureName = "";
      let location = "";

      for (let i = 0; i < fields.length - 1; i++) {
        const key = fields[i]?.trim();
        if (key === "講座名" || key === "講演名" || key === "講演") {
          lectureName = fields[i + 1]?.trim() || "";
        }
        if (key === "場　所" || key === "場所" || key === "会場" || key === "会　場") {
          location = fields[i + 1]?.trim() || "";
        }
      }

      if (!lectureName && !dateTitle) continue;

      // HTMLタグ除去
      const clean = (s) => s.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").trim();

      const dateClean = clean(dateTitle).slice(0, 50);
      lectureName = clean(lectureName);
      location = clean(location);

      lectures.push({
        year: y,
        date: dateClean,
        title: lectureName || dateClean,
        location: location || "",
      });
    }
  }
}

// 年で降順ソート
lectures.sort((a, b) => b.year - a.year || b.date.localeCompare(a.date));

// TypeScriptファイル生成
const ts = `export interface LectureRecord {
  year: number;
  date: string;
  title: string;
  location: string;
}

export const lectureRecords: LectureRecord[] = ${JSON.stringify(lectures, null, 2)};

export const lectureYears = [...new Set(lectureRecords.map(l => l.year))].sort((a, b) => b - a);
`;

const outDir = "/Users/ishizuka/Documents/megumi-website/src/data";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "lectures.ts"), ts, "utf-8");

console.log(`${lectures.length} 件の講演実績を抽出しました → src/data/lectures.ts`);
