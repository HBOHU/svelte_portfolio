<script>
	import { onMount } from 'svelte';

	// Show mobile icon and display menu
	export let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
	<div id="mobile-menu-bar" />
</div>

<style>
	.mobile-icon {
		cursor: pointer;
		position: fixed;
		height: 18px;
		top: 0;
		margin: 25px;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	#mobile-menu-bar {
		content: '';
		position: absolute;
		width: 25px;
		height: 2.5px;

		background-color: var(--menu-mobile-icon);
		transition: all 0.6s;
		transform-origin: center;
		border-radius: 50%;
	}

	.mobile-icon:after {
		top: 16px;
	}

	#mobile-menu-bar {
		top: 8px;
	}

	.mobile-icon.active:before {
		display: none;
	}

	.mobile-icon:before {
		animation: fadeInAnimation ease-out 1.2s;
	}

	.mobile-icon.active:after {
		top: 50%;
		transform: scale(1.3) rotate(-45deg);
	}

	.mobile-icon.active #mobile-menu-bar {
		transform: scale(1.3) rotate(45deg);
	}

	@media only screen and (min-width: 650px) {
		.mobile-icon {
			display: none;
		}
	}
	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
