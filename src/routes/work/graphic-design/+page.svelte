<script lang="ts">
	import { ArrowLeft } from '$lib/assets/icons';

	import { graphicTypes, projects } from '$lib/data';

	import { twoDigit } from '$lib/utils';

	const workTypeCount = Object.fromEntries(
		graphicTypes.map((s) => {
			const filter = projects.filter((p) => p.subTags?.includes(s));
			return [s, twoDigit(filter.length)];
		})
	);
</script>

<h1 class="header uppercase flex items-center gap-3">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	Graphic Design
</h1>

<section class="mt-10 w-full text-nowrap flex flex-col gap-4 mb-10">
	{#each graphicTypes as graphicType}
		<a href="/work/graphic-design/{graphicType}">
			<h3
				class="flex font-almarai font-normal items-center justify-between px-6 py-4 rounded-4xl menu"
			>
				<span>{graphicType}</span>
				<span class="font-almarai ml-1">({workTypeCount[graphicType]})</span>
			</h3>
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
