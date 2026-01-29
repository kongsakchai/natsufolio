<script lang="ts">
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/customParseFormat';

	import { onMount } from 'svelte';

	import { ArrowLeft } from '$lib/assets/icons';

	import ProjectCard from '$lib/components/work/project-card.svelte';

	import type { PageProps } from './$types';

	dayjs.extend(customParseFormat);

	let { data }: PageProps = $props();

	onMount(() => {
		window.screenTop = 0;
	});
</script>

<h1 class="header flex items-center gap-3 font-almarai font-normal fixpos">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	{data.title}
</h1>

<section
	class="mx-auto mt-7 w-full max-w-200 text-nowrap grid grid-cols-2 gap-4 justify-items-center mb-10"
>
	{#each data.projects as project}
		<ProjectCard {project} tag={data.title} />
	{/each}
</section>
