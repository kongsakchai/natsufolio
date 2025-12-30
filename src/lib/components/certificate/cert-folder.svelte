<script lang="ts">
	import { twoDigit } from '$lib/utils';

	import { receive, send } from '$lib/transitions/crossfade';

	import type { Certificates } from '$lib/types';

	interface Props {
		certs: Certificates;
	}

	let { certs }: Props = $props();

	const imgSetting = (node: HTMLImageElement) => {
		node.onload = () => {
			const width = node.naturalWidth;
			const height = node.naturalHeight;
			node.width = (node.height * width) / height;
		};
	};
</script>

<a
	href="/certificate/{certs.type}"
	class="bg-folder w-full min-w-87.5 aspect-video max-w-110 flex rounded-2xl overflow-hidden relative p-4 z-1"
>
	{#each certs.list as cert, i}
		<img
			in:receive|global={{ key: cert.name }}
			out:send|global={{ key: cert.name }}
			use:imgSetting
			src={cert.img}
			alt={cert.name}
			class="relative cert-shadow object-contain"
			style="left: {i > 0 ? -20 * i : '0'}%;z-index:{-i};"
			loading="lazy"
		/>
	{/each}
	<div
		class="category-banner w-full h-full flex justify-between items-end px-4 pb-4 absolute top-0 left-0"
	>
		<h1>{@html certs.title}</h1>
		<p class="text-2xl sm:text-3xl text-center flex flex-col items-center">
			<span>{twoDigit(certs.list.length)}</span>
			<span class="text-xs">certificates</span>
		</p>
	</div>
</a>

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
