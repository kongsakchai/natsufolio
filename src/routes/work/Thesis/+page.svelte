<script lang="ts">
	import { onMount } from 'svelte';

	import { ArrowLeft } from '$lib/assets/icons';
	import { ThesisBackground1, ThesisBackground2 } from '$lib/assets/works';

	import { projects } from '$lib/data';

	import SubProjectItem from '$lib/components/project/sub-project-item.svelte';

	import { tags } from '$lib/constants/tags';

	import { fadeInView } from '$lib/services/use/fade-in-view';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<h1 class="header uppercase flex items-start gap-3 font-almarai font-normal fixpos">
	<button onclick={() => window.history.back()}>
		<img src={ArrowLeft} alt="arrow right" class=" w-4" />
	</button>
	<div class="mt-1 font-archivo">Thesis</div>
</h1>

<section class="mt-20 mb-10 flex flex-col max-w-110 mx-auto gap-4 relative">
	<img
		src={ThesisBackground1}
		alt="thesis-background-1"
		class="absolute w-full right-0 object-contain object-top-right -top-10 -z-1"
	/>

	<img
		src={ThesisBackground2}
		alt="thesis-background-2"
		class="absolute w-full left-0 top-40 -z-1"
	/>

	<h1 class="text-5xl">JEMAI</h1>
	<h1 class="font-almarai font-thin text-xs leading-0">Clothing brand</h1>

	<p class="text-xs w-[40%] mt-20">
		In the present time, online games have become a part of society, so people are getting more
		interested in them. Many businesses are joining the online gaming market, and fashion is also
		following the trend. Whether it's fashion in real life or in online games, it's something people
		desire. To offer more clothing choices for those interested in online gaming, they created a
		special streetwear collection called 'KDA\JEMAI.'
	</p>

	{#each projects(tags.Thesis) as prj}
		<a
			href={prj.external}
			target="_blank"
			use:fadeInView
			class="project-bg bg-linear-to-br from-primary/60 to-[#081430]/60 mt-10 w-full h-37.5 rounded-4xl p-4 flex gap-3 overflow-hidden transition-all hover:scale-105"
		>
			<SubProjectItem project={prj} />
		</a>
	{/each}
</section>
