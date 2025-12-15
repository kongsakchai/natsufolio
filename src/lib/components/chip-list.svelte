<script lang="ts">
	interface Props {
		list: string[];
	}

	let { list }: Props = $props();
</script>

<div class="flex flex-wrap gap-2">
	{#each list as item}
		<span class="rounded-full bg-white/20 px-2 py-0.5">{item}</span>
	{/each}
</div>
