<script lang="ts">
	import { CardBack, CardFront, Face } from '$lib/assets';

	let flip = $state(false);
</script>

<img
	src={Face}
	alt="Card Front"
	class="card w-[330px] relative -top-10"
	class:flip
	loading="lazy"
/>

<button class="hidden" onclick={() => (flip = !flip)}>
	<img src={CardFront} alt="Card Front" class="card w-[330px]" class:flip loading="lazy" />
	<img
		src={CardBack}
		alt="Card Front"
		class="card absolute top-0 w-[330px]"
		class:flip={!flip}
		loading="lazy"
	/>
	<p class="caption my-4 font-mono opacity-70">Tap to Flip ID Card</p>
</button>

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
