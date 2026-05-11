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
      <div className="bg-white px-4 py-3 flex flex-wrap gap-4 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-sunrise inline-block" />
          めぐみ在宅クリニック
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-sunrise/30 inline-block" />
          訪問対応エリア（おおむね5km以内）
        </span>
        <span className="text-text-muted">
          地図：Google Maps
        </span>
      </div>
    </div>
  );
}
