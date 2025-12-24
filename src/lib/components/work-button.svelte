<script lang="ts">
	import { slide } from 'svelte/transition';

	import { ArrowRight } from '$lib/assets/icons';

	import { workCountByTags } from '$lib/data';

	import { twoDigit } from '$lib/utils';

	import { type Menu } from '$lib/types';

	import WorkButton from './work-button.svelte';

	let { work, isSub }: { work: Menu; isSub?: boolean } = $props();

	let show = $state(false);
</script>

<a
	href={work.submenu ? null : `/work/${work.name}`}
	onclick={() => (show = (work.submenu || false) && !show)}
>
	<h3
		transition:slide|global
		class="uppercase flex items-center gap-3 font-almarai {isSub && 'text-sm sm:text-base'}"
	>
		<img src={ArrowRight} alt="arrow right" class="inline-block {isSub ? 'w-3' : 'w-4'}" />
		{work.name}
		<span class="font-almarai font-normal text-xs ml-1">
			({twoDigit(workCountByTags[work.name])})
		</span>
	</h3>
</a>

{#if show}
	<div transition:slide|global class="w-full ml-6 flex flex-col gap-4">
		{#each work.submenu as submenu}
			<WorkButton work={submenu} isSub={true} />
		{/each}
	</div>
{/if}
