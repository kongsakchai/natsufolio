// export const imageAction = (node: HTMLImageElement) => {
// 	const previewImage = getContext('previewImage') as (str: string) => void;

// 	if (node.classList.contains('preview')) {
// 		node.style.pointerEvents = 'auto';
// 	}

// 	node.oncontextmenu = (e) => {
// 		e.preventDefault();
// 	};
// 	node.onpointerdown = (e) => {
// 		e.preventDefault();

// 		if (node.classList.contains('preview')) {
// 			previewImage(node.src);
// 		}
// 	};
// };
