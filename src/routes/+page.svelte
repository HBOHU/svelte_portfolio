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
	<Typewriter mode={'loopRandom'} cursor{false}>
		{#each typedTitles as title}
			<h1>{title}</h1>
		{/each}
	</Typewriter>
</div>

<style lang="scss" global>
	.type-wrapper {
		--cursor-color: black;
		--cursor-width: 2px;
		padding: 25vw;
		padding-top: 42px;
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
			padding: 0 calc(50% - 220px);
			padding-top: calc(45vh - 280px);

			h1 {
				font-size: 5em;
			}
		}
	}
</style>
