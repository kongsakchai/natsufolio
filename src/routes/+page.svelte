<script lang="ts">
	import Emoji from '$lib/components/home/emoji.svelte';
	import PageTransition from '$lib/components/page-transition.svelte';
</script>

<PageTransition>
	<h1 class="header tracking-wider">Natthamon Pienrakkarn, <br /> Natsu</h1>
	<!-- <h4 class="font-almarai font-normal">Graphic Designer</h4> -->
	<!-- 
	<section class="mx-2 mt-25 max-w-110 grid grid-cols-2 items-center">
		<div class="flex flex-col gap-6 h-full justify-center">
			<a href="/about"><h1 class="font-almarai font-normal">ABOUT ME</h1></a>
			<a href="/work"><h1 class="font-almarai font-normal">WORK</h1></a>
			<a href="/certificate"><h1 class="font-almarai font-normal">CERTIFICATE</h1></a>
			<a href="/contact"><h1 class="font-almarai font-normal">CONTACT</h1></a>
		</div>
		<div class="relative -top-10">
			<Emoji />
		</div>
	</section> -->
	<section class="mx-auto my-1 max-w-110 h-full">
		<Emoji />
	</section>
</PageTransition>
