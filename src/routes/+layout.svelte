<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navbar />

<main class="w-full overflow-hidden px-12 py-6 pb-24">
	{@render children()}
</main>

<Menu />
