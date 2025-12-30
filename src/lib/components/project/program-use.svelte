<script lang="ts">
	import type { Skill } from '$lib/types';

	interface Props {
		list?: Skill[];
		multiple?: boolean;
		class?: string;
	}

	let { list = [], multiple = false, class: className }: Props = $props();
</script>

<section
	class="grid w-full {multiple
		? 'grid-cols-2'
		: ''} gap-x-6 gap-y-4 text-nowrap font-almarai {className}"
>
	<h3 class="col-span-full font-almarai font-normal">Program Used</h3>

	{#snippet skill(icon: string, name: string, level: string)}
		<div class="flex gap-4">
			<img src={icon} alt="Adobe Photoshop" class="w-6" />
			<p class="font-mono text-[10px]">{name} <br /># {level}</p>
		</div>
	{/snippet}

	{#each list as { icon, name, level }}
		{@render skill(icon, name, level)}
	{/each}
</section>
