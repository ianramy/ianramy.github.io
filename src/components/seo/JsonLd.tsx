// src/components/seo/JsonLd.tsx

export default function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": ["ProfilePage", "Person"],
		name: "Ian Ramy",
		jobTitle: [
			"Software Engineer",
			"Data Scientist",
			"Cyber Security Analyst",
			"CTO",
		],
		url: "https://www.ianramy.co.ke",
		worksFor: {
			"@type": "Organization",
			name: "MwangaLabs",
		},
		alumniOf: {
			"@type": "Organization",
			name: "RustyWoof",
		},
		description:
			"Full-Stack Secure Data Engineer specializing in Next.js, Rust-based, Machine Learning, and Zero-Trust Security architectures.",
		sameAs: ["https://github.com/ianramy", "https://linkedin.com/in/ian-ramy"],
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for injecting structured schema data safely
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
