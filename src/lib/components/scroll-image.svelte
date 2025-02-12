<script lang="ts">
	import { ArrowDown } from '$lib/assets/icons';

	import type { CoverByYear } from '$lib/services/project';
	import { scrollImage } from '$lib/services/use/scroll-image';

	import { receive, send } from '$lib/transitions/crossfade';

	let { cover, year }: CoverByYear = $props();

	const count = cover.length;

	let selected = $state(0);
</script>

<h1 class="opacity-70">
	<spna>{year}</spna> <img src={ArrowDown} alt="Arrow Down" class="w-4 h-4 inline-block" />
</h1>

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
		{#each cover as { align, image, id }, index}
			<img
				out:send|global={{ key: id }}
				in:receive|global={{ key: id, delay: 300 }}
				src={image}
				alt={id}
				class="w-full aspect-video object-cover {align} select-none rounded-3xl"
				loading="lazy"
			/>
		{/each}
	</a>

	<div class="my-auto flex flex-col items-center justify-center gap-3">
		{#each Array(count) as _, index}
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
