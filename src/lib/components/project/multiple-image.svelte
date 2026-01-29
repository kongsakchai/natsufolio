<script lang="ts">
	import { fadeInView } from '$lib/services/use/fade-in-view';

	interface Props {
		class?: string;
		classImg?: string;
		classParent?: string;
		images: (string | { src: string; class?: string })[];
		detail?: string;
		detailClass?: string;
	}

	let { class: className, images, classImg, classParent, detail, detailClass }: Props = $props();
</script>

<figure class="w-full {classParent} " use:fadeInView>
	<div class="w-full {className}">
		{#each images as img}
			{#if typeof img === 'object'}
				<img src={img.src} alt="cover" class="object-contain {img.class ?? classImg}" />
			{:else}
				<img src={img} alt="cover" class="object-contain {classImg}" />
			{/if}
		{/each}
	</div>
	{#if detail}
		<figcaption class="mt-4 text-xs {detailClass}">{@html detail}</figcaption>
	{/if}
</figure>
