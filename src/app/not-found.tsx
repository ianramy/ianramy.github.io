// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			<h2 className="text-2xl font-bold">Page Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/" className="mt-4 text-blue-500 underline">
				Return Home
			</Link>
		</div>
	);
}
