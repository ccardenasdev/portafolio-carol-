import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Polaroid.module.css";

export default function Polaroid({
  label,
  caption,
  tone = "peach",
  rotate = 0,
  size = "sm",
  image,
  imagePosition = "center",
}: {
  label: string;
  caption?: string;
  tone?: "peach" | "rose" | "sky" | "lavender" | "mint";
  rotate?: number;
  size?: "sm" | "lg";
  image?: string;
  imagePosition?: string;
}) {
  return (
    <figure
      className={styles.polaroid}
      data-tone={tone}
      data-size={size}
      style={{ "--rotate": `${rotate}deg` } as CSSProperties}
    >
      <div className={styles.photo}>
        {image ? (
          <Image
            src={image}
            alt={caption ?? label}
            fill
            sizes="200px"
            style={{ objectFit: "cover", objectPosition: imagePosition }}
          />
        ) : (
          <span>{label}</span>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
