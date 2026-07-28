// src/data/skills.ts

import Image from "next/image";
import {
	Bootstrap,
	C,
	Cpp,
	CSharp,
	CSS,
	Figma,
	Flask,
	Git,
	Github,
	HTML,
	Javascript,
	MySQL,
	Node,
	Npm,
	PostgreSQL,
	Pycharm,
	Python,
	React2,
	Redux,
	SqlAlchemy,
	Sqlite,
	TypeScript,
	Vite,
	Vscode,
} from "@/assets";
import { calculateExperience } from "@/utils";

export const skillGroups = [
	{
		category: "Languages & Frameworks",
		items: [
			{
				title: "Python",
				icon: <Image src={Python} alt="Python" width={40} height={40} />,
				description: `My go-to for scripting and backend logic. Python powers most of my APIs and data tasks.`,
				years: calculateExperience("2024-09-01"),
			},
			{
				title: "JavaScript",
				icon: (
					<Image src={Javascript} alt="JavaScript" width={40} height={40} />
				),
				description: `Fluent in JS for full-stack, from DOM manipulation to backend API calls with Node.js.`,
				years: calculateExperience("2024-07-01"),
			},
			{
				title: "TypeScript",
				icon: (
					<Image src={TypeScript} alt="TypeScript" width={40} height={40} />
				),
				description: `Actively learning TS. Already applying it in my React apps to tighten data flow and types.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "C",
				icon: <Image src={C} alt="C" width={40} height={40} />,
				description: `Diving into C for memory management and system-level problem solving — a real brain workout.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "C++",
				icon: <Image src={Cpp} alt="Cpp" width={40} height={40} />,
				description: `C++ helps me understand object-oriented programming and is great for performance-critical applications.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "C#",
				icon: <Image src={CSharp} alt="CSharp" width={40} height={40} />,
				description: `I’m grasping C# basics and appreciating its clean syntax and enterprise tooling.`,
				years: calculateExperience("2024-11-25"),
			},
			{
				title: "React",
				icon: <Image src={React2} alt="React2" width={40} height={40} />,
				description: `My main frontend framework. I love it for its component architecture and ecosystem.`,
				years: calculateExperience("2024-07-15"),
			},
			{
				title: "HTML5",
				icon: <Image src={HTML} alt="HTML" width={40} height={40} />,
				description: `Technically not a language, but we all treat it like royalty. The semantic skeleton of my frontends.`,
				years: calculateExperience("2024-06-01"),
			},
			{
				title: "CSS3",
				icon: <Image src={CSS} alt="CSS" width={40} height={40} />,
				description: `CSS3 with modules keeps my UI clean. I avoid global pollution like a proper engineer.`,
				years: calculateExperience("2024-06-01"),
			},
		],
	},
	{
		category: "Backend Frameworks",
		items: [
			{
				title: "Node.js",
				icon: <Image src={Node} alt="Node" width={40} height={40} />,
				description: `Event-driven, lightweight, and powerful. I use Node for webhooks and microservices.`,
				years: calculateExperience("2024-07-15"),
			},
			{
				title: "Flask",
				icon: <Image src={Flask} alt="Flask" width={40} height={40} />,
				description: `Flask + Flask-Restx is my typical stack for internal APIs and MVPs.`,
				years: calculateExperience("2024-09-20"),
			},
			{
				title: "SQLAlchemy",
				icon: (
					<Image src={SqlAlchemy} alt="SqlAlchemy" width={40} height={40} />
				),
				description: `With SQLAlchemy, I write Python and still control my SQL — best of both worlds for data.`,
				years: calculateExperience("2024-09-15"),
			},
		],
	},
	{
		category: "Databases",
		items: [
			{
				title: "PostgreSQL",
				icon: (
					<Image src={PostgreSQL} alt="PostgreSQL" width={40} height={40} />
				),
				description: `With PostgreSQL, I handle data the way it was meant to be: structured, strict, and powerful.`,
				years: calculateExperience("2024-10-10"),
			},
			{
				title: "MySQL",
				icon: <Image src={MySQL} alt="MySQL" width={40} height={40} />,
				description: `Functional and familiar. I can work with MySQL but prefer Postgres for stricter relational work.`,
				years: calculateExperience("2024-10-01"),
			},
			{
				title: "SQLite",
				icon: <Image src={Sqlite} alt="Sqlite" width={40} height={40} />,
				description: `SQLite is where I start before bringing in PostgreSQL — clean, no server required.`,
				years: calculateExperience("2024-09-25"),
			},
		],
	},
	{
		category: "Build & State Tools",
		items: [
			{
				title: "Vite",
				icon: <Image src={Vite} alt="Vite" width={40} height={40} />,
				description: `My build tool of choice. Instant HMR, clean config — it makes dev feel fun again.`,
				years: calculateExperience("2024-08-01"),
			},
			{
				title: "Redux",
				icon: <Image src={Redux} alt="Redux" width={40} height={40} />,
				description: ` When app state becomes a beast, this keeps it predictable and under control.`,
				years: calculateExperience("2024-07-25"),
			},
			{
				title: "NPM",
				icon: <Image src={Npm} alt="Npm" width={40} height={40} />,
				description: `NPM is my script runner, dependency wrangler, and accidental 10GB node_modules folder generator.`,
				years: calculateExperience("2024-07-10"),
			},
		],
	},
	{
		category: "Version Control",
		items: [
			{
				title: "Git",
				icon: <Image src={Git} alt="Git" width={40} height={40} />,
				description: `I use Git for every commit, rebase, and merge. It’s part of my muscle memory now.`,
				years: calculateExperience("2024-06-08"),
			},
			{
				title: "GitHub",
				icon: <Image src={Github} alt="Github" width={40} height={40} />,
				description: `Central to all my project workflows. From versioning to PRs and GitHub Actions.`,
				years: calculateExperience("2024-06-07"),
			},
		],
	},
	{
		category: "Code Editors & UI Tools",
		items: [
			{
				title: "VS Code",
				icon: <Image src={Vscode} alt="Vscode" width={40} height={40} />,
				description: `It’s where I live. My full-stack pipeline is fine-tuned through VS Code setups.`,
				years: calculateExperience("2024-06-01"),
			},
			{
				title: "PyCharm",
				icon: <Image src={Pycharm} alt="Pycharm" width={40} height={40} />,
				description: `Still learning PyCharm — but I can already feel the power of a dedicated Python IDE.`,
				years: calculateExperience("2024-09-10"),
			},
			{
				title: "Figma",
				icon: <Image src={Figma} alt="Figma" width={40} height={40} />,
				description: `Starting to design in Figma — I use it to bridge the gap between UX and implementation.`,
				years: calculateExperience("2024-11-01"),
			},
			{
				title: "Bootstrap",
				icon: <Image src={Bootstrap} alt="Bootstrap" width={40} height={40} />,
				description: `Not every project needs custom CSS. Bootstrap covers the essentials with minimal setup.`,
				years: calculateExperience("2024-07-10"),
			},
		],
	},
];
