<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let element;

	onMount(() => {
		gsap.fromTo(
			element,
			{
				left: gsap.utils.random(window.innerWidth / 10, (window.innerWidth / 10) * 9),
				rotate: gsap.utils.random(-20, 20),
				force3D: true
			},
			{
				top: '25%',
				rotate: gsap.utils.random(-20, 20),
				repeat: -1,
				ease: 'expo',
				force3D: true,
				duration: 2,
				onComplete: () => {
					gsap.to(element, {
						top: '120vh',
						rotate: gsap.utils.random(-20, 20),
						ease: 'expo.in',
						duration: 2
					});
				}
			}
		);
	});
</script>

<div bind:this={element} id="element" />

<style>
	#element {
		position: absolute;
		overflow: hidden;
		display: block;
		height: 150px;
		width: 150px;
		padding: 0;

		top: calc(100% + 150px / 2);
		left: 0;
		transform: translate(-50%, -50%);
		background-color: #00bb00;
	}
</style>
