<script lang="ts">
	import { workList } from '$lib/data';

	import WorkButton from '$lib/components/work-button.svelte';
</script>

<h1 class="header">WORK</h1>

<section class="mt-10 w-full text-nowrap mb-10 flex flex-col gap-4">
	{#each workList as work}
		<WorkButton {work} />
	{/each}
</section>
