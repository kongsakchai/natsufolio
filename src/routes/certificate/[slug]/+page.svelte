<script lang="ts">
	import { ArrowLeft } from '$lib/assets/icons';

	import { receive, send } from '$lib/transitions/crossfade';

	let { data } = $props();
</script>

<h1 class="header flex items-start gap-3">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	{@html data.certificates.title}
</h1>

<section class="mt-10 mb-10 mx-auto max-w-103.5 flex flex-col items-center gap-4">
	{#each data.certificates.list as cert}
		<figure class="max-w-62.5">
			<img
				src={cert.img}
				alt={cert.name}
				in:receive|global={{ key: cert.name }}
				out:send|global={{ key: cert.name, delay: 300 }}
			/>
			<figcaption class="mt-4 text-xs text-center">{@html cert.name}</figcaption>
		</figure>
	{/each}
</section>
