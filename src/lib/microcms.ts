import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

export const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

function getClient() {
  if (!client) {
    throw new Error(
      "microCMS client is not configured. Set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY."
    );
  }
  return client;
}

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
  body: string;
  category: string[];
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

export async function getStaffList() {
  const data = await getClient().getList<Staff>({
    endpoint: "staff",
    queries: { orders: "order", limit: 50 },
  });
  return data.contents;
}

export async function getNewsList(limit = 10) {
  const data = await getClient().getList<NewsItem>({
    endpoint: "news",
    queries: { orders: "-publishedAt", limit },
  });
  return data.contents;
}

export async function getBlogPosts(limit = 10) {
  const data = await getClient().getList<BlogPost>({
    endpoint: "blog",
    queries: { orders: "-publishedAt", limit },
  });
  return data.contents;
}

export async function getBlogPost(id: string) {
  return getClient().get<BlogPost>({
    endpoint: "blog",
    contentId: id,
  });
}

export async function getBooks() {
  const data = await getClient().getList<Book>({
    endpoint: "books",
    queries: { orders: "-publishedDate", limit: 50 },
  });
  return data.contents;
}
