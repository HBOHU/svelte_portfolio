<script>
	import IconExpand from '../../static/svg/icon-expand.svelte';
	import IconLink from '../../static/svg/icon-link.svelte';
	import projectsObject from '$lib/assets/projects.json';

	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const columns = 12;
	const projectData = projectsObject;

	// TODO: make function global
	const isMobileView = () => {
		return false;
	};

	const randomHexColorCode = (/** @type {{ toString: () => string; } | undefined} */ color) => {
		if (color === undefined) {
			let lightHexColor = '#';
			for (let i = 0; i < 3; i++)
				lightHexColor += (
					'0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
				).slice(-2);
			return lightHexColor;
		} else {
			return '#' + color.toString();
		}
	};

	const mobileLayout = (
		/** @type {number} */ i,
		/** @type {{ title: any; color: any; }} */ item
	) => {
		let projectTitle = item.title;
		return {
			// next object name must be the same as the columns const
			[columns]: gridHelp.item({
				x: i + 1,
				y: i * 2,
				w: Math.floor(projectTitle.split(' ')[0].length + 2),
				h: Math.floor(projectTitle.length / 12 + 1)
			}),
			id: i,
			data: Object.assign(item, { color: randomHexColorCode(null || item.color) })
		};
	};

	const defaultLayout = (
		/** @type {number} */ i,
		/** @type {{ title: any; color: any; }} */ item
	) => {
		let projectTitle = item.title;
		return {
			// next object name must be the same as the columns const
			[columns]: gridHelp.item({
				x: i + 1,
				y: i * 2,
				w: Math.floor(projectTitle.length / 4) + 1,
				// TODO: fix 
				h: Math.floor(projectTitle.split(' ')[0].length / )
			}),
			id: i,
			data: Object.assign(item, { color: randomHexColorCode(null || item.color) })
		};
	};

	/**
	 * @param {any[]} data
	 */
	function generateLayout(data) {
		return data.map(function (/** @type {any} */ item, /** @type {number} */ i) {
			if (isMobileView() === true) {
				console.log('rendered projects for mobile screen');
				return mobileLayout(i, item);
			} else {
				console.log('rendered projects for big screen');
				return defaultLayout(i, item);
			}
		});
	}
	// TODO: actually first columns are the rows (in the gen function)
	let items = gridHelp.adjust(generateLayout(projectData), columns);
</script>

<div class="project-container">
	<!--  TODO: set min-width for each card, matching title length-->
	<Grid
		bind:items
		rowHeight={100}
		let:dataItem
		cols={[[100, columns]]}
		let:resizePointerDown
		fillSpace={true}
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
