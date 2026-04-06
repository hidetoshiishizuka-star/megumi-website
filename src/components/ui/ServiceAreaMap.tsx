/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";

const CLINIC_LAT = 35.4628;
const CLINIC_LNG = 139.4963;
const RADIUS_M = 5000;

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Leaflet CSSを動的に追加
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Leaflet JSを動的にロード
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;

      if (!L || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [CLINIC_LAT, CLINIC_LNG],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // 国土地理院 淡色地図
      L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>',
        maxZoom: 18,
      }).addTo(map);

      // 5km圏の円
      L.circle([CLINIC_LAT, CLINIC_LNG], {
        radius: RADIUS_M,
        color: "#E87430",
        weight: 2,
        dashArray: "8 4",
        fillColor: "#E87430",
        fillOpacity: 0.06,
      }).addTo(map);

      // クリニックマーカー
      const icon = L.divIcon({
        html: `<div style="position:relative;width:36px;height:48px;">
          <div style="
            width:36px;height:36px;
            background:linear-gradient(135deg,#E87430 0%,#CC6020 100%);
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            box-shadow:2px 2px 8px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
          ">
            <div style="
              transform:rotate(45deg);
              color:white;font-size:18px;font-weight:bold;
              text-shadow:0 1px 2px rgba(0,0,0,0.3);
            ">+</div>
          </div>
          <div style="
            position:absolute;bottom:0;left:50%;
            transform:translateX(-50%);
            width:8px;height:8px;
            background:rgba(0,0,0,0.2);
            border-radius:50%;
            filter:blur(2px);
          "></div>
        </div>`,
        iconSize: [36, 48],
        iconAnchor: [18, 48],
        className: "",
      });

      const popupHtml = [
        "\x3cb\x3eめぐみ在宅クリニック\x3c/b\x3e",
        "横浜市瀬谷区橋戸2-4-3",
        "TEL: 045-300-6630",
      ].join("\x3cbr/\x3e");

      L.marker([CLINIC_LAT, CLINIC_LNG], { icon })
        .addTo(map)
        .bindPopup(popupHtml);
    };
    document.head.appendChild(script);

    return () => {
      // クリーンアップ
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      <div
        ref={mapRef}
        style={{ width: "100%", height: "450px" }}
      />
      <div className="bg-white px-4 py-3 flex flex-wrap gap-4 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-navy border-2 border-sunrise inline-block" />
          めぐみ在宅クリニック
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-5 h-0 border-t-2 border-dashed border-sunrise inline-block" />
          訪問対応エリア（5km以内）
        </span>
        <span className="text-text-muted">
          地図：国土地理院
        </span>
      </div>
    </div>
  );
}
