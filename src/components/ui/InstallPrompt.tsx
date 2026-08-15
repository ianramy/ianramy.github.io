// components/ui/InstallPrompt.tsx

"use client";

import { useEffect, useState } from "react";

/** Standardizing the non-standard PWA install event for strict TypeScript compliance */
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>;
	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed";
		platform: string;
	}>;
	prompt(): Promise<void>;
}

/**
 * Handles branched installation UX strictly adhering to Section 5.7 constraints.
 * Provides manual instructions for iOS Safari and programmatic button for Chromium.
 */
export default function InstallPrompt() {
	const [isIOS, setIsIOS] = useState(false);
	const [installPrompt, setInstallPrompt] =
		useState<BeforeInstallPromptEvent | null>(null);

	useEffect(() => {
		// 1. Service Worker Registration
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("/sw.js").catch(console.error);
		}

		// 2. Platform Detection for Branched Install Logic
		const ua = window.navigator.userAgent;
		const isIOSDevice = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
		const isStandalone = window.matchMedia(
			"(display-mode: standalone)",
		).matches;

		if (isIOSDevice && !isStandalone) {
			setIsIOS(true);
		}

		// 3. Chromium Install Listener
		const handleBeforeInstall = (e: Event) => {
			e.preventDefault();
			setInstallPrompt(e as BeforeInstallPromptEvent);
		};

		window.addEventListener("beforeinstallprompt", handleBeforeInstall);
		return () =>
			window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
	}, []);

	if (isIOS) {
		return (
			<div className="fixed bottom-0 left-0 w-full bg-background border-t border-foreground/10 p-4 z-50 text-center font-sans text-[10px] uppercase tracking-widest text-foreground">
				To install: Tap Share then "Add to Home Screen"
			</div>
		);
	}

	if (installPrompt) {
		return (
			<button
				type="button"
				onClick={() => {
					installPrompt.prompt().catch(console.error);
				}}
				className="fixed bottom-4 right-4 z-50 bg-foreground text-background px-4 py-2 font-sans text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
			>
				Install App
			</button>
		);
	}

	return null;
}
