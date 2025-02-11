<script lang="ts">
	interface Props {
		list: string[];
	}

	let { list }: Props = $props();
</script>

<div class="flex flex-wrap gap-2">
	{#each list as item}
		<span class="rounded-full bg-[#3C3533] px-1">{item}</span>
	{/each}
</div>
