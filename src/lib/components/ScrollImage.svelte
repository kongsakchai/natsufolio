<script lang="ts">
	import type { ProjectYear } from '$lib/data/model';

	import { send } from '$lib/transitions/crossfade';

	let selected = $state(0);

	let { projects, year }: ProjectYear = $props();

	const scroll = (node: HTMLElement) => {
		let autoScroll: number = 0;
		const newAutoScroll = () => {
			clearInterval(autoScroll);
			autoScroll = setInterval(() => {
				selected = (selected + 1) % projects.length;
				const nextScroll = selected * node.clientHeight;

				node.scrollTo({ top: nextScroll, behavior: 'smooth' });
			}, 5000);
		};
		newAutoScroll();

		const onScroll = () => {
			selected = Math.round(node.scrollTop / node.clientHeight);
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
</script>

<h2>{year}</h2>

<div class="flex w-full gap-8">
	<a
		use:scroll
		class="scroll flex aspect-video flex-col overflow-x-hidden overflow-y-scroll rounded-3xl"
		href="/work/year/{year}"
	>
		{#each projects as { coverAlign, image, id }, index}
			<img
				out:send={{ key: id }}
				src={image}
				alt={id}
				class="size-full object-cover {coverAlign} select-none"
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

		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.selected {
		transform: scale(2);
		background-color: white;
	}
</style>
