<script lang="ts">
	import { onMount } from 'svelte';

	import { page } from '$app/state';

	const list = [
		{ name: 'HOME', link: '/' },
		{ name: 'WORK', link: '/work' },
		{ name: 'ABOUT ME', link: '/about' },
		{ name: 'CONTACT', link: '/contact' }
	];

	let scroll = $state(false);
	let currentMenu = $derived.by(() => {
		return list.filter(({ link }) => page.url.pathname.startsWith(link));
	});

	onMount(() => {
		let timer: number;

		const onScroll = () => {
			scroll = true;
			clearTimeout(timer);
			timer = setTimeout(() => {
				scroll = false;
			}, 300);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<nav
	class="menu flex w-4/5 max-w-[400px] justify-between gap-6 rounded-full bg-[#E2E6EA] bg-opacity-20 px-8 py-4"
	class:opacity-0={scroll}
>
	{#each currentMenu as { name, link }}
		<a href={link} class="text-xs font-bold uppercase text-white">
			{name}
		</a>
	{/each}
</nav>

<style lang="postcss">
	.menu {
		position: fixed;
		bottom: 3.5rem;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.5s ease-in-out;
	}
</style>
