<script lang="ts">
	import { creativeFields, experiences, skills, softSkills } from '$lib/data';

	import CardId from '$lib/components/card-id.svelte';
	import ChipList from '$lib/components/chip-list.svelte';
	import Experiences from '$lib/components/experiences.svelte';
	import HardSkill from '$lib/components/hard-skill.svelte';

	import { fadeInView } from '$lib/services/use/fade-in-view';
</script>

<h1>ABOUT (ME)</h1>

<section class="relative mt-16 flex flex-col items-center">
	<CardId />
</section>

<section class="mx-auto -mt-8 mb-10 grid max-w-[414px] grid-cols-3 gap-y-8 text-nowrap font-mono">
	<article>
		<h5 class="font-normal">/ EDUCATION</h5>
		<p>Fine and Applied Arts<br />(Fashion Design)</p>
		<span>Thammasat University</span>
	</article>

	<article class="col-start-3">
		<h5 class="font-normal">/ LANGUAGES</h5>
		<p>Thai (Native) <br />English (Advance)</p>
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal">/ EXPERIENCES</h5>
		<Experiences list={experiences} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal">/ CREATIVE FIELDS</h5>
		<ChipList list={creativeFields} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal">/ SOFT SKILLS</h5>
		<ChipList list={softSkills} />
	</article>

	<article class="col-span-3" use:fadeInView>
		<h5 class="font-normal">/ HARD SKILLS</h5>
		<HardSkill list={skills} />
	</article>
</section>
