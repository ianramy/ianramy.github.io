// src/components/seo/JsonLd.tsx

export default function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Ian Ramy",
			alternateName: "ianramy",
			jobTitle: "Full-Stack Software Engineer",
			knowsAbout: [
				"Software Engineering",
				"Data Science",
				"Cyber Security Analysis",
				"Machine Learning",
				"DevSecOps",
			],
			url: "https://ianramy.co.ke",
			worksFor: {
				"@type": "Organization",
				name: "MwangaLabs",
				url: "https://mwangalabs.co.ke",
			},
			owns: {
				"@type": "SoftwareApplication",
				name: "RustyWoof",
				applicationCategory: "SecurityApplication",
				url: "https://ianramy.co.ke/rustywoof",
			},
			alumniOf: {
				"@type": "CollegeOrUniversity",
				name: "Moringa School",
				url: "https://moringaschool.com",
				
			},
			description:
				"Full-Stack Secure Data Engineer specializing in Next.js, Rust-based, Machine Learning, and Zero-Trust Security architectures.",
			sameAs: [
				"https://github.com/ianramy",
				"https://linkedin.com/in/ian-ramy",
				"https://www.instagram.com/ian_ramy/",
				"https://www.discordapp.com/users/1366810539854008360/",
			],
		},
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for injecting structured schema data safely
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
