<script lang="ts">
	import type { Skill } from '$lib/types';

	interface Props {
		list?: Skill[];
		multiple?: boolean;
	}

	let { list = [], multiple = true }: Props = $props();
</script>

<section class="grid w-full {multiple ? 'grid-cols-2' : ''} gap-6 text-nowrap font-almarai">
	{#snippet skill(icon: string, name: string, level: string)}
		<div class="flex gap-4">
			<img src={icon} alt="Adobe Photoshop" class="w-7" />
			<p>{name} <br /># {level}</p>
		</div>
	{/snippet}

	{#each list as { icon, name, level }}
		{@render skill(icon, name, level)}
	{/each}
</section>
