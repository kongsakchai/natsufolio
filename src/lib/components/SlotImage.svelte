<script lang="ts">
	interface Props {
		year: number;
		images?: string[];
	}

	let { images = [], year }: Props = $props();
</script>

<h2>{year}</h2>

<div class="flex w-full gap-10">
	<div class="aspect-video w-full overflow-hidden rounded-3xl">
		{#if images.length > 0}
			<img src={images[0]} alt="" class="h-full w-full object-cover" />
		{/if}
	</div>

	<div class="my-auto flex flex-col items-center justify-center gap-4">
		{#each images as image}
			<div class="h-1 w-1 rounded-full bg-white"></div>
		{/each}
	</div>
</div>
