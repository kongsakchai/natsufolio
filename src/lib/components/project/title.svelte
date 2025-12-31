<script lang="ts">
	interface Props {
		h: 1 | 2 | 3 | 4 | 5 | 6;
		content: string;
		class?: string;
	}

	let { h, content, class: className }: Props = $props();
</script>

<svelte:element this={'h' + h} class={className}>
	{@html content}
</svelte:element>
