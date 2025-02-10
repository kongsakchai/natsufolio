<script lang="ts">
	import { receive } from '$lib/transitions/crossfade';

	let { data } = $props();
</script>

<h1>{data.year}</h1>

<section class="mx-auto mt-10 max-w-[414px] text-nowrap flex flex-col gap-6">
	{#each data.data as item, i}
		<img
			in:receive={{ key: item.id }}
			src={item.cover ?? item.image}
			alt={item.id}
			class="w-full aspect-square object-cover rounded-3xl {item.coverAlign}"
		/>
	{/each}
</section>
