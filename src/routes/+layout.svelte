<script lang="ts">
	import Menu from '$lib/components/menu.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import PreviewImg from '$lib/components/preview-img.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>NATSU</title>
</svelte:head>

<Navbar />

{@render children()}

<Menu />

<PreviewImg />
