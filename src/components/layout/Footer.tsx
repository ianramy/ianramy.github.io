// src/components/layout/Footer.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/links";

export default function Footer() {
	return (
		<footer className="py-24 px-6 md:px-12 relative z-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
				{/* Brand Area */}
				<div className="md:col-span-2 flex flex-col justify-between">
					<div>
						<Image
							src="/images/logo-black.jpg"
							alt="Logo"
							width={100}
							height={100}
							className="dark:hidden mb-6"
							priority
						/>
						<Image
							src="/images/logo-black.jpg"
							alt="Logo"
							width={100}
							height={100}
							className="hidden dark:block mb-6"
							priority
						/>
						<h3 className="text-4xl md:text-6xl font-heading uppercase tracking-tight">
							Ian Ramy
						</h3>
						<p className="font-mono text-xs uppercase tracking-widest mt-4 max-w-xs">
							Software Engineer • Data Scientist • Cybersec Analysist
						</p>
					</div>
				</div>

				{/* Links Grid */}
				<div className="flex flex-col gap-12">
					<div>
						<span className="font-mono text-xs uppercase tracking-widest block mb-4">
							Affiliations
						</span>
						<a
							href="https://mwangalabs.co.ke"
							className="font-mono text-sm uppercase tracking-wider hover:opacity-50 transition-opacity"
						>
							MwangaLabs
						</a>
					</div>
					<div>
						<span className="font-mono text-xs uppercase tracking-widest block mb-4">
							Resources
						</span>
						<ul className="space-y-4 font-mono text-sm uppercase tracking-wider">
							<li>
								<Link
									href="/terms"
									className="hover:opacity-50 transition-opacity"
								>
									Terms & Legal
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="hover:opacity-50 transition-opacity"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/ianramy/ianramy.github.io"
									className="hover:opacity-50 transition-opacity"
								>
									Documentation
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Socials Grid */}
				<div className="flex flex-col gap-4">
					<span className="font-mono text-xs uppercase tracking-widest block mb-2">
						Network
					</span>
					{socialLinks.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Follow Ian on ${social.label}`}
							className="group flex items-center gap-4 font-mono text-sm uppercase tracking-wider hover:opacity-50 transition-opacity pb-4"
						>
							<div
								className="w-4 h-4 bg-current"
								style={{
									maskImage: `url(${social.icon.src})`,
									WebkitMaskImage: `url(${social.icon.src})`,
									maskSize: "contain",
									maskRepeat: "no-repeat",
									WebkitMaskRepeat: "no-repeat",
								}}
							/>
							{social.label}
						</a>
					))}
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-(--color-border-grid) flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase tracking-widest">
				<p>© {new Date().getFullYear()} IAN RAMY.</p>
				<p className="mt-4 md:mt-0"> ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	);
}
