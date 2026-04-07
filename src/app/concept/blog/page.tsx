import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "院長コラム｜小澤竹俊｜めぐみ在宅クリニック",
  description:
    "院長・小澤竹俊のコラム144件。在宅医療・緩和ケア・ホスピスマインド・いのちの授業について。横浜市瀬谷区のめぐみ在宅クリニック。",
};

export default function BlogPage() {
  return <BlogClient />;
}
