<script lang="ts">
	import { onMount } from 'svelte';

	import { ArrowLeft } from '$lib/assets/icons';

	let { data } = $props();

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<h1 class="header uppercase flex items-start gap-3 font-almarai font-normal fixpos">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	<div class="mt-1">
		{@html data.project.name}
		{#if data.project.subName}
			<p class="mt-1">{@html data.project.subName}</p>
		{/if}
	</div>
</h1>

<section class="mt-7 mb-10 flex flex-col max-w-110 mx-auto gap-4">
	{#each data.project.contents as { Component, params }}
		<Component {...params} />
	{/each}
</section>
