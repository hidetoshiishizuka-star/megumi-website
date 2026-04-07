import type { Metadata } from "next";
import BooksClient from "./BooksClient";

export const metadata: Metadata = {
  title: "著書・メディア掲載・出演",
  description:
    "院長・小澤竹俊の著書13冊とメディア掲載・出演298件。専門誌・新聞・テレビ出演の実績一覧。",
};

export default function BooksPage() {
  return <BooksClient />;
}
