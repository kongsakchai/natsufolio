<script lang="ts">
	interface Props {
		front: string;
		back: string;
		class?: string;
	}

	let flip = $state(false);

	let { front, back, class: className }: Props = $props();
</script>

<div class="w-full flex">
	<button class="mx-auto relative {className}" onclick={() => (flip = !flip)}>
		<img src={front} alt="Card Front" class="card w-full" class:flip loading="lazy" />
		<img
			src={back}
			alt="Card Front"
			class="card absolute top-0 w-full"
			class:flip={!flip}
			loading="lazy"
		/>
		<p class="caption my-4 font-almarai opacity-70">
			ปัดเพื่อพลิกซองใส่การ์ด<br />Swipe to turn the card sleeve.
		</p>
	</button>
</div>

<style lang="postcss">
	.card {
		transition: all 0.5s ease-in-out;
		backface-visibility: hidden;
	}

	.flip {
		transform: rotateY(180deg);
	}

	.caption {
		animation: fadeIn 2s ease-in-out infinite;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.7;
		}
		100% {
			opacity: 0.3;
		}
	}
</style>
