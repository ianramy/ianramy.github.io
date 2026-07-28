// src/app/terms/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Terms and conditions for utilizing this developer portfolio.",
};

export default function TermsPage() {
	return (
		<main className="container mx-auto px-4 py-12 max-w-4xl">
			<section>
				<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
				<p className="mb-4">
					By accessing this portfolio, you agree to these terms. All open-source
					projects listed are subject to their respective repository licenses.
				</p>
			</section>
		</main>
	);
}
