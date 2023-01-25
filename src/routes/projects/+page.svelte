<script>
	import IconExpand from '../../static/svg/icon-expand.svelte';
	import IconLink from '../../static/svg/icon-link.svelte';
	import cards from '$lib/assets/projects.json';

	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const id = () => '_' + Math.random().toString(36).substr(2, 9);

	let columns = 12;

	const randomHexColorCode = () => {
		let color = '#';
		for (let i = 0; i < 3; i++)
			color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(
				-2
			);
		return color;
	};
	/**
	 * @param {number} col
	 * @param {any[]} cards
	 */
	function generateLayout(col, cards) {
		return cards.map(function (/** @type {any} */ item, /** @type {number} */ i) {
			const y = Math.ceil(Math.random() * 3) + 1;
			return {
				// TODO: int object name needs to be same as let columns
				12: gridHelp.item({ x: (i * 4) % 100, y: Math.floor(i / columns) * y, w: y, h: y }),
				id: id(),
				data: Object.assign(cards[i], { color: randomHexColorCode() })
			};
		});
	}
	let items = gridHelp.adjust(generateLayout(6, cards), columns);
</script>

<div class="project-container">
	<Grid
		bind:items
		rowHeight={150}
		let:item
		let:dataItem
		cols={[[100, columns]]}
		let:resizePointerDown
		fillSpace={true}
	>
		<div class="project-card" style="background-color: {dataItem.data.color};">
			<h1 class="title">{dataItem.data.name}</h1>
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
		</div>
	</Grid>
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
		bottom: 5px;
		&.resizer {
			cursor: move;
			right: 15px;
		}
		&.link {
			left: 15px;
			z-index: 999;
		}
	}
	.project-container {
		overflow-y: hidden;
	}
	.project-card {
		height: 100%;
		border-radius: 12px;
		padding: 5px;

		.title {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			margin: 10px;
		}

		@media only screen and (min-width: 650px) {
			min-width: none;
		}
	}
</style>
