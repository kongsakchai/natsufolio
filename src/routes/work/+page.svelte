<script lang="ts">
	import SlotImage from '$lib/components/SlotImage.svelte';

	let { data } = $props();
</script>

<h1>WORK</h1>

<section class="mx-auto mt-10 max-w-[414px] text-nowrap">
	{#each data.data as { year, covers }, i}
		<SlotImage {year} images={covers} />
	{/each}
</section>
