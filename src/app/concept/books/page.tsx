import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BooksClient from "./BooksClient";
import { getBookList, getMediaList } from "@/lib/microcms";
import { books as fallbackBooks } from "@/data/books";

export const metadata: Metadata = {
  title: "著書・メディア掲載｜小澤竹俊｜めぐみ在宅",
  description:
    "院長・小澤竹俊の著書13冊とメディア掲載・出演298件の実績一覧。NHKプロフェッショナル出演、著書多数。専門誌・新聞・テレビ出演歴。",
};

export default async function BooksPage() {
  const cmsBooks = await getBookList().catch(() => []);
  const booksData = cmsBooks.length > 0
    ? cmsBooks.map((b) => ({
        ...b,
        author: "小澤竹俊",
        coverImage: fallbackBooks.find((fb) => fb.title === b.title)?.coverImage || "",
      }))
    : fallbackBooks;

  const cmsMedia = await getMediaList().catch(() => []);

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "院長・コンセプト", href: "/concept/about" },
        { label: "著書・メディア掲載" },
      ]} />
      <BooksClient booksFromServer={booksData} mediaFromServer={cmsMedia} />
    </>
  );
}
