<script lang="ts">
	import ScrollImage from '$lib/components/ScrollImage.svelte';

	let { data } = $props();
</script>

<h1>WORK</h1>

<section class="mx-auto mt-10 max-w-[414px] text-nowrap">
	{#each data.data as item, i}
		<ScrollImage {...item} />
	{/each}
</section>
