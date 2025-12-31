<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let img = $state('');

	const previewImage = (image: string) => {
		img = image;
	};

	onMount(() => {
		let hold = false;
		let timeout = 0;

		const pointerDownHandler = (e: PointerEvent) => {
			hold = false;
			timeout = setTimeout(() => {
				hold = true;
			}, 500);
		};

		const pointerUpHandler = (e: PointerEvent) => {
			clearTimeout(timeout);
			hold = false;
		};

		const clickHandler = (e: PointerEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === 'IMG') {
				e.preventDefault();

				const imgEl = target as HTMLImageElement;
				if (imgEl.classList.contains('preview') && e.button === 0 && !hold) {
					previewImage(imgEl.src);
				}
			}
		};

		const contextMenuHandler = (e: PointerEvent) => {
			const target = e.target as HTMLElement;
			if (target.tagName === 'IMG') {
				e.preventDefault();
			}
		};

		window.addEventListener('click', clickHandler);
		window.addEventListener('contextmenu', contextMenuHandler);
		window.addEventListener('pointerup', pointerUpHandler);
		window.addEventListener('pointercancel', pointerUpHandler);
		window.addEventListener('pointerdown', pointerDownHandler);

		return () => {
			window.removeEventListener('click', clickHandler);
			window.removeEventListener('contextmenu', contextMenuHandler);
			window.removeEventListener('pointerup', pointerUpHandler);
			window.removeEventListener('pointercancel', pointerUpHandler);
			window.removeEventListener('pointerdown', pointerDownHandler);
		};
	});
</script>

{#if img}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm z-30"
	>
		<button
			class="top-0 right-0 w-full h-full"
			onclick={() => (img = '')}
			aria-label="Close Preview Image"
		></button>
		<img src={img} class="w-[80%] fixed top-1/2 left-1/2 -translate-1/2 z-10" alt="preview" />
	</div>
{/if}
