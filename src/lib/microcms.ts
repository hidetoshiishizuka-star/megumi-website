import { createClient } from "microcms-js-sdk";
import type { StaffMember } from "@/data/staff";
import type { MediaEntry } from "@/data/media";
import type { LectureRecord } from "@/data/lectures";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

export const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

// ========================================
// 型定義
// ========================================

export type Staff = {
  id: string;
  name: string;
  role: string;
  photo?: {
    url: string;
    width: number;
    height: number;
  };
  message?: string;
  order: number;
  publishedAt?: string;
};

export type NewsItem = {
  id: string;
  title: string;
  tag?: string;
  link?: string;
  publishedAt: string;
};

export type BlogPost = {
  id: string;
  title: string;
  body: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  author: string;
  publishedAt: string;
};

export type Book = {
  id: string;
  title: string;
  description: string;
  cover?: {
    url: string;
    width: number;
    height: number;
  };
  amazonUrl?: string;
  publishedDate: string;
};

// ========================================
// API関数
// ========================================

/**
 * microCMS staff APIからスタッフ一覧を取得し、StaffMember型にマッピング
 * microCMS未設定時は空配列を返す（呼び出し側でフォールバック処理）
 */
export async function getStaffList(): Promise<StaffMember[]> {
  if (!client) return [];
  const data = await client.getList<Record<string, unknown>>({
    endpoint: "staff",
    queries: { orders: "order", limit: 50 },
  });
  return data.contents.map((item) => ({
    name: (item.name as string) || "",
    nameKana: (item.nameKana as string) || undefined,
    role: (item.role as string) || "",
    department:
      ((item.department as string) as StaffMember["department"]) || "マネジメント",
    specialty: (item.specialty as string) || undefined,
    certifications: item.certifications
      ? (item.certifications as string).split(" / ").filter(Boolean)
      : undefined,
    societies: item.societies
      ? (item.societies as string).split(" / ").filter(Boolean)
      : undefined,
    interests: item.interests
      ? (item.interests as string).split(" / ").filter(Boolean)
      : undefined,
    description: (item.message as string) || undefined,
    hasPhoto: !!(item.photo as Record<string, unknown> | undefined),
    photoFile: undefined,
    // microCMS CDNの完全URLをphotoUrlに格納
    photoUrl:
      (item.photo as { url?: string } | undefined)?.url || undefined,
  }));
}

/**
 * microCMS news APIからお知らせ一覧を取得
 * microCMS未設定時は空配列を返す
 */
export async function getNewsList(
  limit = 10
): Promise<
  { date: string; title: string; category?: string; link?: string }[]
> {
  if (!client) return [];
  const data = await client.getList<NewsItem>({
    endpoint: "news",
    queries: { orders: "-publishedAt", limit },
  });
  return data.contents.map((item) => ({
    date: formatDate(item.publishedAt),
    title: item.title,
    category: item.tag || undefined,
    link: item.link || undefined,
  }));
}

export async function getBlogPosts(limit = 10) {
  if (!client) return [];
  const data = await client.getList<BlogPost>({
    endpoint: "blog",
    queries: { orders: "-publishedAt", limit },
  });
  return data.contents;
}

export async function getBlogPost(id: string) {
  if (!client) return null;
  return client.get<BlogPost>({
    endpoint: "blog",
    contentId: id,
  });
}

export async function getBookList(): Promise<
  { title: string; publisher: string; date: string; coverImage: string }[]
> {
  if (!client) return [];
  const data = await client.getList<Record<string, unknown>>({
    endpoint: "books",
    queries: { limit: 50 },
  });
  return data.contents
    .map((item) => ({
      title: (item.title as string) || "",
      publisher: (item.publisher as string) || "",
      date: (item.date as string) || "",
      coverImage: (item.coverImage as { url?: string } | undefined)?.url || "",
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * microCMS media APIからメディア掲載一覧を取得
 * microCMS未設定時は空配列を返す
 */
export async function getMediaList(): Promise<MediaEntry[]> {
  if (!client) return [];
  const allContents: Record<string, unknown>[] = [];
  let offset = 0;
  const limit = 100;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = await client.getList<Record<string, unknown>>({
      endpoint: "media",
      queries: { limit, offset },
    });
    allContents.push(...data.contents);
    if (allContents.length >= data.totalCount) break;
    offset += limit;
  }
  return allContents
    .map((item) => ({
      category: ((item.category as string) || "") as MediaEntry["category"],
      publication: (item.source as string) || "",
      title: (item.title as string) || "",
      details: "",
      sortDate: (item.date as string) || "",
    }))
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

/**
 * microCMS lectures APIから講演実績一覧を取得
 * microCMS未設定時は空配列を返す
 */
export async function getLectureList(): Promise<LectureRecord[]> {
  if (!client) return [];
  const allContents: Record<string, unknown>[] = [];
  let offset = 0;
  const limit = 100;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = await client.getList<Record<string, unknown>>({
      endpoint: "lectures",
      queries: { limit, offset },
    });
    allContents.push(...data.contents);
    if (allContents.length >= data.totalCount) break;
    offset += limit;
  }
  return allContents
    .map((item) => ({
      year: (item.year as number) || 0,
      date: (item.date as string) || "",
      title: (item.title as string) || "",
      location: (item.location as string) || "",
    }))
    .sort((a, b) => b.year - a.year || b.date.localeCompare(a.date));
}

// ========================================
// ユーティリティ
// ========================================

/** ISO日付文字列を "YYYY.MM.DD" 形式に変換 */
function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
