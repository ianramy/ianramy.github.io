// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import {
	Footer,
	InstallPrompt,
	JsonLd,
	Navbar,
	ServiceWorkerRegistry,
} from "@/components";
import SmoothScrolling from "@/components/motion/SmoothScrolling";
import { ThemeProvider } from "@/hooks";
import { allFontVariables } from "@/utils";
import "@/styles/global.css";

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
	metadataBase: new URL("https://ianramy.co.ke"),
	title: {
		template: "%s | Ian Ramy",
		default:
			"Ian Ramy | Full-Stack Engineer, Data Scientist & CyberSecurity Analyst",
	},
	description:
		"I am a Full-Stack Secure Data Engineer bridging the critical gaps between scalable software architecture, machine learning, and zero-trust security. I build resilient, high-performance web systems using Next.js and React for the frontend & Python and Rust for the backend, engineered specifically to extract actionable intelligence from big data while remaining fortified against emerging cyber threats. Whether leading development at MwangaLabs or maintaining open-source infrastructure like Rustywoof, I design architectures that protect data integrity without compromising user experience or computational speed.",
	keywords: [
		"Next.js 16",
		"React",
		"TypeScript",
		"Software Engineering",
		"Software Development",
		"Full-Stack Development",
		"Full-Stack Secure Data Engineer",
		"Full-Stack Software Engineer",
		"Python",
		"Rust",
		"RustyWoof",
		"Machine Learning",
		"Data Science",
		"Cyber Security Analysis",
		"DevSecOps",
		"Threat Detection",
	],
	alternates: {
		canonical: "/",
	},
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
		title: "Ian Ramy | Full-Stack Secure Data Engineer",
		description:
			"Explore my technical architectures at the intersection of Software Engineering, Data Science, and Cyber Security.",
		url: "https://www.ianramy.co.ke",
		siteName: "Ian Ramy Portfolio",
		locale: "en_KE",
		type: "website",
		images: [
			{
				url: "/images/logo-black.jpg",
				width: 1200,
				height: 630,
				alt: "Ian Ramy | Full-Stack Engineer, Data Scientist & CyberSecurity Analyst",
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
				className={`${allFontVariables} bg-white text-slate-900 dark:bg-slate-900 dark:text-white antialiased`}
			>
				<JsonLd />
				<ServiceWorkerRegistry />
				<ThemeProvider>
					<SmoothScrolling>
						<Navbar />
						{children}
						<Footer />
					</SmoothScrolling>
				</ThemeProvider>
				<InstallPrompt />
			</body>
		</html>
	);
}
