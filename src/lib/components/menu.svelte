<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const list = [
		{ name: 'HOME', link: '/' },
		{ name: 'WORK', link: '/work' },
		{ name: 'ABOUT ME', link: '/about' },
		{ name: 'CERTIFICATE', link: '/certificate' },
		{ name: 'CONTACT', link: '/contact' }
	];

	let scroll = $state(false);
	let currentMenu = $derived.by(() => {
		return list.filter(({ link }) => {
			if (link === '/') {
				return link !== page.url.pathname;
			}

			return !page.url.pathname.startsWith(link);
		});
	});

	onMount(() => {
		// let timer: number;
		// const onScroll = () => {
		// 	scroll = true;
		// 	clearTimeout(timer);
		// 	timer = setTimeout(() => {
		// 		scroll = false;
		// 	}, 300);
		// };
		// window.addEventListener('scroll', onScroll);
		// return () => {
		// 	window.removeEventListener('scroll', onScroll);
		// };
	});
</script>

<nav
	class="menu flex w-4/5 justify-between gap-6 rounded-full bg-[#E2E6EA] bg-opacity-10 px-8 py-4"
	class:opacity-0={scroll}
>
	{#each currentMenu as { name, link }}
		<a href={link} class="text-xs text-center uppercase text-white font-mono text-nowrap">
			{name}
		</a>
	{/each}
</nav>

<svg style="display:none;">
	<filter id="displacementFilter">
		<feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />

		<feDisplacementMap
			in="SourceGraphic"
			in2="turbulence"
			scale="20"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
</svg>

<style lang="postcss">
	.menu {
		position: fixed;
		bottom: 3.5rem;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.5s ease-in-out;
		box-shadow:
			inset -2px -2px 5px #ffffff,
			2px 2px 5px #24242410;
		backdrop-filter: blur(4px) url(#displacementFilter);
	}
</style>
