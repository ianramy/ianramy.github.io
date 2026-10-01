// src/components/seo/JsonLd.tsx

import Script from "next/script";

interface PersonNode {
	"@type": "Person";
	"@id": string;
	name: string;
	alternateName?: string[];
	disambiguatingDescription?: string;
	jobTitle?: string[];
	description?: string;
	knowsAbout?: string[];
	url: string;
	worksFor?: {
		"@type": "Organization";
		name: string;
		url?: string;
	};
	image?: string;
	alumniOf?: {
		"@type": "CollegeOrUniversity" | "Organization";
		name: string;
		url?: string;
	};
	owns?: { "@id": string } | { "@id": string }[];
	sameAs?: string[];
}

interface ProfilePageNode {
	"@type": "ProfilePage";
	"@id": string;
	url: string;
	mainEntity: { "@id": string };
}

interface SoftwareSourceCodeNode {
	"@type": "SoftwareSourceCode";
	"@id": string;
	name: string;
	author: { "@id": string };
	description?: string;
	programmingLanguage?: string;
	codeRepository?: string;
	sameAs?: string[];
}

interface WebSiteNode {
	"@type": "WebSite";
	"@id": string;
	name: string;
	url: string;
	creator?: { "@id": string };
	about?: {
		"@type": "Organization";
		name: string;
		description?: string;
	};
}

type GraphNode =
	| ProfilePageNode
	| PersonNode
	| SoftwareSourceCodeNode
	| WebSiteNode;

interface StructuredData {
	"@context": "https://schema.org";
	"@graph": GraphNode[];
}

function safeJsonLd(data: unknown): string {
	// Escape characters that could break out of the <script> context
	// or be (mis)interpreted by the HTML parser.
	return JSON.stringify(data)
		.replace(/</g, "\\u003c")
		.replace(/>/g, "\\u003e")
		.replace(/&/g, "\\u0026")
		.replace(/\u2028/g, "\\u2028")
		.replace(/\u2029/g, "\\u2029");
}

export default function JsonLd() {
	const _structuredData: StructuredData = {
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
		<Script
			id="person-jsonld"
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script injection; content is server-generated and escaped via safeJsonLd()
			dangerouslySetInnerHTML={{ __html: safeJsonLd(_structuredData) }}
		/>
	);
}
