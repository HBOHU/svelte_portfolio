<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import IconCamera from '$lib/assets/svg/icon-camera.svelte';
	import IconCode from '$lib/assets/svg/icon-code.svelte';
	import IconCoffee from '$lib/assets/svg/icon-coffee.svelte';
	import IconDumbbell from '$lib/assets/svg/icon-dumbbell.svelte';
	import StaticForm from '$lib/StaticForm.svelte';

	let components = [IconCamera, IconCode, IconCoffee, IconDumbbell];

	const randomIndex = Math.floor(Math.random() * components.length);
	const leftComponent = components[randomIndex];

	const newItems = components.filter((item) => item !== leftComponent);
	const randomIndexRight = Math.floor(Math.random() * newItems.length);
	const rightComponent = newItems[randomIndexRight];

	onMount(() => {
		gsap.to('.left-component', { repeat: -1, rotation: 360, duration: 20, y: '-50%' });
		gsap.to('.right-component', { repeat: -1, rotation: -360, duration: 20, y: '50%' });
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
		position: fixed;
		width: 100%;
		.left-component {
			position: absolute;
			left: -45vw;
		}

		.right-component {
			position: relative;
			left: calc(100vw - 45vw);
		}
	}
	.left-component,
	.right-component {
		padding-top: 20vh;
		width: 300px;
	}
	@media only screen and (min-width: 650px) {
		.left-component {
			left: -15vw !important;
		}

		.right-component {
			left: calc(100vw - 20vw) !important;
		}
		.left-component,
		.right-component {
			padding-top: 20vh;
			width: 45vw;
		}
	}
</style>
