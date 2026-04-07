import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "院長コラム",
  description:
    "院長・小澤竹俊のコラム。在宅医療・緩和ケア・ホスピスマインドについての考えを綴っています。",
};

export default function BlogPage() {
  return <BlogClient />;
}
