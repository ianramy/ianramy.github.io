// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components/layout";
import SmoothScrolling from "@/components/motion/SmoothScrolling";
import { ThemeProvider } from "@/hooks";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f172a" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL("https://www.ianramy.co.ke"),
	title: {
		template: "%s | Developer Portfolio",
		default: "Ian Ramy",
	},
	description:
		"Experienced Senior Frontend Engineer specializing in Next.js, React, and high-performance web applications.",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Software Engineer Portfolio",
		description:
			"Explore my projects, skills, and professional experience in modern web development.",
		url: "https://www.ianramy.co.ke",
		siteName: "Developer Portfolio",
		locale: "en_GB",
		type: "website",
		images: [
			{
				url: "/images/logo-black.jpg",
				width: 1200,
				height: 630,
				alt: "Developer Portfolio Preview Image",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} bg-white text-slate-900 dark:bg-slate-900 dark:text-white antialiased`}
			>
				<ThemeProvider>
					<SmoothScrolling>
						<Navbar />
						{children}
						<Footer />
					</SmoothScrolling>
				</ThemeProvider>
			</body>
		</html>
	);
}
