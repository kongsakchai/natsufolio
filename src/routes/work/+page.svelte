<script lang="ts">
	import { projects, workTypes } from '$lib/data';

	let { data } = $props();

	let curAccordion = $state('');

	const twoDigit = (n: number) => {
		if (n == 0) return n.toString();
		const str = n.toString();
		return str.length < 2 ? `0${str}` : str;
	};

	const workTypeCount = Object.fromEntries(
		workTypes.map((s) => {
			const filter = projects.filter((p) => p.types?.includes(s));
			return [s, twoDigit(filter.length)];
		})
	);
</script>

<h1 class="mx-9">WORK</h1>

<section class="mt-10 mx-9 max-w-full text-nowrap">
	{#each workTypes as workType}
		<!-- <Accordion
			title={workType}
			open={workType == curAccordion}
			onChange={(state) => {
				curAccordion = state ? workType : '';
			}}
		/> -->
		<h2>
			{workType.toUpperCase()}
			<span class="font-mono font-normal text-xs">({workTypeCount[workType]})</span>
		</h2>
	{/each}
</section>
