<script lang="ts">
	import { fade } from 'svelte/transition';

	import { ArrowRight } from '$lib/assets/icons';

	import type { Project } from '$lib/types';

	interface Props {
		project: Project;
		hide?: boolean;
		duration?: number;
	}

	let { project, hide, duration }: Props = $props();
</script>

{#if !hide}
	<img
		transition:fade={{ duration: duration }}
		src={project.image}
		alt=""
		class="my-auto h-full aspect-square rounded-2xl object-contain"
		style={project.imageStyle}
	/>

	<section
		transition:fade={{ duration: duration }}
		class="flex flex-col flex-1 justify-between text-left"
	>
		<h5 class="font-almarai font-normal">
			{@html project.name}
		</h5>

		{#if project.details}
			<p class="text-[10px] my-auto w-full overflow-hidden">
				{@html project.details}
			</p>
		{/if}
	</section>

	<img
		transition:fade={{ duration: duration }}
		src={ArrowRight}
		alt="arrow right"
		class=" h-12 ml-auto"
	/>
{/if}
