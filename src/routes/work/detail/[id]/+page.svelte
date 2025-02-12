<script lang="ts">
	import { ArrowDown } from '$lib/assets/icons/index.js';

	import HardSkill from '$lib/components/hard-skill.svelte';

	import { convertToDate, showFormattedDate } from '$lib/utils/date.js';

	import { receive, send } from '$lib/transitions/crossfade';

	let { data } = $props();

	const date = convertToDate(data.data.date);
	const project = data.data;
</script>

<section class="flex items-center justify-between">
	<a href="/work/year/{date.year()}" class="mt-6 mb-4">
		<img src={ArrowDown} alt="Arrow Down" class="w-4 h-4 rotate-90" loading="lazy" />
	</a>
	<h1>{date.year()}</h1>
</section>

<section class="mx-auto max-w-[414px] text-nowrap mb-10">
	<img
		src={project.image}
		alt={project.name}
		class="w-full"
		in:receive|global={{ key: project.id }}
		out:send|global={{ key: project.id, delay: 300 }}
	/>

	<section class="flex items-center" class:justify-between={project.link}>
		<section>
			<h5 class="text-wrap mb-0">{project.name}</h5>
			<p class=" font-mono">{showFormattedDate(date)}</p>
		</section>

		{#if project.link}
			<a href={project.link.url} target="_blank" class="mt-6">
				<img src={project.link.icon} alt={project.link.label} class="w-6 h-6" loading="lazy" />
			</a>
		{/if}
	</section>

	{#if project.details}
		<p class=" font-mono text-wrap my-10 line-clamp-3">{project.details}</p>
	{/if}

	{#if project.hastags}
		<section class=" font-mono text-[0.625rem] underline my-10">
			{#each project.hastags ?? [] as hastag}
				<a href="https://x.com/hashtag/{hastag}?src=hashtag_click" class="block">
					#{hastag}
				</a>
			{/each}
		</section>
	{/if}

	{#if project.skills}
		<section class="my-10">
			<h5 class="font-normal font-mono">/ Programs Used</h5>
			<HardSkill list={project.skills} multiple={false} />
		</section>
	{/if}

	{#if project.moreImages}
		<section class="my-10 flex flex-col gap-6">
			{#each project.moreImages ?? [] as image}
				<img src={image} alt={project.name} class="w-full" loading="lazy" />
			{/each}
		</section>
	{/if}

	{#if project.moreLinks || project.remark}
		<section class="my-6 flex gap-6 items-center justify-end">
			{#if project.remark}
				<p class=" font-mono mr-auto">{project.remark}</p>
			{/if}

			{#each project.moreLinks ?? [] as link}
				<a href={link.url} target="_blank">
					<img src={link.icon} alt={link.label} class="w-6 h-6" loading="lazy" />
				</a>
			{/each}
		</section>
	{/if}
</section>
