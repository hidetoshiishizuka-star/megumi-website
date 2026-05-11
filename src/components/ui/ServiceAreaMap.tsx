import Image from "next/image";

export default function ServiceAreaMap() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      <div className="relative w-full" style={{ aspectRatio: "664 / 615" }}>
        <Image
          src="/images/service-area-map.jpg"
          alt="めぐみ在宅クリニック 訪問対応エリア（おおむね5km圏内）"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
