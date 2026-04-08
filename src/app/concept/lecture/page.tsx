import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LectureClient from "./LectureClient";
import { getLectureList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "講演・執筆依頼｜小澤竹俊｜在宅緩和ケア",
  description:
    "院長・小澤竹俊への講演・執筆のご依頼。ホスピスマインド・エンドオブライフケア・いのちの授業をテーマに全国130件以上の講演実績。お問い合わせフォームから。",
};

export default async function LecturePage() {
  const cmsLectures = await getLectureList().catch(() => []);

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "院長・コンセプト", href: "/concept/about" },
        { label: "講演・執筆依頼" },
      ]} />
      <LectureClient lecturesFromServer={cmsLectures} />
    </>
  );
}
