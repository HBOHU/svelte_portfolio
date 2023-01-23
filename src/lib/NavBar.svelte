<script>
	import { onMount } from 'svelte';

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
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<nav>
	<div class="inner">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<li>
				<a href="#">About Me</a>
				<a href="#">Projects</a>
				<a href="#">Coffee?</a>
			</li>
		</ul>
	</div>
</nav>

<style lang="scss" deep>
	nav {
		background-color: var(--menu-background);
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
		width: 100%;
		position: fixed;
		display: block;
		top: 0px;
		z-index: 100;
	}

	.inner {
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
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
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
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
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		text-align: center;
		margin: 0;
	}

	.navbar-list.mobile {
		background-color: var(--menu-background);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
		text-align: center;
	}

	.navbar-list a {
		color: var(--menu-color);
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		text-align: center;

		font-size: 13px;
	}

	@media only screen and (min-width: 650px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
