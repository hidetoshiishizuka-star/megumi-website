import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  subtitle?: string;
  invertColors?: boolean;
};

const sizes = {
  sm: { badge: 36, img: 28 },
  md: { badge: 44, img: 34 },
  lg: { badge: 64, img: 50 },
};

export default function Logo({
  size = "md",
  showText = true,
  subtitle,
  invertColors = false,
}: LogoProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      {/* 常に白背景の丸バッジ — 暗い背景でも透けない */}
      <div
        className="relative flex-shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm"
        style={{ width: s.badge, height: s.badge }}
      >
        <Image
          src="/images/usagi-original.png"
          alt="めぐみうさぎ"
          width={s.img}
          height={s.img}
          className="object-contain"
          style={{ marginTop: 2 }}
        />
      </div>
      {showText && (
        <div>
          <span
            className={`font-semibold tracking-tight transition-colors duration-300 ${
              size === "lg" ? "text-2xl" : size === "md" ? "text-lg" : "text-[15px]"
            } ${invertColors ? "text-white" : "text-navy-dark"}`}
          >
            めぐみ在宅クリニック
          </span>
          {subtitle && (
            <span className={`block text-xs transition-colors duration-300 ${invertColors ? "text-white/60" : "text-text-muted"}`}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
