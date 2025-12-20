<script lang="ts">
	import { fade } from 'svelte/transition';

	let { children, class: className = '' } = $props();
</script>

<main
	class="w-full overflow-hidden px-6 py-6 pb-24 absolute {className}"
	in:fade={{ duration: 300 }}
	out:fade={{ duration: 300 }}
>
	{@render children()}
</main>
