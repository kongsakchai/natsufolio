<script lang="ts">
	import { ArrowLeft } from '$lib/assets/icons';

	import { graphicTypes, projects } from '$lib/data';

	const twoDigit = (n: number) => {
		if (n == 0) return n.toString();
		const str = n.toString();
		return str.length < 2 ? `0${str}` : str;
	};

	const workTypeCount = Object.fromEntries(
		graphicTypes.map((s) => {
			const filter = projects.filter((p) => p.subTags?.includes(s));
			return [s, twoDigit(filter.length)];
		})
	);
</script>

<h1 class="mx-6 uppercase flex items-center gap-3">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	Graphic Design
</h1>

<section class="mt-10 mx-9 max-w-full text-nowrap flex flex-col gap-4">
	{#each graphicTypes as graphicType}
		<a href="/work/graphic-design/{graphicType}">
			<div
				class="flex text-lg items-center justify-between px-6 py-4 rounded-4xl font-almarai menu"
			>
				<span>{graphicType}</span>
				<span class="font-almarai font-normal text-xs ml-1">({workTypeCount[graphicType]})</span>
			</div>
		</a>
	{/each}
</section>

<style lang="postcss">
	.menu {
		box-shadow:
			inset 1px 1px 6px #ffffff66,
			inset -1px -1px 6px #ffffff66;
	}
</style>
