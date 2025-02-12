interface Params {
	selected: number;
	count: number;
	stop?: boolean;
	setSelected: (selected: number) => void;
}

export const scrollImage = (node: HTMLElement, { selected, count, setSelected }: Params) => {
	let autoScroll: number = 0;
	const newAutoScroll = () => {
		clearInterval(autoScroll);
		autoScroll = setInterval(() => {
			selected = (selected + 1) % count;
			setSelected(selected);

			const nextScroll = selected * node.clientHeight;
			node.scrollTo({ top: nextScroll, behavior: 'smooth' });
		}, 5000);
	};
	newAutoScroll();

	const onScroll = () => {
		selected = Math.round(node.scrollTop / node.clientHeight);
		setSelected(selected);
		newAutoScroll();
	};
	node.addEventListener('scroll', onScroll);

	return {
		destroy() {
			node.removeEventListener('scroll', onScroll);
			clearInterval(autoScroll);
		}
	};
};
