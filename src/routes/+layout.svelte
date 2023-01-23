<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<slot />

<style lang="scss">
	:root {
		--menu-background: rgb(218, 134, 86);
		--menu-color: rgb(182, 26, 26);
		--menu-mobile-icon: rgb(0, 0, 0);
	}
</style>
