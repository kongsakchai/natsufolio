<script lang="ts">
	import { onMount } from 'svelte';

	import Menu from '$lib/components/menu.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	import '../app.css';

	let { children } = $props();

	onMount(() => {
		let allImages = document.querySelectorAll('img');
		allImages.forEach((value) => {
			value.oncontextmenu = (e) => {
				e.preventDefault();
			};
			value.onpointerdown = (e) => {
				e.preventDefault();
			};
		});
	});
</script>

<svelte:head>
	<title>NATSU</title>
</svelte:head>

<Navbar />

{@render children()}

<Menu />
