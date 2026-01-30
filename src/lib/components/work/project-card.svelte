<script lang="ts">
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/customParseFormat';

	import { ClockIcon } from '$lib/assets/icons';

	import { showFormattedDate } from '$lib/utils';

	import type { Project } from '$lib/types';

	dayjs.extend(customParseFormat);

	let { project, tag }: { project: Project; tag: string } = $props();
</script>

<div
	class="w-full aspect-2/3 rounded-3xl flex flex-col justify-between overflow-hidden bg-cover"
	style="background-image: url({project.image});{project.imageStyle ||
		'background-position: center;'}"
>
	<p
		class="font-almarai text-[10px] flex gap-1 items-center bg-black/45 w-fit px-1 md:py-0.5 md:px-2 rounded-3xl mt-2 ml-auto mr-2 md:text-sm"
	>
		<img src={ClockIcon} alt={'clock-icon'} class="w-3 h-3 md:w-5 md:h-5 rounded-full img-shadow" />
		{#if project.date}
			{showFormattedDate(project.date)}
		{/if}
		{#if project.endDate}
			- {showFormattedDate(project.endDate)}
		{/if}
	</p>
	<div class="w-full relative">
		<div class="absolute top-0 card-shadow"></div>

		<div
			class="w-full h-full z-1 flex flex-col relative px-2 md:px-4 pt-8 py-3 md:py-5 text-shadow"
		>
			<h6 class="font-roboto font-bold leading-4 md:leading-6">{@html project.name}</h6>
			{#if project.subNameCard}
				<h6 class="font-roboto font-normal leading-4 md:leading-6">{@html project.subNameCard}</h6>
			{/if}
			<p>{@html project.category}</p>

			<a
				href="/work/{tag}/more-details/{project.id}"
				class="more-detail-btn w-4/5 mx-auto p-2 rounded-4xl flex justify-center items-center mt-4"
			>
				<p class="md:text-sm">More Details</p>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.card-shadow {
		width: 100%;
		height: 100%;
		backdrop-filter: blur(8px);
		mask-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 75%, transparent 100%);
	}

	.text-shadow {
		text-shadow: 0 2px 2px #00000080;
	}

	.img-shadow {
		filter: drop-shadow(0 3px 3px #000000);
	}

	.more-detail-btn {
		background-color: #d9d9d940;
		box-shadow:
			0 4px 4px #00000060,
			0 -1px 4px #00000010;
	}
</style>
