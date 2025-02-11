<script lang="ts">
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<main
	class="w-full overflow-hidden px-9 py-6 pb-24 absolute"
	in:fade={{ duration: 300 }}
	out:fade={{ duration: 300 }}
>
	{@render children()}
</main>
