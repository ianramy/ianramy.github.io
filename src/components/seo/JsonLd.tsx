// src/components/seo/JsonLd.tsx

function safeJsonLd(data: unknown): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ProfilePage",
				"@id": "https://ianramy.co.ke/#profilepage",
				url: "https://ianramy.co.ke",
				mainEntity: { "@id": "https://ianramy.co.ke/#person" },
			},
			{
				"@type": "Person",
				"@id": "https://ianramy.co.ke/#person",
				name: "Ian Ramy",
				alternateName: ["ianramy", "Ian Mwagore"],
				disambiguatingDescription:
					"Ian Ramy (online handle name for Ian Mwagore) is a software engineer and open-source maintainer. He is the creator & sole maintainer of Rustywoof and Co-Founder & CTO of Mwangalabs.",
				jobTitle: [
					"Full-Stack Software Engineer",
					"Creator & Sole Maintainer, Rustywoof",
					"Co-Founder & CTO, Mwangalabs",
				],
				description:
					"Full-Stack Secure Data Engineer specializing in TypeScript, Rust, Machine Learning, and Zero-Trust Security architectures.",
				knowsAbout: [
					"Software Engineering",
					"Data Science",
					"Cyber Security Analysis",
					"Machine Learning",
					"DevSecOps",
					"Zero-Trust Architecture",
				],
				url: "https://ianramy.co.ke",
				worksFor: {
					"@type": "Organization",
					name: "MwangaLabs",
					url: "https://mwangalabs.com",
				},
				image: "https://ianramy.co.ke/images/logo-black.jpg",
				alumniOf: {
					"@type": "CollegeOrUniversity",
					name: "Moringa School",
					url: "https://moringaschool.com",
				},
				owns: { "@id": "https://ianramy.co.ke/#rustywoof" },
				sameAs: [
					"https://github.com/ianramy",
					"https://www.linkedin.com/in/ian-ramy",
					"https://www.instagram.com/ian_ramy/",
				],
			},
			{
				"@type": "SoftwareSourceCode",
				"@id": "https://ianramy.co.ke/#rustywoof",
				name: "Rustywoof",
				author: { "@id": "https://ianramy.co.ke/#person" },
				description:
					"A high-performance, memory-safe command-line secret scanner and supply-chain defense tool, written in Rust, that detects exposed cryptographic credentials, leaked API keys, and vulnerable or compromised dependencies.",
				programmingLanguage: "Rust",
				codeRepository: "https://github.com/ianramy/rustywoof",
				sameAs: [
					"https://crates.io/crates/rustywoof",
					"https://www.npmjs.com/package/@ianramy/rustywoof",
					"https://pypi.org/project/rustywoof/",
				],
			},
			{
				"@type": "WebSite",
				"@id": "https://resonancemedical.co.ke/#website",
				name: "Resonance Medical Company Limited",
				url: "https://resonancemedical.co.ke",
				creator: { "@id": "https://ianramy.co.ke/#person" },
				about: {
					"@type": "Organization",
					name: "Resonance Medical Company Limited",
					description:
						"A medical equipment distribution and precision engineering company operating across East and Central Africa.",
				},
			},
		],
	};

	return (
		<script type="application/ld+json">{safeJsonLd(structuredData)}</script>
	);
}
