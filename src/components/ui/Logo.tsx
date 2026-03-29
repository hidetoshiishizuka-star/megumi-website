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
      <div
        className={`relative flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden border-2 transition-colors duration-300 ${
          invertColors
            ? "bg-white/10 border-white/20"
            : "bg-navy/10 border-navy/20"
        }`}
        style={{ width: s.badge, height: s.badge }}
      >
        <Image
          src="/images/usagi-original.png"
          alt="めぐみうさぎ"
          width={s.img}
          height={s.img}
          className={`object-contain transition-all duration-300 ${invertColors ? "brightness-0 invert" : ""}`}
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
