<script lang="ts">
	interface Props {
		class?: string;
		classImg?: string;
		images: (string | { src: string; class?: string })[];
	}

	let { class: className, images, classImg }: Props = $props();
</script>

<div class="w-full {className} ">
	{#each images as img}
		{#if typeof img === 'object'}
			<img src={img.src} alt="cover" class="object-contain {img.class ?? classImg}" />
		{:else}
			<img src={img} alt="cover" class="object-contain {classImg}" />
		{/if}
	{/each}
</div>
