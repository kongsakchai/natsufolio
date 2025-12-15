<script lang="ts">
	import PageTransition from '$lib/components/page-transition.svelte';

	let { children } = $props();
</script>

<PageTransition class="px-0!">
	{@render children()}
</PageTransition>
