"use client";

export default function ServiceAreaMap() {
  // 瀬谷区橋戸2-4-3を中心とした5km圏内の区配置
  // 実際の地理的位置関係に基づいて配置
  const areas = [
    // 対応エリア（圏内）
    { name: "瀬谷区", x: 50, y: 50, inRange: true, note: "クリニック所在地" },
    { name: "泉区", x: 62, y: 68, inRange: true, note: "" },
    { name: "旭区", x: 62, y: 35, inRange: "partial" as const, note: "一部" },
    { name: "大和市", x: 30, y: 48, inRange: true, note: "" },
    // 圏外（参考表示）
    { name: "緑区", x: 75, y: 22, inRange: false, note: "" },
    { name: "戸塚区", x: 75, y: 75, inRange: false, note: "" },
    { name: "栄区", x: 82, y: 85, inRange: false, note: "" },
    { name: "港南区", x: 80, y: 60, inRange: false, note: "" },
    { name: "藤沢市", x: 42, y: 82, inRange: false, note: "" },
    { name: "海老名市", x: 18, y: 35, inRange: false, note: "" },
    { name: "綾瀬市", x: 25, y: 65, inRange: false, note: "" },
    { name: "座間市", x: 15, y: 50, inRange: false, note: "" },
  ];

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-auto">
        {/* 背景 */}
        <rect x="0" y="0" width="100" height="100" fill="#f5f5f7" rx="4" />

        {/* 5km圏の円 */}
        <circle
          cx="50" cy="50" r="28"
          fill="none"
          stroke="#4A6AAE"
          strokeWidth="0.4"
          strokeDasharray="1.5 0.8"
          opacity="0.5"
        />
        <circle
          cx="50" cy="50" r="28"
          fill="#4A6AAE"
          opacity="0.06"
        />

        {/* 3km圏の円（参考） */}
        <circle
          cx="50" cy="50" r="17"
          fill="none"
          stroke="#4A6AAE"
          strokeWidth="0.3"
          strokeDasharray="1 0.8"
          opacity="0.3"
        />

        {/* 区界線（概略） */}
        {/* 瀬谷区と泉区の境界 */}
        <path d="M 42 58 Q 55 56 68 60" fill="none" stroke="#86868b" strokeWidth="0.3" opacity="0.4" />
        {/* 瀬谷区と旭区の境界 */}
        <path d="M 45 38 Q 58 42 72 38" fill="none" stroke="#86868b" strokeWidth="0.3" opacity="0.4" />
        {/* 瀬谷区と大和市の境界 */}
        <path d="M 38 35 Q 40 48 38 65" fill="none" stroke="#86868b" strokeWidth="0.3" opacity="0.4" />
        {/* 旭区と緑区の境界 */}
        <path d="M 68 20 Q 72 28 75 35" fill="none" stroke="#86868b" strokeWidth="0.2" opacity="0.3" />

        {/* クリニック位置マーカー */}
        <circle cx="50" cy="50" r="1.5" fill="#192044" />
        <circle cx="50" cy="50" r="2.5" fill="none" stroke="#192044" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="4" fill="none" stroke="#E87430" strokeWidth="0.3" opacity="0.6" />

        {/* 距離ラベル */}
        <text x="50" y="33.5" textAnchor="middle" fontSize="2.2" fill="#4A6AAE" opacity="0.6">3km</text>
        <text x="50" y="22.5" textAnchor="middle" fontSize="2.2" fill="#4A6AAE" opacity="0.6">5km</text>

        {/* 区名ラベル */}
        {areas.map((area) => {
          const isIn = area.inRange === true;
          const isPartial = area.inRange === "partial";
          const isOut = area.inRange === false;

          return (
            <g key={area.name}>
              {/* 背景の丸角四角 */}
              {(isIn || isPartial) && (
                <rect
                  x={area.x - (area.name.length * 1.5 + 1)}
                  y={area.y - 2.8}
                  width={area.name.length * 3 + 2}
                  height={area.note ? 7.5 : 5.5}
                  rx="1.2"
                  fill={isIn ? "#192044" : "#4A6AAE"}
                  opacity={isIn ? 0.9 : 0.7}
                />
              )}
              <text
                x={area.x}
                y={area.y}
                textAnchor="middle"
                fontSize={isOut ? "2.5" : "3"}
                fontWeight={isOut ? "normal" : "bold"}
                fill={isOut ? "#86868b" : "#ffffff"}
              >
                {area.name}
              </text>
              {area.note && (
                <text
                  x={area.x}
                  y={area.y + 3.2}
                  textAnchor="middle"
                  fontSize="2"
                  fill={isOut ? "#86868b" : "#ffffff"}
                  opacity={0.8}
                >
                  {area.note}
                </text>
              )}
            </g>
          );
        })}

        {/* クリニック名 */}
        <text x="50" y="46" textAnchor="middle" fontSize="1.8" fill="#E87430" fontWeight="bold">
          めぐみ在宅クリニック
        </text>

        {/* 凡例 */}
        <rect x="3" y="90" width="3" height="2" rx="0.5" fill="#192044" opacity="0.9" />
        <text x="7.5" y="91.8" fontSize="2" fill="#4A5068">対応エリア</text>
        <rect x="22" y="90" width="3" height="2" rx="0.5" fill="#4A6AAE" opacity="0.7" />
        <text x="26.5" y="91.8" fontSize="2" fill="#4A5068">一部対応</text>
        <line x1="45" y1="91" x2="49" y2="91" stroke="#4A6AAE" strokeWidth="0.4" strokeDasharray="1.5 0.8" opacity="0.5" />
        <text x="50.5" y="91.8" fontSize="2" fill="#4A5068">5km圏</text>
      </svg>
    </div>
  );
}
