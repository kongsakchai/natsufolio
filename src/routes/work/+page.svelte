<script lang="ts">
	import { ArrowRight } from '$lib/assets/icons';

	import { projects, workTypes } from '$lib/data';

	import { twoDigit } from '$lib/utils';

	const workTypeCount = Object.fromEntries(
		workTypes.map((s) => {
			const filter = projects.filter((p) => p.tags?.includes(s));
			return [s, twoDigit(filter.length)];
		})
	);
</script>

<h1 class="header">WORK</h1>

<section class="mt-10 w-full text-nowrap mb-10">
	{#each workTypes as workType}
		{@const url = workType.toLowerCase().replaceAll(' ', '-')}
		<a href="/work/{url}">
			<h3 class="header uppercase flex items-center gap-3 font-almarai">
				<img src={ArrowRight} alt="arrow right" class="inline-block w-4" />
				{workType}
				<span class="font-almarai font-normal text-xs ml-1">({workTypeCount[workType]})</span>
			</h3>
		</a>
	{/each}
</section>
