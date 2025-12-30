<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { fade, fly } from 'svelte/transition';

	import { ArrowLeft } from '$lib/assets/icons';

	import type { Project } from '$lib/types';

	interface Props {
		project?: Project;
		width?: number;
		height?: number;
		left?: number;
		top?: number;
	}

	const duration = 200;

	let { project = $bindable(), width, height, left, top }: Props = $props();

	let openPopup = $state(false);
	let openContent = $state(false);
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

			setTimeout(async () => {
				openPopup = true;
				await local.set(
					{
						w: window.innerWidth * 0.9,
						h: window.innerHeight * 0.9,
						l: (window.innerWidth - window.innerWidth * 0.9) / 2,
						t: (window.innerHeight - window.innerHeight * 0.9) / 2
					},
					{
						duration: duration
					}
				);

				openContent = true;
			}, duration);
		}
	});

	const handleClose = async () => {
		openContent = false;
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
		project = undefined;
		openPopup = false;
	};
</script>

{#if openPopup}
	<div
		transition:fade
		class="fixed w-screen h-screen bg-white/10 backdrop-blur-sm top-0 left-0 z-20"
	></div>
	<section
		class="fixed project-bg rounded-4xl p-6 flex gap-3 bg-primary project-bg z-21 flex-col overflow-hidden"
		style="width:{local.current.w}px;height:{local.current.h}px;left:{local.current.l}px;top:{local
			.current.t}px;"
	>
		{#if openContent}
			<h1 class=" uppercase items-center gap-3 font-almarai font-normal flex">
				<button onclick={handleClose}>
					<img src={ArrowLeft} alt="arrow right" class=" w-4" />
				</button>
				<div>
					{@html project?.name}
				</div>
			</h1>

			{#each project?.contents as { Component, params }, i}
				<section
					in:fly|global={{ y: 100, delay: (i + 1) * duration }}
					out:fade|global={{ duration: duration }}
					class="w-full"
				>
					<Component {...params} />
				</section>
			{/each}
		{/if}
	</section>
{/if}

<style lang="postcss">
	.project-bg {
		background-image: linear-gradient(150deg, #1a1a1b80 0%, #08143080 100%);
	}
</style>
