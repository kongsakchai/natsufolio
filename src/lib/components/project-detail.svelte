<script lang="ts">
	import { showFormattedDate } from '$lib/utils/date';

	import type { Project } from '$lib/types';

	let projects: Project[] = $props();
</script>

<section class=" grid grid-cols-2 gap-4">
	{#snippet detail(project: Project)}
		<img
			src={project.cover ?? project.image}
			alt={project.id}
			class="w-full aspect-square object-cover rounded-3xl"
			loading="lazy"
		/>

		<section>
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
