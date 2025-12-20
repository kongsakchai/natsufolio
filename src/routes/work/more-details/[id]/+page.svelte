<script lang="ts">
	import { ArrowLeft } from '$lib/assets/icons';

	let { data } = $props();
</script>

<h1 class="header uppercase flex items-center gap-3 font-almarai font-normal">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	{@html data.project.name}
</h1>

<section class="mt-10 w-full mb-10 flex flex-col">
	<section class="grid grid-cols-2 gap-4">
		<img src={data.project.image} alt="cover" />
		<p>{@html data.project.details}</p>
	</section>
</section>
