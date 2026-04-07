import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "めぐみ在宅クリニック｜瀬谷区の在宅医療・訪問診療・往診",
    template: `%s | ${SITE_NAME}`,
  },
  description: "横浜市瀬谷区の在宅医療・訪問診療・往診クリニック。瀬谷駅徒歩9分。24時間365日対応、緩和ケア専門医在籍。三ツ境駅周辺も対応。通院が困難な方のご自宅に医師が訪問します。",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: '/images/hero-visit.jpg',
        width: 1600,
        height: 1068,
        alt: 'めぐみ在宅クリニック - 訪問診療の様子',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-text-primary bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "めぐみ在宅クリニック",
              "alternateName": "Megumi Home Care Clinic",
              "url": "https://www.megumizaitaku.jp",
              "telephone": "045-300-6630",
              "faxNumber": "045-300-6631",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "橋戸2-4-3",
                "addressLocality": "横浜市瀬谷区",
                "addressRegion": "神奈川県",
                "postalCode": "246-0037",
                "addressCountry": "JP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.4628,
                "longitude": 139.4963
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "founder": {
                "@type": "Person",
                "name": "小澤竹俊",
                "jobTitle": "院長"
              },
              "medicalSpecialty": ["緩和医療", "在宅医療", "総合内科"],
              "areaServed": ["横浜市瀬谷区", "横浜市泉区", "横浜市旭区", "大和市"],
              "description": "横浜市瀬谷区で20年。通院が困難な方の在宅医療を支えるクリニック。24時間365日対応。"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
