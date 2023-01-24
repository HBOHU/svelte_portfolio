<script>
	import { onMount } from 'svelte';
	import IconPeacock from './svg/icon-peacock.svelte';

	// Show mobile icon and display menu
	let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 650px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<nav>
	<div class="inner">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<div class="name-title">
			<a href="/">StiJN&nbsp</a>
			<IconPeacock size={62} />
		</div>
		<div class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<a href="/test">Projects</a>
			<a href="#">About Me</a>
		</div>
	</div>
</nav>

<style lang="scss" deep>
	nav {
		background-color: var(--menu-background);
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
		width: 100%;
		position: absolute;
		top: 0px;
		z-index: 100;
	}

	.inner {
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;

		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 18px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: var(--menu-mobile-icon);
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 100%;
	}

	.mobile-icon:after {
		width: 100%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: scale(1.3) rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: scale(1.3) rotate(45deg);
	}
	.name-title {
		margin: auto;
		font-size: 1.6em;
		display: flex;
		z-index: 99;
	}
	.navbar-list {
		display: none;
		width: 100%;
		margin: 0;
		// TODO: fix centering
		padding-left: 34%;
	}

	.navbar-list.mobile {
		background-color: var(--menu-background);
		position: fixed;
		height: calc(100% - 42px);
		bottom: 0;
		left: 0;
		display: block;
	}

	.navbar-list a {
		color: var(--menu-color);
		text-decoration: none;
		height: 2.2em;
		font-size: 2.2em;
		display: flex;
		text-align: center;
		margin-top: 18%;
	}

	.name-title a {
		display: none;
		text-decoration: none;
		color: var(--menu-color);
	}

	@media only screen and (min-width: 650px) {
		.mobile-icon {
			display: none;
		}
		.name-title {
			margin: 0;
			width: 100%;
			align-items: center;
		}

		.name-title a {
			padding-top: 10px;
			display: initial;
		}
		.navbar-list {
			display: flex;
		}

		.navbar-list a {
			align-items: center;
			font-size: 1.2em;
			margin: auto;
		}
	}
</style>
