<script lang="ts">
	import { onMount } from 'svelte';

	import { workMenus } from '$lib/data';

	import WorkMenu from '$lib/components/work/work-menu.svelte';

	onMount(() => {
		window.screenTop = 0;
	});
</script>

<h1 class="header">WORK</h1>

<section class="mt-10 w-full text-nowrap mb-10 flex flex-col gap-4">
	{#each workMenus as work}
		<WorkMenu {work} />
	{/each}
</section>
