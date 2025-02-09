import { clamp } from '$lib/utils/math';

export const fadeWhenScroll = (element: HTMLElement) => {
	const fade = () => {
		const { scrollHeight, clientHeight } = window.document.documentElement;
		if (scrollHeight === clientHeight) return;

		const offsetTop = element.getBoundingClientRect().top;
		const opacity = clamp((clientHeight - offsetTop) / element.offsetHeight, 0, 1);
		element.style.opacity = opacity.toString();
	};

	window.addEventListener('scroll', fade);

	return {
		destroy() {
			window.removeEventListener('scroll', fade);
		}
	};
};
