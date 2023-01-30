<script>
	import projectsObject from '$lib/assets/projects.json';
	import { ismobileView } from '$lib/stores/main.js';

	import IconExpand from '$lib/assets/svg/icon-expand.svelte';
	import IconLink from '$lib/assets/svg/icon-link.svelte';

	import Grid from 'svelte-grid/src/index.svelte';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const columns = 12;
	const projectData = projectsObject.sort(() => Math.random() - 0.5);

	const randomHexColorCode = (/** @type {string | undefined} */ color) => {
		if (color === undefined) {
			let lightHexColor = '#';
			for (let i = 0; i < 3; i++)
				lightHexColor += (
					'0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
				).slice(-2);
			return lightHexColor;
		} else {
			return '#' + color;
		}
	};
	// TODO: cries for optimalization
	const mobileSize = (/** @type {number} */ i, /** @type {{ title: any; color: any; }} */ item) => {
		let projectTitle = item.title;
		return {
			[columns]: gridHelp.item({
				x: i,
				y: i,
				w: 6,
				h: Math.floor(projectTitle.length / 7) + 1,
				min: {
					w: 6,
					h: 2
				}
			}),
			id: i,
			data: Object.assign(item, { color: randomHexColorCode(item.color || undefined) })
		};
	};
	// TODO: cries for optimalization too
	const defaultSize = (
		/** @type {number} */ i,
		/** @type {{ title: string; description: string; color: string;  }} */ item
	) => {
		let projectTitle = item.title;
		let defaultW = Math.floor(projectTitle.length / 7) + 2;
		return {
			[columns]: gridHelp.item({
				x: i,
				y: i,
				w: defaultW,
				h: Math.floor(item.description.length / (10 * defaultW)) + 2,
				min: {
					w: Math.floor(projectTitle.split(' ')[0].length / 3),
					h: 2
				}
			}),
			id: i,
			data: Object.assign(item, { color: randomHexColorCode(item.color || undefined) })
		};
	};

	/**
	 * @param {any[]} data
	 */
	function generateLayout(data) {
		return data.map(function (/** @type {any} */ item, /** @type {number} */ i) {
			if ($ismobileView) {
				return mobileSize(i, item);
			} else {
				return defaultSize(i, item);
			}
		});
	}

	console.log('is mobile screen ' + $ismobileView);
	let items = gridHelp.adjust(generateLayout(projectData), columns);
</script>

<div class="project-container">
	<Grid
		bind:items
		rowHeight={50}
		let:dataItem
		cols={[[50, columns]]}
		let:resizePointerDown
		fillSpace={true}
	>
		<!-- ! Every time you come back to this page the BG color from the cards disapears -->
		<div class="project-card" style="background-color: {dataItem.data.color};">
			<h1 class="title">{dataItem.data.title}</h1>
			<p>{dataItem.data.description}</p>
			<a
				href={'http://' + dataItem.data.link}
				rel="external noreferrer"
				target="_blank"
				class="footer link"
				on:pointerdown={resizePointerDown}
			>
				<IconLink />
			</a>
			<div class="footer resizer" on:pointerdown={resizePointerDown}>
				<IconExpand />
			</div>
		</div></Grid
	>
</div>

<style lang="scss">
	:global(.svlt-grid-shadow, svelte-grid-resizer::after) {
		background: rgba(255, 255, 255, 0) !important;
	}

	:global(.svlt-grid-container) {
		background: var(--p-bg-color);
	}
	:global(.svlt-grid-resizer::after) {
		border-color: rgba(255, 255, 255, 0) !important;
	}

	.footer {
		bottom: 0px;
		position: absolute;
		padding: 10px;
		z-index: 999;
		&.resizer {
			cursor: move;
			right: 10px;
		}
		&.link {
			left: 5px;
		}
	}
	.project-container {
		overflow-x: hidden;
		height: 90vh;
	}
	.project-card {
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: rgba(17, 12, 46, 0.15) 0 10px 10px 0;

		.title {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			font-size: 1.5em;
			margin: 10px;
			margin-bottom: 60px;
			word-break: break-word;
		}
		p {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			font-size: 1.2em;
			margin: 10px;
			color: rgb(0, 0, 0);
		}

		@media only screen and (min-width: 650px) {
			.title {
				font-size: 3em;
				margin-bottom: 0px;
			}
			p {
				font-size: 1.6em;
			}
		}
	}
</style>
