<script lang="ts">
	import { fadeInView } from '$lib/services/use/fade-in-view';

	interface Props {
		h: 1 | 2 | 3 | 4 | 5 | 6;
		content: string;
		class?: string;
	}

	let { h, content, class: className }: Props = $props();
</script>

<svelte:element this={'h' + h} class={className} use:fadeInView>
	{@html content}
</svelte:element>
