<script lang="ts">
	import { ArrowRight } from '$lib/assets/icons';

	import type { Project } from '$lib/types';

	interface Props {
		class?: string;
		title: string;
		projects: Project[];
	}

	let { class: className, title, projects }: Props = $props();
</script>

{#snippet subProject(url: string, title: string, details?: string)}
	<div class="project-bg w-full h-37.5 rounded-4xl p-4 flex gap-3 overflow-hidden">
		<img src={url} alt="" class="my-auto h-full aspect-square rounded-2xl object-contain" />

		<section class="flex flex-col flex-1 justify-between">
			<h5 class="font-almarai font-normal">
				{@html title}
			</h5>

			{#if details}
				<p class="text-[10px] mt-2 w-full overflow-hidden">
					{@html details}
				</p>
				<div></div>
			{/if}
		</section>

		<img src={ArrowRight} alt="arrow right" class=" h-12 ml-auto" />
	</div>
{/snippet}

<section class="flex flex-col gap-4 {className}">
	<h2 class="font-almarai font-normal text-center tracking-wider mb-6">{title}</h2>

	{#each projects as project}
		{@render subProject(project.image, project.name, project.details)}
	{/each}
</section>

<style lang="postcss">
	.project-bg {
		background: linear-gradient(150deg, #1a1a1b60 0%, #08143060 100%);
		/* background: #ffffff30; */
	}
</style>
