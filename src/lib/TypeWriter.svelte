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

<section class="type-writer">
	<h1>Stijn van der Pouw /</h1>
	<div class="type-wrapper">
		<Typewriter mode={'loopRandom'} interval={110} delay={300}>
			{#each typedTitles as title}
				<h1>{title}</h1>
			{/each}
		</Typewriter>
	</div>
</section>

<section class="about-me" />

<style lang="scss">
	section.type-writer {
		--cursor-color: black;
		--cursor-width: 0.08em;
		margin-left: 15vw;
		margin-right: 10px;
		padding-top: 60px;
		user-select: none;
		h1 {
			font-size: 3em;
			font-family: monospace;
		}
	}

	@media only screen and (min-width: 650px) {
		section.type-writer {
			margin-left: calc(45% - 260px);
			margin-right: calc(45% - 260px);

			h1 {
				font-size: 4em;
			}
		}
	}
</style>
