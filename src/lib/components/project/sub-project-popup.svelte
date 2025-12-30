<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	import { CloseIcon } from '$lib/assets/icons';

	import type { Project } from '$lib/types';

	interface Props {
		project?: Project;
		width?: number;
		height?: number;
		left?: number;
		top?: number;
	}

	const duration = 100;

	let { project = $bindable(), width, height, left, top }: Props = $props();

	let openPopup = $state(false);
	let local = new Tween({ w: 0, h: 0, l: 0, t: 0 });

	$effect(() => {
		document.body.style.overflow = project ? 'hidden' : 'auto';
		if (project) {
			openPopup = false;
			local.set(
				{
					w: width ?? 0,
					h: height ?? 0,
					l: left ?? 0,
					t: top ?? 0
				},
				{
					duration: 0
				}
			);

			setTimeout(() => {
				openPopup = true;
				local.set(
					{
						w: window.innerWidth * 0.9,
						h: window.innerHeight * 0.9,
						l: (window.innerWidth - window.innerWidth * 0.9) / 2,
						t: window.innerHeight - window.innerHeight * 0.9
					},
					{
						duration: duration
					}
				);
			}, duration);
		}
	});

	const handleClose = async () => {
		await local.set(
			{
				w: width ?? 0,
				h: height ?? 0,
				l: left ?? 0,
				t: top ?? 0
			},
			{
				duration: duration
			}
		);
		openPopup = false;
		project = undefined;
	};
</script>

{#if openPopup}
	<div
		transition:fade
		class="fixed w-screen h-screen bg-white/10 backdrop-blur-md top-0 left-0 z-20"
	>
		<button onclick={handleClose} class="fixed cursor-pointer left-[5%] top-[3%]">
			<img src={CloseIcon} alt="close icon" class=" w-12 h-12" />
		</button>
	</div>
	<section
		class="fixed project-bg rounded-4xl p-4 flex gap-3 bg-primary project-bg z-21"
		style="width:{local.current.w}px;height:{local.current.h}px;left:{local.current.l}px;top:{local
			.current.t}px;"
	></section>
{/if}

<style lang="postcss">
	.project-bg {
		background-image: linear-gradient(150deg, #1a1a1b80 0%, #08143080 100%);
	}
</style>
