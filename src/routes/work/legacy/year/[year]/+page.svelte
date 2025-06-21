<script lang="ts">
	import { ArrowDown } from '$lib/assets/icons/index.js';

	import ProjectDetail from '$lib/components/project-detail.svelte';

	let { data } = $props();
</script>

<section class="flex items-center gap-4">
	<a href="/work/legacy" class="mt-6 mb-4">
		<img src={ArrowDown} alt="Arrow Down" class="w-4 h-4 rotate-90" />
	</a>
	<h1>{data.year}</h1>
</section>

<section class="mx-auto mb-10 max-w-[414px] text-nowrap flex flex-col gap-6">
	<ProjectDetail {...data.data} />
</section>
