<script lang="ts">
	interface Props {
		class?: string;
		classImg?: string;
		img: string;
		detail: string;
		captionClass?: string;
	}

	let { class: className, img, detail, classImg, captionClass }: Props = $props();
</script>

<figure class="w-full {className} ">
	<img src={img} alt="cover" class="object-contain {classImg}" />
	<figcaption class="mt-4 text-xs text-center {captionClass}">{@html detail}</figcaption>
</figure>
