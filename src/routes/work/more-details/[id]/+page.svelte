<script lang="ts">
	import { ArrowLeft } from '$lib/assets/icons';

	import ProjectPopup from '$lib/components/project/project-popup.svelte';

	let { data } = $props();
</script>

<h1 class="header uppercase flex items-center gap-3 font-almarai font-normal">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	{@html data.project.name}
</h1>

<section class="mt-10 mb-10 flex flex-col max-w-110 mx-auto gap-6">
	{#each data.project.contents as { Component, params }}
		<Component {...params} />
	{/each}
</section>

<ProjectPopup />
