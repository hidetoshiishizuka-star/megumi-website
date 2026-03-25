import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  subtitle?: string;
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
}: LogoProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      {/* Rabbit in a styled green circle badge */}
      <div
        className="relative flex-shrink-0 rounded-full bg-forest/10 border-2 border-forest/20 flex items-center justify-center overflow-hidden"
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
            className={`font-bold text-forest-dark tracking-tight ${
              size === "lg" ? "text-2xl" : size === "md" ? "text-lg" : "text-base"
            }`}
          >
            めぐみ在宅クリニック
          </span>
          {subtitle && (
            <span className="block text-xs text-text-muted">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
}
