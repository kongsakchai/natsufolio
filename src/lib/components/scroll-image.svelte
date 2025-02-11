<script lang="ts">
	import type { ProjectYear } from '$lib/data/model';

	import { scrollImage } from '$lib/use/scroll-image';

	let { projects, year }: ProjectYear = $props();

	const count = projects.length;

	let selected = $state(0);
</script>

<h1>{year}</h1>

<div class="flex w-full gap-8">
	<a
		use:scrollImage={{
			selected,
			count,
			setSelected(val) {
				selected = val;
			}
		}}
		class="scroll flex flex-col aspect-video w-full gap-4"
		href="/work/year/{year}"
	>
		{#each projects as { coverAlign, image, id }, index}
			<img
				src={image}
				alt={id}
				class="w-full aspect-video object-cover {coverAlign} select-none rounded-3xl"
				loading="lazy"
			/>
		{/each}
	</a>

	<div class="my-auto flex flex-col items-center justify-center gap-3">
		{#each projects as _, index}
			<div
				class="size-1 rounded-full bg-[#3A3A3A] transition-all duration-300"
				class:selected={selected === index}
			></div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.scroll {
		&::-webkit-scrollbar {
			display: none;
		}

		& > img {
			scroll-snap-align: center;
		}

		overflow-x: hidden;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.selected {
		transform: scale(2);
		background-color: white;
	}
</style>
