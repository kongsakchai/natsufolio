<script lang="ts">
	import { goto } from '$app/navigation';

	import { fadeInView } from '$lib/services/use/fade-in-view';

	import type { Project } from '$lib/types';

	import SubProjectItem from './sub-project-item.svelte';
	import SubProjectPopup from './sub-project-popup.svelte';

	interface Props {
		disableClick?: boolean;
		class?: string;
		title: string;
		projects: (Project & { link?: string; goto?: boolean })[];
	}

	let { class: className, title, projects, disableClick }: Props = $props();

	let projectSelected = $state<Project>();
	let rectSelected = $state<{
		width?: number;
		height?: number;
		left?: number;
		top?: number;
	}>({});

	const handleOpen = (e: Event, p: Project & { link?: string; goto?: boolean }) => {
		if (disableClick) return;

		if (p.goto && p.link) {
			goto(p.link);
			return;
		}

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
	<h2 class="font-almarai font-normal tracking-wider">{title}</h2>

	{#each projects as p}
		<button
			use:fadeInView
			onclick={(e) => handleOpen(e, p)}
			class="project-bg bg-primary w-full h-37.5 rounded-4xl p-4 flex gap-3 overflow-hidden transition-all hover:scale-105"
			class:scale-105={projectSelected?.id === p.id}
		>
			<SubProjectItem project={p} duration={fadeDuration} hide={projectSelected?.id === p.id} />
		</button>
	{/each}
</section>

<SubProjectPopup bind:project={projectSelected} {...rectSelected} />

<style lang="postcss">
	.project-bg {
		background-image: linear-gradient(150deg, #1a1a1b80 0%, #08143080 100%);
	}
</style>
