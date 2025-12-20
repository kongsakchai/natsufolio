<script lang="ts">
	interface Props {
		class?: string;
		classImg?: string;
		img: string;
		detail: string;
	}

	let { class: className, img, detail, classImg }: Props = $props();
</script>

<section class="w-full {className} ">
	<img src={img} alt="cover" class="object-contain {classImg}" />
</section>
