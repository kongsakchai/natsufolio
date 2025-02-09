<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';

	injectSpeedInsights();

	let { children } = $props();
</script>

<Navbar />

<main class="w-full overflow-hidden px-9 py-6 pb-24">
	{@render children()}
</main>

<Menu />
