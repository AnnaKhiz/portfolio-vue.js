<template>
	<div class="header__waves">
		<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
			<defs>
				<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(131, 58, 180,0.7" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(253, 29, 29,0.5)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(252, 176, 69,0.3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
			</g>
		</svg>
	</div>
</template>

<script>
  export default {
    name: "uiWaveAnimation.vue"
  }
</script>

<style scoped>

</style>