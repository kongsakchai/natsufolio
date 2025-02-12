<script lang="ts">
	import { ArrowDown } from '$lib/assets/icons/index.js';

	import HardSkill from '$lib/components/hard-skill.svelte';

	import { convertToDate, showFormattedDate } from '$lib/utils/date.js';

	let { data } = $props();

	const date = convertToDate(data.data.date);
</script>

<section class="flex items-center justify-between">
	<a href="/work/year/{date.year()}" class="mt-6 mb-4">
		<img src={ArrowDown} alt="Arrow Down" class="w-4 h-4 rotate-90" />
	</a>
	<h1>{date.year()}</h1>
</section>

<section class="mx-auto max-w-[414px] text-nowrap">
	<img src={data.data.image} alt={data.data.name} class="w-full" />
</section>

<section class="mx-auto max-w-[414px] text-nowrap">
	<section>
		<h5 class="text-wrap mb-0">{data.data.name}</h5>
		<p class=" font-mono">{showFormattedDate(date)}</p>
	</section>
</section>

<p class=" font-mono text-wrap my-4 line-clamp-3">{data.data.details}</p>

{#each data.data.hastags ?? [] as hastag}
	<a
		href="https://x.com/hashtag/{hastag}?src=hashtag_click"
		class=" font-mono block text-[0.625rem] underline"
	>
		#{hastag}
	</a>
{/each}

<article>
	<h5 class="font-normal font-mono">/ Programs Used</h5>
	<HardSkill list={data.data.skills} multiple={false} />
</article>
