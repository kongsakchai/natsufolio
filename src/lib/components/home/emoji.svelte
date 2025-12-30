<script lang="ts">
	// import Emoji from '$lib/assets/Emoji.mp4';
	import Emoji from '$lib/assets/Emoji.gif';
</script>

<!-- <video autoplay playsinline loop muted class="w-full">
	<source src={Emoji} type="video/mp4" />
</video> -->
<div class="w-full relative aspect-square">
	<img src={Emoji} alt="emoji" class="absolute max-w-[150%] -translate-x-1/2 left-1/2" />
</div>
