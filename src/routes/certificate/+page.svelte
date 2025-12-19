<script lang="ts">
	import { certificates } from '$lib/data';

	import { twoDigit } from '$lib/utils';

	import type { Certificates } from '$lib/types';

	const getImageDimen = (node: HTMLImageElement) => {
		const width = node.naturalWidth;
		const height = node.naturalHeight;
		node.width = (node.height * width) / height;
	};
</script>

<svg height="0" width="0" viewBox="0 0 1 1">
	<clipPath id="svgPath" clipPathUnits="objectBoundingBox">
		<path
			d="M 0 1 L 0 0.45 Q 0.01 0.41, 0.04 0.4 L 0.19 0.4 Q 0.2 0.4, 0.21 0.41  L 0.34 0.59 Q 0.35 0.6, 0.36 0.6 L 0.96 0.6 Q 0.99 0.61, 1 0.65 L 1 1 z"
		/>
	</clipPath>
</svg>

{#snippet folder(certs: Certificates)}
	<div
		class="bg-folder w-full min-w-87.5 aspect-video max-w-103.5 flex rounded-2xl overflow-hidden relative p-4 z-1"
	>
		{#each certs.list as cert, i}
			<img
				use:getImageDimen
				src={cert.img}
				alt={cert.name}
				class="relative cert-shadow object-contain"
				style="left: {i > 0 ? -20 * i : '0'}%;z-index:{-i};"
			/>
		{/each}
		<div
			class="category-banner w-full h-full flex justify-between items-end px-4 pb-4 absolute top-0 left-0"
		>
			<h1>{@html certs.type}</h1>
			<p class="text-2xl sm:text-3xl text-center flex flex-col items-center">
				<span>{twoDigit(certs.list.length)}</span>
				<span class="text-xs">certificates</span>
			</p>
		</div>
	</div>
{/snippet}

<h1 class="header">CERTIFICATE</h1>

<section class="mt-10 mx-auto max-w-103.5 flex flex-col">
	{#each certificates as cert}
		{@render folder(cert)}
	{/each}
</section>

<style lang="postcss">
	.bg-folder {
		background: linear-gradient(90deg, #202020, #4c4c4c);
	}

	.category-banner {
		background: #141414bf;
		clip-path: url(#svgPath);
	}

	.cert-shadow {
		box-shadow: 3px 0 4px #00000040;
	}
</style>
