<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<div class="body-wrapper">
	<slot />
</div>

<style lang="scss">
	:root {
		--p-text-color: rgb(255, 255, 255);
		--menu-background: rgb(89, 152, 163);
		--menu-color: rgb(34, 34, 34);
		--menu-mobile-icon: var(--p-text-color);

		text-decoration: none;
	}
	.body-wrapper {
		padding-top: 2px;
	}
	@media only screen and (min-width: 650px) {
		:root {
		}
		.body-wrapper {
			padding-top: 14px;
		}
	}
</style>
