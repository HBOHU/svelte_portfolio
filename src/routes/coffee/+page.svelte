<script>
	import Typewriter from 'svelte-typewriter';
	import Comp1 from '$lib/demo/in-fast-slow-out.svelte';
	import Comp2 from '$lib/demo/key-mover.svelte';
	import Comp3 from '$lib/demo/scroll.svelte';

	const newTypeWritterTyped = () => {
		// console.log('test');
	};
</script>

<Typewriter on:done={newTypeWritterTyped} mode={'loopRandom'} cursor{false}>
	<h1>Testing effect</h1>
	<h1>effect</h1>
</Typewriter>

<Comp1 />
<Comp2 />
<Comp3 />

hello
