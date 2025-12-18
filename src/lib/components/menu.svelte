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
	class="menu flex justify-between gap-6 rounded-3xl bg-[#E2E6EA]/30 px-8 py-4"
	class:opacity-0={scroll}
>
	{#each currentMenu as { name, link }}
		<a
			href={link}
			class="text-sm text-center uppercase text-white text-shadow-md font-almarai text-nowrap"
		>
			{name}
		</a>
	{/each}
</nav>

<!-- <svg style="display:none;">
	<filter id="displacementFilter">
		<feTurbulence
			type="fractalNoise"
			seed="5"
			baseFrequency="0.01"
			numOctaves="1"
			result="turbulence"
		/>

		<feDisplacementMap
			in="SourceGraphic"
			in2="turbulence"
			scale="20"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
</svg> -->

<style lang="postcss">
	.menu {
		position: fixed;
		bottom: 3.5rem;
		left: 50%;
		transform: translateX(-50%);
		transition: all 0.5s ease-in-out;
		backdrop-filter: blur(2px);
	}
</style>
