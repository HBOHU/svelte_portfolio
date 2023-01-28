<script>
	import IconExpand from '../../static/svg/icon-expand.svelte';
	import IconLink from '../../static/svg/icon-link.svelte';
	import cards from '$lib/assets/projects.json';

	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const id = () => '_' + Math.random().toString(36).substr(2, 9);

	let columns = 24;

	const randomHexColorCode = (color) => {
		let lightHexColor = '#';
		for (let i = 0; i < 3; i++)
			lightHexColor += (
				'0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
			).slice(-2);
		return lightHexColor;
	};
	/**
	 * @param {number} columns
	 * @param {any[]} cards
	 */
	function generateLayout(columns, cards) {
		return cards.map(function (/** @type {any} */ item, /** @type {number} */ i) {
			const boxSize = Math.ceil(Math.random() * 3) / 2 + 2;
			const titleLength = cards[i].title.length;

			return {
				24: gridHelp.item({
					x: (i * 4) % 100,
					y: i * boxSize,
					w: Math.floor((titleLength / 4) * boxSize + 2),
					h: Math.floor(boxSize / 1.5)
				}),
				id: id(),
				data: Object.assign(cards[i], { color: randomHexColorCode(null || cards[i].color) })
			};
		});
	}
	let items = gridHelp.adjust(generateLayout(24, cards), columns);
</script>

<div class="project-container">
	<!--  TODO: set min-width for each card, matching title length-->
	<Grid
		bind:items
		rowHeight={150}
		let:item
		let:dataItem
		cols={[[100, columns]]}
		let:resizePointerDown
		fillSpace={true}
		class="grid-item"
	>
		<div class="project-card" style="background-color: {dataItem.data.color};">
			<h1 class="title">{dataItem.data.title}</h1>
			<div class="footer resizer" on:pointerdown={resizePointerDown}>
				<IconExpand />
			</div>
			<a
				href={'http://' + dataItem.data.link}
				rel="external noreferrer"
				target="_blank"
				class="footer link"
				on:pointerdown={resizePointerDown}
			>
				<IconLink />
			</a>
		</div></Grid
	>
</div>

<style lang="scss">
	:global(.svlt-grid-shadow) {
		background: rgba(255, 255, 255, 0) !important;
	}

	:global(.svlt-grid-container) {
		background: var(--p-bg-color);
	}
	:global(.svlt-grid-resizer::after) {
		border-color: rgba(255, 255, 255, 0) !important;
	}
	.footer {
		position: absolute;
		bottom: 0px;
		&.resizer {
			cursor: move;
			padding: 10px;
			right: 10px;
		}
		&.link {
			left: 5px;
			padding: 10px;
			z-index: 999;
		}
	}
	.project-container {
		overflow-y: hidden;
		height: 100%;
	}
	.grid-item {
		padding: 5px;
	}
	.project-card {
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: rgba(17, 12, 46, 0.15) 0 10px 10px 0;
		min-width: 100px;

		.title {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			font-size: 3em;
			margin: 10px;
			word-break: break-word;
		}

		@media only screen and (min-width: 650px) {
			min-width: none;
		}
	}
</style>
