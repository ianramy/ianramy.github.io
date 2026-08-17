// src/components/SkillIcon.tsx

import type { StaticImageData } from "next/image";
import Image from "next/image";

export default function SkillIcon({
	src,
	alt,
	invertOnDark = false,
	className = "",
}: {
	src: StaticImageData | string;
	alt: string;
	invertOnDark?: boolean;
	className?: string;
}) {
	const imageSrc = typeof src === "string" ? src : src.src;

	// For monochrome icons (like Rust, Next.js, etc.)
	// We use the SVG as a mask and fill it with your text color.
	// Because your text color inherently contrasts with bg-(--color-bg-base),
	// this guarantees it is always visible regardless of the active theme variable.
	if (invertOnDark) {
		return (
			<div
				className={`relative flex items-center justify-center bg-(--color-text-primary) transition-colors duration-300 ${className}`.trim()}
				style={{
					maskImage: `url(${imageSrc})`,
					maskSize: "contain",
					maskRepeat: "no-repeat",
					maskPosition: "center",
					WebkitMaskImage: `url(${imageSrc})`,
					WebkitMaskSize: "contain",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskPosition: "center",
				}}
				title={alt}
				role="img"
				aria-label={alt}
			/>
		);
	}

	// For colored icons (like Python, HTML, Tailwind)
	return (
		<div
			className={`relative flex items-center justify-center saturate-150 contrast-110 ${className}`.trim()}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes="(max-width: 768px) 3rem, 4rem"
				className="object-contain"
			/>
		</div>
	);
}
