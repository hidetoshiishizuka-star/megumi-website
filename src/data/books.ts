export interface Book {
  title: string;
  publisher: string;
  date: string;
  author: string;
  coverImage: string; // /images/books/ 内のファイル名
}

export const books: Book[] = [
  {
    title: "だから、あなたも幸せになれる",
    publisher: "大和出版",
    date: "2025-05",
    author: "小澤竹俊",
    coverImage: "book-13.jpg",
  },
  {
    title: "あなたの強さは、あなたの弱さから生まれる",
    publisher: "アスコム",
    date: "2022-04",
    author: "小澤竹俊",
    coverImage: "book-12.jpg",
  },
  {
    title: "もしあと1年で人生が終わるとしたら?",
    publisher: "アスコム",
    date: "2021-03",
    author: "小澤竹俊",
    coverImage: "book-11.jpg",
  },
  {
    title: "苦しみのない人生はないが、幸せはすぐ隣にある",
    publisher: "幻冬舎",
    date: "2020-09",
    author: "小澤竹俊",
    coverImage: "book-10.jpg",
  },
  {
    title: "折れない心を育てる いのちの授業",
    publisher: "KADOKAWA",
    date: "2019-08",
    author: "小澤竹俊",
    coverImage: "book-9.jpg",
  },
  {
    title: "死を前にした人に あなたは何ができますか?",
    publisher: "医学書院",
    date: "2017-08",
    author: "小澤竹俊",
    coverImage: "book-8.jpg",
  },
  {
    title: "苦しみの中でも幸せは見つかる 改訂版",
    publisher: "扶桑社",
    date: "2017-06",
    author: "小澤竹俊",
    coverImage: "book-7.jpg",
  },
  {
    title: "2800人を看取った医師が教える 人生の意味が見つかるノート",
    publisher: "アスコム",
    date: "2017-01",
    author: "小澤竹俊",
    coverImage: "book-6.jpg",
  },
  {
    title: "今日が人生最後の日だと思って生きなさい",
    publisher: "アスコム",
    date: "2016-01",
    author: "小澤竹俊",
    coverImage: "book-5.jpg",
  },
  {
    title: "小澤竹俊の緩和ケア読本",
    publisher: "日本医事新報社",
    date: "2012-08",
    author: "小澤竹俊",
    coverImage: "book-1.jpg",
  },
  {
    title: "医療者のための実践スピリチュアルケア",
    publisher: "日本医事新報社",
    date: "2008-03",
    author: "小澤竹俊",
    coverImage: "book-2.jpg",
  },
  {
    title: "いのちはなぜ大切なのか",
    publisher: "ちくまプリマー新書",
    date: "2007-09",
    author: "小澤竹俊",
    coverImage: "book-3.jpg",
  },
  {
    title: "13歳からの「いのちの授業」",
    publisher: "大和出版",
    date: "2006-06",
    author: "小澤竹俊",
    coverImage: "book-4.jpg",
  },
];
