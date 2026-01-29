<script lang="ts">
	import { fadeInView } from '$lib/services/use/fade-in-view';

	interface Props {
		str: string;
		class?: string;
	}

	let { str, class: className }: Props = $props();
</script>

<p class="mt-4 text-xs {className}" use:fadeInView>{@html str}</p>
