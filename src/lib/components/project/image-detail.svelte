<script lang="ts">
	interface Props {
		class?: string;
		classImg?: string;
		detail?: string;
		detailClass?: string;
		img: string;
	}

	let { class: className, img, detail, classImg, detailClass }: Props = $props();
</script>

<figure class="w-full {className} ">
	<img src={img} alt="cover" class="object-contain {classImg}" />
	{#if detail}
		<figcaption class="mt-4 text-xs {detailClass}">{@html detail}</figcaption>
	{/if}
</figure>
