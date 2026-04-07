import fs from 'fs';

const API_KEY = 'WEAo1Vx6h6DeE7K4pTOVUEpdjfMyBjYEIGB8';
const BASE_URL = 'https://3gc6ro399e.microcms.io/api/v1';
const DELAY_MS = 300;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseColumnsTS(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const match = text.match(/export const columns[^=]*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!match) throw new Error('Could not parse columns array');
  return new Function('return ' + match[1])();
}

async function main() {
  const columns = parseColumnsTS('/Users/ishizuka/Documents/megumi-website/src/data/columns.ts');
  console.log(`Importing ${columns.length} columns to blog API via POST...`);

  let success = 0, fail = 0;
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    try {
      const res = await fetch(`${BASE_URL}/blog`, {
        method: 'POST',
        headers: {
          'X-MICROCMS-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: col.title, body: col.body }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`${res.status}: ${text}`);
      }
      success++;
    } catch (err) {
      fail++;
      console.error(`\n  FAIL [${col.slug}]: ${err.message}`);
    }
    process.stdout.write(`\r  Progress: ${i + 1}/${columns.length} (OK:${success} FAIL:${fail})`);
    await sleep(DELAY_MS);
  }
  console.log(`\nDone: ${success} success, ${fail} fail`);
}

main().catch(console.error);
