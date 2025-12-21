<script lang="ts">
	import { creativeFields, experiences, skills, softSkills } from '$lib/data';

	import CardId from '$lib/components/card-id.svelte';
	import ChipList from '$lib/components/chip-list.svelte';
	import Experiences from '$lib/components/experiences.svelte';
	import HardSkill from '$lib/components/hard-skill.svelte';

	import { fadeInView } from '$lib/services/use/fade-in-view';
</script>

<h1 class="header">ABOUT (ME)</h1>

<section class="relative mt-16 flex flex-col items-center">
	<CardId />
</section>

<section class="mx-auto -mt-8 mb-10 grid max-w-110 grid-cols-3 gap-y-8 text-nowrap font-almarai">
	<article>
		<h5 class="font-normal header">/ EDUCATION</h5>
		<p>Fine and Applied Arts<br />(Fashion Design)</p>
		<span>Thammasat University</span>
	</article>

	<article class="col-start-3">
		<h5 class="font-normal header">/ LANGUAGES</h5>
		<p>Thai (Native) <br />English (Advance)</p>
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal header">/ EXPERIENCES</h5>
		<Experiences list={experiences} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal header">/ CREATIVE FIELDS</h5>
		<ChipList list={creativeFields} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal header">/ SOFT SKILLS</h5>
		<ChipList list={softSkills} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal header">/ HARD SKILLS</h5>
		<HardSkill list={skills} />
	</article>
</section>
