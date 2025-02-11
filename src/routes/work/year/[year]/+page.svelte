<script lang="ts">
	import ArrowDown from '$lib/assets/icons/arrow-down.svg';

	import ProjectDetail from '$lib/components/project-detail.svelte';

	let { data } = $props();
</script>

<h1>
	<a href="/work" class="inline-block rotate-90">
		<img src={ArrowDown} alt="Arrow Down" class="w-4 h-4" />
	</a>
	<span>{data.year}</span>
</h1>

<section class="mx-auto max-w-[414px] text-nowrap flex flex-col gap-6">
	<ProjectDetail {...data.data} />
</section>
