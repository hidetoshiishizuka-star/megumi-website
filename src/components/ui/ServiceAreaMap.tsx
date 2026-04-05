"use client";

export default function ServiceAreaMap() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      <svg viewBox="0 0 500 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* 背景 */}
        <rect x="0" y="0" width="500" height="500" fill="#f8f9fa" rx="16" />

        {/* === 区・市の塗り分け === */}
        {/* 大和市（対応エリア） */}
        <path
          d="M 40 100 L 40 400 L 185 420 L 195 380 L 200 340 L 195 280 L 200 220 L 195 160 L 190 120 L 170 80 Z"
          fill="#E8EEF8" stroke="#b0bec5" strokeWidth="1.5"
        />
        {/* 瀬谷区（クリニック所在地） */}
        <path
          d="M 190 120 L 195 160 L 200 220 L 195 280 L 200 340 L 195 380 L 300 400 L 310 340 L 305 280 L 310 220 L 305 170 L 290 120 Z"
          fill="#D5E0F0" stroke="#b0bec5" strokeWidth="1.5"
        />
        {/* 旭区（一部対応） */}
        <path
          d="M 290 120 L 305 170 L 310 220 L 305 280 L 310 340 L 300 400 L 300 340 L 410 300 L 430 230 L 420 160 L 380 100 L 320 80 Z"
          fill="#EDF1F6" stroke="#b0bec5" strokeWidth="1.5"
        />
        {/* 泉区（対応エリア） */}
        <path
          d="M 195 380 L 185 420 L 200 470 L 340 470 L 370 430 L 340 380 L 300 400 Z"
          fill="#E8EEF8" stroke="#b0bec5" strokeWidth="1.5"
        />
        {/* 戸塚区（圏外） */}
        <path
          d="M 300 400 L 340 380 L 370 430 L 410 400 L 460 430 L 460 470 L 340 470 Z"
          fill="#f0f0f0" stroke="#b0bec5" strokeWidth="1"
        />
        {/* 緑区（圏外） */}
        <path
          d="M 380 100 L 420 160 L 430 230 L 460 220 L 460 80 L 400 60 Z"
          fill="#f0f0f0" stroke="#b0bec5" strokeWidth="1"
        />
        {/* 港南区付近（圏外） */}
        <path
          d="M 410 300 L 430 230 L 460 220 L 460 340 L 460 430 L 410 400 L 370 430 L 340 380 Z"
          fill="#f0f0f0" stroke="#b0bec5" strokeWidth="1"
        />
        {/* 綾瀬市・座間市方面（圏外） */}
        <path
          d="M 40 100 L 170 80 L 190 120 L 290 120 L 320 80 L 380 100 L 400 60 L 460 80 L 460 30 L 0 30 L 0 100 Z"
          fill="#f0f0f0" stroke="#b0bec5" strokeWidth="1"
        />
        {/* 藤沢市方面（圏外） */}
        <path
          d="M 40 400 L 185 420 L 200 470 L 0 470 L 0 400 Z"
          fill="#f0f0f0" stroke="#b0bec5" strokeWidth="1"
        />

        {/* === 区界線（はっきりと） === */}
        {/* 瀬谷区−大和市の境界 */}
        <path
          d="M 190 120 L 195 160 L 200 220 L 195 280 L 200 340 L 195 380"
          fill="none" stroke="#78909c" strokeWidth="2"
        />
        {/* 瀬谷区−旭区の境界 */}
        <path
          d="M 290 120 L 305 170 L 310 220 L 305 280 L 310 340 L 300 400"
          fill="none" stroke="#78909c" strokeWidth="2"
        />
        {/* 瀬谷区−泉区の境界 */}
        <path
          d="M 195 380 L 300 400"
          fill="none" stroke="#78909c" strokeWidth="2"
        />
        {/* 大和市−泉区の境界 */}
        <path
          d="M 185 420 L 195 380"
          fill="none" stroke="#78909c" strokeWidth="1.5"
        />
        {/* 泉区−戸塚区の境界 */}
        <path
          d="M 300 400 L 340 380 L 370 430"
          fill="none" stroke="#78909c" strokeWidth="1.5"
        />
        {/* 旭区−緑区の境界 */}
        <path
          d="M 380 100 L 420 160 L 430 230"
          fill="none" stroke="#78909c" strokeWidth="1.5"
        />
        {/* 旭区−港南区等の境界 */}
        <path
          d="M 430 230 L 410 300 L 340 380"
          fill="none" stroke="#78909c" strokeWidth="1.5"
        />

        {/* === 5km圏の円 === */}
        <circle
          cx="248" cy="270" r="145"
          fill="none"
          stroke="#E87430"
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.7"
        />

        {/* === 3km圏の円 === */}
        <circle
          cx="248" cy="270" r="87"
          fill="none"
          stroke="#E87430"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          opacity="0.4"
        />

        {/* === クリニック位置 === */}
        <circle cx="248" cy="270" r="6" fill="#192044" />
        <circle cx="248" cy="270" r="10" fill="none" stroke="#E87430" strokeWidth="2" />

        {/* === 区・市名ラベル === */}
        {/* 瀬谷区 */}
        <text x="248" y="215" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#192044">瀬谷区</text>

        {/* 大和市 */}
        <text x="120" y="260" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#192044">大和市</text>

        {/* 泉区 */}
        <text x="260" y="435" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#192044">泉区</text>

        {/* 旭区 */}
        <text x="355" y="230" textAnchor="middle" fontSize="16" fill="#4A6AAE" fontWeight="bold">旭区</text>
        <text x="355" y="248" textAnchor="middle" fontSize="11" fill="#4A6AAE">（一部）</text>

        {/* 圏外エリア名 */}
        <text x="440" y="170" textAnchor="middle" fontSize="13" fill="#aaa">緑区</text>
        <text x="430" y="360" textAnchor="middle" fontSize="13" fill="#aaa">港南区</text>
        <text x="430" y="450" textAnchor="middle" fontSize="13" fill="#aaa">戸塚区</text>
        <text x="100" y="455" textAnchor="middle" fontSize="13" fill="#aaa">藤沢市</text>
        <text x="80" y="95" textAnchor="middle" fontSize="13" fill="#aaa">座間市</text>
        <text x="230" y="75" textAnchor="middle" fontSize="13" fill="#aaa">綾瀬市</text>

        {/* クリニック名 */}
        <text x="248" y="298" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E87430">めぐみ在宅クリニック</text>

        {/* 距離ラベル */}
        <text x="248" y="178" textAnchor="middle" fontSize="11" fill="#E87430" opacity="0.7">5km</text>
        <text x="248" y="198" textAnchor="middle" fontSize="10" fill="#E87430" opacity="0.5">3km</text>

        {/* === 凡例 === */}
        <rect x="20" y="475" width="12" height="10" rx="2" fill="#D5E0F0" stroke="#78909c" strokeWidth="0.5" />
        <text x="36" y="484" fontSize="10" fill="#4A5068">対応エリア</text>
        <rect x="110" y="475" width="12" height="10" rx="2" fill="#EDF1F6" stroke="#78909c" strokeWidth="0.5" />
        <text x="126" y="484" fontSize="10" fill="#4A5068">一部対応</text>
        <line x1="200" y1="480" x2="220" y2="480" stroke="#E87430" strokeWidth="2" strokeDasharray="5 3" opacity="0.7" />
        <text x="225" y="484" fontSize="10" fill="#4A5068">5km圏</text>
        <circle cx="290" cy="480" r="4" fill="#192044" />
        <text x="298" y="484" fontSize="10" fill="#4A5068">クリニック</text>
      </svg>
    </div>
  );
}
