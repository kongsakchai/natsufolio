<script lang="ts">
	import CardId from '$lib/components/CardId.svelte';
	import ChipList from '$lib/components/ChipList.svelte';
	import Experiences from '$lib/components/Experiences.svelte';
	import HardSkill from '$lib/components/HardSkill.svelte';
	import { fadeWhenScroll } from '$lib/use/fadeWhenScroll';
</script>

<h1>ABOUT (ME)</h1>

<section class="relative mb-8 mt-16 flex flex-col items-center">
	<CardId />
</section>

<section class="mx-auto my-8 grid max-w-[414px] grid-cols-3 gap-y-8 text-nowrap font-mono">
	<article>
		<h5 class="font-normal">/ EDUCATION</h5>
		<p>Fine and Applied Arts<br />(Fashion Design)</p>
		<li>Thammasat University</li>
	</article>

	<article class="col-start-3">
		<h5 class="font-normal">/ LANGUAGES</h5>
		<p>Thai (Native) <br />English (Advance)</p>
	</article>

	<article class="col-span-3" use:fadeWhenScroll>
		<h5 class="font-normal">/ EXPERIENCES</h5>
		<Experiences />
	</article>

	<article class="col-span-3" use:fadeWhenScroll>
		<h5 class="font-normal">/ CREATIVE FIELDS</h5>
		<ChipList
			list={[
				'ILLUSTRATION',
				'LOGO DESIGN',
				'CHARACTER DESIGN',
				'UI DESIGN',
				'PACKAGE DESIGN',
				'BRANDING'
			]}
		/>
	</article>

	<article class="col-span-3" use:fadeWhenScroll>
		<h5 class="font-normal">/ SOFT SKILLS</h5>
		<ChipList
			list={[
				'COMMUNICATION',
				'ORGANIZATION',
				'CHARACTER DESIGN',
				'TIME MANAGEMENT',
				'TEAM WORK',
				'FLEXIBILITY',
				'CREATIVITY'
			]}
		/>
	</article>

	<article class="col-span-3" use:fadeWhenScroll>
		<h5 class="font-normal">/ HARD SKILLS</h5>
		<HardSkill />
	</article>
</section>
