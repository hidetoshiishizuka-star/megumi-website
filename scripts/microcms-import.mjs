import fs from 'fs';

const DOMAIN = '3gc6ro399e';
const API_KEY = 'WEAo1Vx6h6DeE7K4pTOVUEpdjfMyBjYEIGB8';
const BASE_URL = `https://${DOMAIN}.microcms.io/api/v1`;
const DELAY_MS = 300;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Parse TS file by stripping types and evaluating
function parseColumnsTS(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  // Extract the array content between the first [ and last ]
  const match = text.match(/export const columns[^=]*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!match) throw new Error('Could not parse columns array');
  // Use Function constructor to evaluate
  const arr = new Function('return ' + match[1])();
  return arr;
}

function parseLecturesTS(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const match = text.match(/export const lectureRecords[^=]*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!match) throw new Error('Could not parse lectures array');
  const arr = new Function('return ' + match[1])();
  return arr;
}

function parseMediaTS(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const match = text.match(/export const mediaEntries[^=]*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!match) throw new Error('Could not parse media array');
  const arr = new Function('return ' + match[1])();
  return arr;
}

async function apiRequest(method, endpoint, body = null) {
  const url = `${BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} -> ${res.status}: ${JSON.stringify(json)}`);
  }
  return json;
}

// Fetch all existing items from an endpoint (handles pagination)
async function fetchAll(endpoint) {
  const items = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const res = await apiRequest('GET', `${endpoint}?limit=${limit}&offset=${offset}`);
    items.push(...res.contents);
    if (items.length >= res.totalCount) break;
    offset += limit;
    await sleep(DELAY_MS);
  }
  return items;
}

// ============ TASK 1: Import Columns (blog) ============
async function importColumns() {
  console.log('\n=== TASK 1: Import コラム (blog) ===');
  const columns = parseColumnsTS('/Users/ishizuka/Documents/megumi-website/src/data/columns.ts');
  console.log(`Parsed ${columns.length} columns`);

  // Test with first entry
  console.log('Testing with first entry...');
  const testCol = columns[0];
  try {
    const testResult = await apiRequest('PUT', `/blog/${testCol.slug}`, {
      title: testCol.title,
      body: testCol.body,
    });
    console.log('Test OK:', testResult.id || testResult);
  } catch (e) {
    console.error('Test failed:', e.message);
    console.log('Trying without body, just title...');
    try {
      const testResult2 = await apiRequest('PUT', `/blog/${testCol.slug}`, {
        title: testCol.title,
      });
      console.log('Title-only test OK:', testResult2.id || testResult2);
      // If body field doesn't exist, import title only
      console.log('Will import title only (body field not in schema)');
      let success = 0, fail = 0;
      for (let i = 1; i < columns.length; i++) {
        const col = columns[i];
        try {
          await apiRequest('PUT', `/blog/${col.slug}`, { title: col.title });
          success++;
          process.stdout.write(`\r  Progress: ${i + 1}/${columns.length} (OK:${success} FAIL:${fail})`);
        } catch (err) {
          fail++;
          console.error(`\n  FAIL [${col.slug}]: ${err.message}`);
        }
        await sleep(DELAY_MS);
      }
      console.log(`\nColumns done: ${success + 1} success, ${fail} fail`);
      return;
    } catch (e2) {
      console.error('Title-only test also failed:', e2.message);
      return;
    }
  }

  // If test passed with both fields, proceed with all
  await sleep(DELAY_MS);
  let success = 1, fail = 0; // already did first one
  for (let i = 1; i < columns.length; i++) {
    const col = columns[i];
    try {
      await apiRequest('PUT', `/blog/${col.slug}`, {
        title: col.title,
        body: col.body,
      });
      success++;
    } catch (err) {
      fail++;
      console.error(`\n  FAIL [${col.slug}]: ${err.message}`);
    }
    process.stdout.write(`\r  Progress: ${i + 1}/${columns.length} (OK:${success} FAIL:${fail})`);
    await sleep(DELAY_MS);
  }
  console.log(`\nColumns done: ${success} success, ${fail} fail`);
}

// ============ TASK 2: Import Lectures ============
async function importLectures() {
  console.log('\n=== TASK 2: Import 講演実績 (lectures) ===');
  const lectures = parseLecturesTS('/Users/ishizuka/Documents/megumi-website/src/data/lectures.ts');
  console.log(`Parsed ${lectures.length} lectures`);

  // Test with first entry
  console.log('Testing with first entry...');
  try {
    const testResult = await apiRequest('POST', '/lectures', {
      title: lectures[0].title,
    });
    console.log('Test OK:', testResult.id);
  } catch (e) {
    console.error('Test failed:', e.message);
    return;
  }

  await sleep(DELAY_MS);
  let success = 1, fail = 0;
  for (let i = 1; i < lectures.length; i++) {
    const lec = lectures[i];
    try {
      await apiRequest('POST', '/lectures', { title: lec.title });
      success++;
    } catch (err) {
      fail++;
      console.error(`\n  FAIL [${lec.title.substring(0, 30)}]: ${err.message}`);
    }
    process.stdout.write(`\r  Progress: ${i + 1}/${lectures.length} (OK:${success} FAIL:${fail})`);
    await sleep(DELAY_MS);
  }
  console.log(`\nLectures done: ${success} success, ${fail} fail`);
}

// ============ TASK 3: Import Media ============
async function importMedia() {
  console.log('\n=== TASK 3: Import メディア掲載 (media) ===');
  const mediaEntries = parseMediaTS('/Users/ishizuka/Documents/megumi-website/src/data/media.ts');
  console.log(`Parsed ${mediaEntries.length} media entries`);

  // Fetch existing entries from microCMS
  console.log('Fetching existing media entries from microCMS...');
  let existing = [];
  try {
    existing = await fetchAll('/media');
    console.log(`Found ${existing.length} existing entries in microCMS`);
  } catch (e) {
    console.error('Failed to fetch existing:', e.message);
  }

  // Build a set of existing entries for deduplication (by title + source)
  const existingKeys = new Set();
  for (const item of existing) {
    const key = `${item.title || ''}|||${item.source || ''}`;
    existingKeys.add(key);
  }

  // Filter out already-existing entries
  const toImport = mediaEntries.filter(entry => {
    const key = `${entry.title || ''}|||${entry.publication || ''}`;
    return !existingKeys.has(key);
  });
  console.log(`${toImport.length} new entries to import (${mediaEntries.length - toImport.length} already exist)`);

  if (toImport.length === 0) {
    console.log('Nothing to import for media.');
    return;
  }

  // Test with first entry
  console.log('Testing with first new entry...');
  const testEntry = toImport[0];
  try {
    const body = {
      date: testEntry.sortDate,
      source: testEntry.publication,
      title: testEntry.title,
      category: [testEntry.category],
    };
    const testResult = await apiRequest('POST', '/media', body);
    console.log('Test OK:', testResult.id);
  } catch (e) {
    console.error('Test failed with category as array:', e.message);
    // Try category as string
    try {
      const body2 = {
        date: testEntry.sortDate,
        source: testEntry.publication,
        title: testEntry.title,
        category: testEntry.category,
      };
      const testResult2 = await apiRequest('POST', '/media', body2);
      console.log('Test OK (category as string):', testResult2.id);
    } catch (e2) {
      console.error('Test also failed with category as string:', e2.message);
      // Try without category
      try {
        const body3 = {
          date: testEntry.sortDate,
          source: testEntry.publication,
          title: testEntry.title,
        };
        const testResult3 = await apiRequest('POST', '/media', body3);
        console.log('Test OK (without category):', testResult3.id);
      } catch (e3) {
        console.error('All tests failed:', e3.message);
        return;
      }
    }
  }

  await sleep(DELAY_MS);
  let success = 1, fail = 0;
  for (let i = 1; i < toImport.length; i++) {
    const entry = toImport[i];
    try {
      await apiRequest('POST', '/media', {
        date: entry.sortDate,
        source: entry.publication,
        title: entry.title,
        category: [entry.category],
      });
      success++;
    } catch (err) {
      // Retry without array wrapper for category
      try {
        await apiRequest('POST', '/media', {
          date: entry.sortDate,
          source: entry.publication,
          title: entry.title,
          category: entry.category,
        });
        success++;
      } catch (err2) {
        // Retry without category
        try {
          await apiRequest('POST', '/media', {
            date: entry.sortDate,
            source: entry.publication,
            title: entry.title,
          });
          success++;
        } catch (err3) {
          fail++;
          console.error(`\n  FAIL [${entry.title.substring(0, 30)}]: ${err3.message}`);
        }
      }
    }
    process.stdout.write(`\r  Progress: ${i + 1}/${toImport.length} (OK:${success} FAIL:${fail})`);
    await sleep(DELAY_MS);
  }
  console.log(`\nMedia done: ${success} success, ${fail} fail`);
}

// ============ MAIN ============
async function main() {
  console.log('microCMS Bulk Import Script');
  console.log(`API: ${BASE_URL}`);
  console.log(`Delay: ${DELAY_MS}ms between requests`);

  await importColumns();
  await importLectures();
  await importMedia();

  console.log('\n=== ALL DONE ===');
}

main().catch(console.error);
