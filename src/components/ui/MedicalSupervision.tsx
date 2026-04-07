import Image from "next/image";

export default function MedicalSupervision({ lastUpdated }: { lastUpdated?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "小澤竹俊",
    "jobTitle": "院長",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "めぐみ在宅クリニック"
    },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "緩和医療専門医" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "総合内科専門医" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border border-gray-200 rounded-xl p-5 flex items-start gap-4 mt-8">
        <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
          <Image src="/images/director-portrait.jpg" alt="院長 小澤竹俊" fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs text-text-muted mb-0.5">医療監修</p>
          <p className="text-sm font-bold text-navy">小澤竹俊（めぐみ在宅クリニック院長）</p>
          <p className="text-xs text-text-muted">緩和医療専門医・総合内科専門医・日本在宅医療連合学会認定指導医</p>
          {lastUpdated && (
            <p className="text-xs text-text-muted mt-2">最終更新日：{lastUpdated}</p>
          )}
        </div>
      </div>
    </>
  );
}
