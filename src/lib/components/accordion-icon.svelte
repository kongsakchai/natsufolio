<script lang="ts">
	let { open = $bindable(false) } = $props();
</script>

<div class="w-4 h-4 icon" style:--rotate-line={open ? '90deg' : '0deg'}>
	<div class="line-1"></div>
	<div class="line-2"></div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.icon {
		@apply relative h-4 w-4;
		> * {
			@apply absolute left-1/2 top-1/2 h-px w-4 bg-white;
			transform-origin: 50% 50%;
			transition: all 300ms ease-in-out;
		}
		> .line-1 {
			--rotate-line1: calc(2 * var(--rotate-line));
			transform: translate(-50%, -50%) rotateZ(var(--rotate-line1));
		}
		> .line-2 {
			--rotate-line2: calc(90deg + var(--rotate-line));
			transform: translate(-50%, -50%) rotateZ(var(--rotate-line2));
		}
	}
</style>
