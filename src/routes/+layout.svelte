<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<slot />

<style lang="scss">
	:root {
		--menu-background: rgb(255, 255, 255);
		--menu-color: rgb(0, 0, 0);
		--menu-mobile-icon: rgb(0, 0, 0);
	}

	// @media only screen and (min-width: 650px) {
	// 	:root {
	// 	}
	// }
</style>
