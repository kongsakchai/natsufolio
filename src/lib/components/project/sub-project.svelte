<script lang="ts">
	import { fade } from 'svelte/transition';

	import { ArrowRight } from '$lib/assets/icons';

	import type { Project } from '$lib/types';

	import SubProjectPopup from './sub-project-popup.svelte';

	interface Props {
		class?: string;
		title: string;
		projects: Project[];
	}

	let { class: className, title, projects }: Props = $props();

	let projectSelected = $state<Project>();
	let rectSelected = $state<{
		width?: number;
		height?: number;
		left?: number;
		top?: number;
	}>({});

	const handleOpen = (e: Event, p: Project) => {
		const el = e.currentTarget as HTMLElement;
		const rect = el.getBoundingClientRect();
		projectSelected = p;
		rectSelected = {
			width: rect.width,
			height: rect.height,
			left: rect.left,
			top: rect.top
		};
	};

	const fadeDuration = 200;
</script>

<section class="flex flex-col gap-4 {className}">
	<h2 class="font-almarai font-normal text-center tracking-wider mb-6">{title}</h2>

	{#each projects as p}
		<button
			onclick={(e) => handleOpen(e, p)}
			class="project-bg bg-primary w-full h-37.5 rounded-4xl p-4 flex gap-3 overflow-hidden transition-all hover:scale-105"
			class:scale-105={projectSelected?.id === p.id}
		>
			{#if projectSelected?.id !== p.id}
				<img
					out:fade={{ duration: fadeDuration }}
					src={p.image}
					alt=""
					class="my-auto h-full aspect-square rounded-2xl object-contain"
				/>

				<section
					out:fade={{ duration: fadeDuration }}
					class="flex flex-col flex-1 justify-between text-left"
				>
					<h5 class="font-almarai font-normal">
						{@html p.name}
					</h5>

					{#if p.details}
						<p class="text-[10px] my-auto w-full overflow-hidden">
							{@html p.details}
						</p>
					{/if}
				</section>

				<img
					out:fade={{ duration: fadeDuration }}
					src={ArrowRight}
					alt="arrow right"
					class=" h-12 ml-auto"
				/>
			{/if}
		</button>
	{/each}
</section>

<SubProjectPopup bind:project={projectSelected} {...rectSelected} />

<style lang="postcss">
	.project-bg {
		background-image: linear-gradient(150deg, #1a1a1b80 0%, #08143080 100%);
	}
</style>
