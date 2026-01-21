<script lang="ts">
	import { certificates } from '$lib/data';

	import CertFolder from '$lib/components/certificate/cert-folder.svelte';
</script>

<svg height="0" width="0" viewBox="0 0 1 1">
	<clipPath id="svgPath" clipPathUnits="objectBoundingBox">
		<path
			d="M 0 1 L 0 0.45 Q 0.01 0.41, 0.04 0.4 L 0.19 0.4 Q 0.2 0.4, 0.21 0.41  L 0.34 0.59 Q 0.35 0.6, 0.36 0.6 L 0.96 0.6 Q 0.99 0.61, 1 0.65 L 1 1 z"
		/>
	</clipPath>
</svg>

<h1 class="header">CERTIFICATE</h1>

<section class="mt-10 mb-10 mx-auto max-w-110 flex flex-col gap-4">
	{#each certificates as cert}
		<CertFolder certs={cert} />
	{/each}
</section>
