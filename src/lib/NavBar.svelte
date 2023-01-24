<script>
	import MobileMenu from './MobileMenu.svelte';
	import IconPeacock from './svg/icon-peacock.svelte';
	let showMobileMenu = false;
</script>

<nav>
	<div class="inner">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<MobileMenu bind:showMobileMenu />

		<a href="/" class="logo-link">
			<IconPeacock size={62} />
		</a>

		<div class={`navbar-list ${showMobileMenu ? ' mobile' : ''}`}>
			<a href="/test">Projects</a>
			<a href="/#">About Me</a>
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		width: 100%;
		position: fixed;
		z-index: 1000;
	}
	a {
		color: var(--menu-color);
		text-decoration: none;
		text-align: center;
	}

	.inner {
		background-color: var(--menu-background);
		top: 0;
		position: fixed;
		width: 100%;
	}

	.logo-link {
		margin-left: calc(50% - 25px);
	}

	.navbar-list {
		display: none;
	}

	.navbar-list a {
		color: var(--menu-color);
		text-decoration: none;
		display: block;
		font-size: 2rem;
		padding-block: 8vh;
		align-self: center;
	}
	.navbar-list.mobile {
		display: initial;
		padding-left: 25px;
	}

	@media only screen and (min-width: 650px) {
		.inner {
			display: inline-flex;
			position: fixed;
		}
		.logo-link,
		.navbar-list a {
			margin: 6px;
			display: initial;
			font-size: 1.5rem;
			padding-block: 0;
		}

		.navbar-list {
			display: flex;
			margin-left: calc(50% - 100px);
		}
	}
</style>
