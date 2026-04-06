import Image from "next/image";

export default function ServiceAreaMap() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-sm">
        <Image
          src="/images/service-area-map.jpg"
          alt="訪問対応エリア — クリニックから5km以内（瀬谷区・泉区・大和市・旭区の一部）"
          width={1400}
          height={1400}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-4 justify-center text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-navy inline-block" />
          クリニック
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-6 h-0.5 border-t-2 border-dashed border-sunrise inline-block" />
          5km圏
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-6 h-0.5 border-t border-dashed border-sunrise/50 inline-block" />
          3km圏
        </span>
      </div>
    </div>
  );
}
