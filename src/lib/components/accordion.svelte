<script lang="ts">
	import type { Snippet } from 'svelte';

	import AccordionIcon from './accordion-icon.svelte';

	interface Props {
		children?: Snippet;
		open?: boolean;
		title: string;
		onChange?: (val: boolean) => void;
	}
	let { onChange, children, title, open = $bindable(false) }: Props = $props();

	let show = $derived(children && children.length > 0 && open);

	const onClick = () => {
		open = !open;
		onChange?.(open);
	};
</script>

<button
	class="w-full text-left border-y px-9 py-4 flex justify-between items-center"
	onclick={onClick}
>
	<h2 class="font-mono font-normal m-0">{title}</h2>

	<AccordionIcon {open} />
</button>
<div
	class="w-full text-3xl origin-top overflow-hidden px-9 transition-all duration-500"
	style="max-height: {show ? 1000 : 0}px;"
	class:py-5={show}
>
	{@render children?.()}
</div>
