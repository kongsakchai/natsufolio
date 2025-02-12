<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import Menu from '$lib/components/menu.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	import '../app.css';

	injectSpeedInsights();

	let { children } = $props();
</script>

<svelte:head>
	<title>NATSU</title>
</svelte:head>

<Navbar />

{@render children()}

<Menu />
