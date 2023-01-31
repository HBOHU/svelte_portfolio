<script>
	import Typewriter from 'svelte-typewriter';
	const typedTitles = [
		'Software consultant',
		'UX-Designer',
		'Still a student',
		'Always eager to learn more...',
		'Photographer'
	];
</script>

<div class="type-wrapper">
	<h1>Stijn van der Pouw /</h1>
	<Typewriter mode={'loopRandom'} interval={110} delay={400}>
		{#each typedTitles as title}
			<h1>{title}</h1>
		{/each}
	</Typewriter>
</div>

<style lang="scss" global>
	.type-wrapper {
		--cursor-color: black;
		--cursor-width: 2px;
		position: relative;
		padding: 100px 20px 0 10vw;
		h1 {
			font-size: 3em;
			font-family: monospace;
		}

		// :last-child {
		// 	word-break: break-all;
		// }
	}
	@media only screen and (min-width: 650px) {
		.type-wrapper {
			padding: 0 calc(50% - 200px);
			padding-top: calc(45vh - 280px);

			h1 {
				font-size: 5em;
			}
		}
	}
</style>
