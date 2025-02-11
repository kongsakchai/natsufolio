<script lang="ts">
	import { fly } from 'svelte/transition';

	import { showFormattedDate } from '$lib/utils/date';

	import { receive, send } from '$lib/transitions/crossfade';

	import type { Project } from '$lib/types';

	let projects: Project[] = $props();
</script>

<section class=" grid grid-cols-2 gap-4">
	{#snippet detail(project: Project)}
		<img
			in:receive|global={{ key: project.id }}
			out:send|global={{ key: project.id, delay: 300 }}
			src={project.cover ?? project.image}
			alt={project.id}
			class="w-full aspect-square object-cover rounded-3xl"
			loading="lazy"
		/>

		<section
			in:fly|global={{ x: 20, duration: 300, delay: 300 }}
			out:fly|global={{ x: 20, duration: 300 }}
		>
			<h6 class="my-0 text-wrap">{project.name}</h6>
			<p class=" font-mono">{showFormattedDate(project.date)}</p>
			<p class=" font-mono text-wrap my-4 line-clamp-3">{project.details}</p>

			{#each project.hastags ?? [] as hastag}
				<a
					href="https://x.com/hashtag/{hastag}?src=hashtag_click"
					class=" font-mono block text-[0.625rem] underline"
				>
					#{hastag}
				</a>
			{/each}
		</section>
	{/snippet}

	{#each projects as project}
		{@render detail(project)}
	{/each}
</section>
