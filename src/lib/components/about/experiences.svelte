<script lang="ts">
	import type { Experience } from '$lib/types';

	interface Props {
		list?: Experience[];
	}

	let { list = [] }: Props = $props();
</script>

<section class="exp relative grid grid-cols-4 gap-y-4">
	{#snippet exp(years: number, title: string, details: string)}
		<p class="year col-start-1">{years}</p>
		<p class=" col-span-2 col-start-2">
			{title} <br />
			<span class="text-[#D7D1BF]">{@html details}</span>
		</p>
	{/snippet}

	{#each list as { year, title, details }}
		{@render exp(year, title, details)}
	{/each}

	<p class="text-center year col-start-1">PRESENT</p>
</section>

<style lang="postcss">
	.exp > .year {
		position: relative;
		text-align: center;
		left: -25%;
		background: var(--color-base);
	}

	.exp > .year:not(:last-child)::before {
		content: '';
		position: absolute;
		top: 70%;
		left: 50%;
		width: 1px;
		height: 80%;
		background-color: #fff;
	}
</style>
