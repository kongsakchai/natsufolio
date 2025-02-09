<script lang="ts">
	import type { Experience } from '$lib/types';

	interface Props {
		list?: Experience[];
	}

	let { list = [] }: Props = $props();
</script>

<section class="exp relative grid grid-cols-3 gap-y-2">
	{#snippet exp(years: number, title: string, details: string)}
		<span> {years} </span>
		<p class=" col-span-2 col-start-2">
			{title} <br />
			<span class="text-secondary">{details}</span>
		</p>
	{/snippet}

	{#each list as { year, title, details }, i}
		{@render exp(year, title, details)}
	{/each}

	<span>PRESENT</span>
</section>

<style lang="postcss">
	.exp > span {
		position: relative;
		text-align: center;
		left: -25%;
		background: var(--color-base);
	}

	.exp > span:not(:last-child)::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1px;
		height: 100%;
		background-color: #fff;
	}
</style>
