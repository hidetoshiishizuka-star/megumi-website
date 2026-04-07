import type { Metadata } from "next";
import LectureClient from "./LectureClient";

export const metadata: Metadata = {
  title: "講演・執筆依頼",
  description:
    "院長・小澤竹俊への講演・執筆のご依頼。ホスピスマインド・エンドオブライフケアをテーマに全国で講演活動を行っています。",
};

export default function LecturePage() {
  return <LectureClient />;
}
