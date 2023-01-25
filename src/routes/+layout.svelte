<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<div class="body-wrapper">
	<slot />
</div>

<style lang="scss">
	:root {
		--menu-background: rgb(255, 255, 255);
		--menu-color: rgb(0, 0, 0);
		--menu-mobile-icon: rgb(0, 0, 0);
	}
	.body-wrapper {
		padding-top: 38px;
	}
	// @media only screen and (min-width: 650px) {
	// 	:root {
	// 	}
	// }
</style>
