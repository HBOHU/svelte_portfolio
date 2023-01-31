<script>
	import { gsap, Power3 } from 'gsap';
	import { onMount } from 'svelte';

	import IconCamera from '$lib/assets/svg/icon-camera.svelte';
	import IconCode from '$lib/assets/svg/icon-code.svelte';
	import IconCoffee from '$lib/assets/svg/icon-coffee.svelte';
	import IconDumbbell from '$lib/assets/svg/icon-dumbbell.svelte';
	import StaticForm from '$lib/StaticForm.svelte';

	let randomComponents = [IconCamera, IconCode, IconCoffee, IconDumbbell];

	/**
	 * @type {any}
	 */
	let leftComponent;
	/**
	 * @type {any}
	 */
	let rightComponent;

	onMount(async () => {
		leftComponent = randomComponents[Math.floor(Math.random() * randomComponents.length)];
		rightComponent = randomComponents[Math.floor(Math.random() * randomComponents.length)];
	});
	onMount(() => {
		// gsap.from('.left-component', {
		// 	duration: 1000,
		// 	x: '-50%',
		// 	ease: Power3.easeOut
		// });
		// gsap.from('.right-component', {
		// 	duration: 1000,
		// 	x: '50%',
		// 	ease: Power3.easeOut
		// });
	});
</script>

<div class="compontent-wrapper">
	<div class="left-component">
		<svelte:component this={leftComponent} />
	</div>
	<div class="right-component">
		<svelte:component this={rightComponent} />
	</div>
</div>

<div class="form-wrapper">
	<StaticForm />
</div>

<style lang="scss">
	.compontent-wrapper {
		overflow: hidden;
		display: flex;
		position: fixed;
		width: 100%;
		.left-component {
			position: absolute;
			left: -150px;
		}

		.right-component {
			position: relative;
			left: calc(100vw - 150px);
		}
	}
	.left-component,
	.right-component {
		padding-top: 20vh;
		width: 300px;
	}
	.form-wrapper {
	}
	@media only screen and (min-width: 650px) {
		.compontent-wrapper {
		}
		.left-component {
		}

		.right-component {
			left: calc(20vw - 10px);
		}
		.left-component,
		.right-component {
			padding-top: 20vh;
			width: 45vw;
		}
	}
</style>
