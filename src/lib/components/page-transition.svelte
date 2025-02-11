<script lang="ts">
	let { children } = $props();
</script>

<main class="w-full overflow-hidden px-9 py-6 pb-24 absolute">
	{@render children()}
</main>
