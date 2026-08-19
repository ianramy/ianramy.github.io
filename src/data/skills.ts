// src/data/skills.ts

import {
	CSS,
	Django,
	Fastapi,
	Figma,
	Git,
	Github,
	HTML,
	MySQL,
	NextJs,
	Node,
	Pnpm,
	PostgreSQL,
	Python,
	React2,
	Redux,
	Rust,
	SqlAlchemy,
	Sqlite,
	Tailwind,
	TypeScript,
	Vercel,
	Vite,
	Vscode,
	Zed,
} from "@/assets";
import { calculateExperience } from "@/utils";

export const skillGroups = [
	{
		category: "Languages",
		items: [
			{
				title: "Python",
				icon: Python,
				invertOnDark: false,
				description: `Primary language for scripting and data pipelines.`,
				years: calculateExperience("2024-09-01"),
			},
			{
				title: "TypeScript",
				icon: TypeScript,
				invertOnDark: false,
				description: `Standard for my Frontend codebases since strict typing keeps data flow predictable and refactors safe.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "Rust",
				icon: Rust,
				invertOnDark: true,
				description: `Used for systems-level work where memory safety and performance matter. The reason why Rustywoof is built on it.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "HTML5",
				icon: HTML,
				invertOnDark: false,
				description: `The semantic foundation of every frontend I build due to accessibility and structure first.`,
				years: calculateExperience("2024-06-01"),
			},
			{
				title: "CSS3",
				icon: CSS,
				invertOnDark: false,
				description: `Modular CSS3 keeps UI maintainable and scoped, without global style leakage.`,
				years: calculateExperience("2024-06-01"),
			},
		],
	},
	{
		category: "Frontend Frameworks",
		items: [
			{
				title: "React",
				icon: React2,
				invertOnDark: false,
				description: `My primary frontend framework with a component architecture, hooks, and the broader ecosystem.`,
				years: calculateExperience("2024-07-15"),
			},
			{
				title: "Next.js",
				icon: NextJs,
				invertOnDark: true,
				description: `My framework of choice for file-based routing, server components and SSR/SSG without the config havoc.`,
				years: calculateExperience("2024-08-01"),
			},
		],
	},
	{
		category: "State Management",
		items: [
			{
				title: "Redux",
				icon: Redux,
				invertOnDark: false,
				description: `Keeps complex application state predictable and traceable as it scales.`,
				years: calculateExperience("2024-07-25"),
			},
		],
	},
	{
		category: "Styling",
		items: [
			{
				title: "Tailwind CSS",
				icon: Tailwind,
				invertOnDark: false,
				description: `My default for UI work due to its utility-first styling that keeps design and markup in the same place.`,
				years: calculateExperience("2024-08-01"),
			},
		],
	},
	{
		category: "Backend Frameworks",
		items: [
			{
				title: "Node.js",
				icon: Node,
				invertOnDark: false,
				description: `Event-driven and lightweight, hence my choice for webhooks and microservice architecture.`,
				years: calculateExperience("2024-07-15"),
			},
			{
				title: "Django",
				icon: Django,
				invertOnDark: false,
				description: `Django is my standard stack for internal APIs for Python-based web applications.`,
				years: calculateExperience("2024-09-20"),
			},
			{
				title: "FastAPI",
				icon: Fastapi,
				invertOnDark: false,
				description: `FastAPI is my standard stack for internal APIs for Python-based web applications.`,
				years: calculateExperience("2025-10-05"),
			},
			{
				title: "SQLAlchemy",
				icon: SqlAlchemy,
				invertOnDark: true,
				description: `Gives me Pythonic models with direct control over the underlying SQL when it counts.`,
				years: calculateExperience("2024-09-15"),
			},
		],
	},
	{
		category: "Databases",
		items: [
			{
				title: "PostgreSQL",
				icon: PostgreSQL,
				invertOnDark: false,
				description: `My default for structured, relational data because of strict constraints and reliable performance at scale.`,
				years: calculateExperience("2024-10-10"),
			},
			{
				title: "MySQL",
				icon: MySQL,
				invertOnDark: false,
				description: `Solid and widely deployed, I work in MySQL when the stack calls for it, Postgres otherwise.`,
				years: calculateExperience("2024-10-01"),
			},
			{
				title: "SQLite",
				icon: Sqlite,
				invertOnDark: false,
				description: `Zero-setup persistence for prototyping before a project graduates to PostgreSQL.`,
				years: calculateExperience("2024-09-25"),
			},
		],
	},
	{
		category: "Build Tools",
		items: [
			{
				title: "Vite",
				icon: Vite,
				invertOnDark: false,
				description: `My build tool of choice for fast HMR and minimal config overhead in every project.`,
				years: calculateExperience("2024-08-01"),
			},
			{
				title: "PNPM",
				icon: Pnpm,
				invertOnDark: false,
				description: `Dependency management and script orchestration across every JS/TS project I ship.`,
				years: calculateExperience("2024-07-10"),
			},
		],
	},
	{
		category: "Deployment",
		items: [
			{
				title: "Vercel",
				icon: Vercel,
				invertOnDark: true,
				description: `Where I deploy everything Next.js touches — zero-friction CI/CD, preview URLs on every PR, edge performance out of the box.`,
				years: calculateExperience("2024-08-01"),
			},
		],
	},
	{
		category: "Version Control",
		items: [
			{
				title: "Git",
				icon: Git,
				invertOnDark: false,
				description: `Core to my workflow — branching, rebasing, and clean commit history are second nature.`,
				years: calculateExperience("2024-06-08"),
			},
			{
				title: "GitHub",
				icon: Github,
				invertOnDark: true,
				description: `Central to project workflows, from version control to PR reviews and CI via GitHub Actions.`,
				years: calculateExperience("2024-06-07"),
			},
		],
	},
	{
		category: "Code Editors",
		items: [
			{
				title: "Zed Editor",
				icon: Zed,
				invertOnDark: true,
				description: `My daily driver — a full-stack workflow tuned around Zed's speed and configurability.`,
				years: calculateExperience("2025-10-01"),
			},
			{
				title: "VS Code Editor",
				icon: Vscode,
				invertOnDark: false,
				description: `My choice when I need a broader extension ecosystem or notebook support.`,
				years: calculateExperience("2024-06-01"),
			},
		],
	},
	{
		category: "Design Tools",
		items: [
			{
				title: "Figma",
				icon: Figma,
				invertOnDark: false,
				description: `Used for translating design intent directly into implementation-ready UI.`,
				years: calculateExperience("2024-11-01"),
			},
		],
	},
];
