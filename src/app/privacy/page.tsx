// src/app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Privacy policy and data handling practices for this developer portfolio.",
};

export default function PrivacyPage() {
	return (
		<main className="container mx-auto px-4 py-12 max-w-4xl">
			<section>
				<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
				<p className="mb-4">
					This privacy policy establishes how data is collected and utilized on
					this portfolio. As a static showcase, no personal analytics or
					tracking cookies are employed without explicit consent.
				</p>
			</section>
		</main>
	);
}
