<script lang="ts">
	import AiIcon from '$lib/assets/adobe-illustrator.svg';
	import LrIcon from '$lib/assets/adobe-lightroom.svg';
	import PsIcon from '$lib/assets/adobe-photoshop.svg';
	import FigmaIcon from '$lib/assets/figma.svg';
</script>

<section class="grid w-full grid-cols-2 gap-6 text-nowrap">
	{#snippet skill(icon: string, name: string, level: string)}
		<div class="flex gap-4">
			<img src={icon} alt="Adobe Photoshop" class="w-7" />
			<p>{name} <br /># {level}</p>
		</div>
	{/snippet}

	{@render skill(PsIcon, 'Adobe Photoshop', 'Advance')}
	{@render skill(LrIcon, 'Adobe Lightroom', 'Advance')}
	{@render skill(AiIcon, 'Adobe Illustrator', 'Advance')}
	{@render skill(FigmaIcon, 'Figma', 'Basic')}
</section>
