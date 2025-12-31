<script lang="ts">
	interface Props {
		initIndex?: number;
		class?: string;
		classImg?: string;
		images: (string | { src: string; class?: string })[];
	}

	let { initIndex, class: className, images, classImg }: Props = $props();

	let index = $state(initIndex ?? Math.floor(images.length / 2));

	// let hold = $state(false);
	// let timeout = 0;

	// const handleScroll = (n: number) => {
	// 	if (n > 0 && index < images.length - 1) {
	// 		index++;
	// 	} else if (n < 0 && index > 0) {
	// 		index--;
	// 	}
	// };

	// const onDown = (e: PointerEvent) => {
	// 	e.preventDefault();
	// 	hold = false;
	// 	timeout = setTimeout(() => {
	// 		hold = true;
	// 	}, 300);
	// };

	// const onUp = (e: PointerEvent) => {
	// 	e.preventDefault();
	// 	clearTimeout(timeout);
	// 	hold = false;
	// };

	// const onMove = (e: PointerEvent) => {
	// 	console.log(e.movementX);
	// 	if (!hold) return;
	// 	if (e.movementX > 1) {
	// 		handleScroll(-1);
	// 	} else if (e.movementX < -1) {
	// 	}
	// 	hold = true;
	// };
</script>

<div class="w-full {className} flex flex-col relative">
	<section class="w-[65%] aspect-square mx-auto relative">
		{#each images as img, i}
			<button
				class="w-full absolute transition-all"
				class:scale-90={i !== index}
				style="transform: translate(-50%, -50%)"
				style:left="{(i - index) * 75 + 50}%"
				style:top="{i === index ? 50 : 60}%"
				style:z-index={i === index ? 1 : 0}
				style:opacity={i === index ? 1 : 0.6}
				onclick={() => (index = i)}
			>
				{#if typeof img === 'object'}
					<img
						src={img.src}
						alt="cover"
						class="w-full object-contain {img.class ?? classImg}"
						class:preview={index === i}
					/>
				{:else}
					<img
						src={img}
						alt="cover"
						class="w-full object-contain {classImg} preview"
						class:preview={index === i}
					/>
				{/if}
			</button>
		{/each}
	</section>

	<section class="w-full flex justify-center gap-2 items-center h-12.5">
		{#each images as _, i}
			<button
				aria-label="index-icon"
				class="w-1.5 h-1.5 outline outline-white rounded-full"
				class:bg-white={i === index}
			></button>
		{/each}
	</section>
</div>
