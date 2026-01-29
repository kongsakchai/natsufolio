<script lang="ts">
	import { navigating } from '$app/state';
	import { fade } from 'svelte/transition';

	let { children, class: className = '' } = $props();
</script>

<main
	class="w-full px-6 py-6 pb-24 {className} {navigating.to ? 'absolute' : ''}"
	in:fade|global={{ duration: 300 }}
	out:fade|global={{ duration: 300 }}
>
	{@render children()}
</main>
