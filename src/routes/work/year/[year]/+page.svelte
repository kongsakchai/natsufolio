<script lang="ts">
	import ProjectDetail from '$lib/components/project-detail.svelte';

	let { data } = $props();
</script>

<h1>{data.year}</h1>

<section class="mx-auto max-w-[414px] text-nowrap flex flex-col gap-6">
	<ProjectDetail {...data.data} />
</section>
