<script lang="ts">
	interface Props {
		str: string;
		class?: string;
	}

	let { str, class: className }: Props = $props();
</script>

<p class="mt-4 text-xs {className}">{@html str}</p>
