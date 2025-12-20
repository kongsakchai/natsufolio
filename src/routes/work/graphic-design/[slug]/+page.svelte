<script lang="ts">
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/customParseFormat';

	import { ArrowLeft } from '$lib/assets/icons';

	import ProjectCard from '$lib/components/project-card.svelte';

	import type { PageProps } from './$types';

	dayjs.extend(customParseFormat);

	let { data }: PageProps = $props();
</script>

<h1 class="header flex items-center gap-3 font-almarai font-normal">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	{data.title}
</h1>

<section class="mt-10 w-full text-nowrap grid grid-cols-2 gap-4 justify-items-center mb-10">
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>
