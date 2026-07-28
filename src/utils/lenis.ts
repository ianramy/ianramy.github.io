import Lenis from "lenis";

// Singleton instance for site-wide smooth scrolling
export const initLenis = () => {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
		orientation: "vertical",
		gestureOrientation: "vertical",
		smoothWheel: true,
	});

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return lenis;
};
