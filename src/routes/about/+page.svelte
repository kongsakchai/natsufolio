<script lang="ts">
	import AiIcon from '$lib/assets/icons/adobe-illustrator.svg';
	import LrIcon from '$lib/assets/icons/adobe-lightroom.svg';
	import PsIcon from '$lib/assets/icons/adobe-photoshop.svg';
	import FigmaIcon from '$lib/assets/icons/figma.svg';

	import CardId from '$lib/components/CardId.svelte';
	import ChipList from '$lib/components/ChipList.svelte';
	import Experiences from '$lib/components/Experiences.svelte';
	import HardSkill from '$lib/components/HardSkill.svelte';

	import { fadeInScroll } from '$lib/use/fadeInScroll';

	import type { Experience, Skill } from '$lib/types';

	const creativeFields = [
		'ILLUSTRATION',
		'LOGO DESIGN',
		'CHARACTER DESIGN',
		'UI DESIGN',
		'PACKAGE DESIGN',
		'BRANDING'
	];

	const softSkills = [
		'COMMUNICATION',
		'ORGANIZATION',
		'CHARACTER DESIGN',
		'TIME MANAGEMENT',
		'TEAM WORK',
		'FLEXIBILITY',
		'CREATIVITY'
	];

	const experiences: Experience[] = [
		{
			year: 2019,
			title: 'TUTV [THAMMASAT CHANNEL]',
			details: '# Graphic Design'
		},
		{
			year: 2022,
			title: 'DIN Animation Studio',
			details: 'intern # Comic Colorist'
		},
		{
			year: 2023,
			title: 'GM Generates Co.,Ltd',
			details: '# Creative & Graphic Design'
		}
	];

	const skills: Skill[] = [
		{
			icon: PsIcon,
			name: 'Adobe Photoshop',
			level: 'Advance'
		},
		{
			icon: LrIcon,
			name: 'Adobe Lightroom',
			level: 'Advance'
		},
		{
			icon: AiIcon,
			name: 'Adobe Illustrator',
			level: 'Advance'
		},
		{
			icon: FigmaIcon,
			name: 'Figma',
			level: 'Basic'
		}
	];
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

	<article class="col-span-3" use:fadeInScroll>
		<h5 class="font-normal">/ EXPERIENCES</h5>
		<Experiences list={experiences} />
	</article>

	<article class="col-span-3" use:fadeInScroll>
		<h5 class="font-normal">/ CREATIVE FIELDS</h5>
		<ChipList list={creativeFields} />
	</article>

	<article class="col-span-3" use:fadeInScroll>
		<h5 class="font-normal">/ SOFT SKILLS</h5>
		<ChipList list={softSkills} />
	</article>

	<article class="col-span-3" use:fadeInScroll>
		<h5 class="font-normal">/ HARD SKILLS</h5>
		<HardSkill list={skills} />
	</article>
</section>
