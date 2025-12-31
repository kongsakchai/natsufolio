<script lang="ts">
	import { navigating } from '$app/state';
	import { fade } from 'svelte/transition';

	let { children, class: className = '' } = $props();
</script>

<main
	class="w-full h-full px-6 py-6 pb-24 overflow-x-hidden overflow-y-scroll {className} {navigating.to
		? 'absolute'
		: ''}"
	in:fade={{ duration: 300 }}
	out:fade={{ duration: 300 }}
>
	{@render children()}
</main>
