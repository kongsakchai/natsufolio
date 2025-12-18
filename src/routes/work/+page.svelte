<script lang="ts">
	import { ArrowRight } from '$lib/assets/icons';

	import { projects, workTypes } from '$lib/data';

	const twoDigit = (n: number) => {
		if (n == 0) return n.toString();
		const str = n.toString();
		return str.length < 2 ? `0${str}` : str;
	};

	const workTypeCount = Object.fromEntries(
		workTypes.map((s) => {
			const filter = projects.filter((p) => p.tags?.includes(s));
			return [s, twoDigit(filter.length)];
		})
	);
</script>

<h1 class="mx-6">WORK</h1>

<section class="mt-10 mx-9 max-w-full text-nowrap">
	{#each workTypes as workType}
		<!-- <Accordion
			title={workType}
			open={workType == curAccordion}
			onChange={(state) => {
				curAccordion = state ? workType : '';
			}}
		/> -->
		{@const url = workType.toLowerCase().replaceAll(' ', '-')}
		<a href="/work/{url}">
			<h3 class="uppercase flex items-center gap-3">
				<img src={ArrowRight} alt="arrow right" class="inline-block w-4" />
				{workType}
				<span class="font-almarai font-normal text-xs ml-1">({workTypeCount[workType]})</span>
			</h3>
		</a>
	{/each}
</section>
