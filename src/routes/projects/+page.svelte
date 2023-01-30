<script>
	import IconExpand from '$lib/assets/svg/icon-expand.svelte';
	import IconLink from '$lib/assets/svg/icon-link.svelte';
	import projectsObject from '$lib/assets/projects.json';

	import Grid from 'svelte-grid';
	import gridHelp from 'svelte-grid/build/helper/index.mjs';

	const columns = 12;
	const projectData = projectsObject.sort(() => Math.random() - 0.5);

	// TODO: make function global => MobileMenu.svelte
	const isMobileView = () => {
		return false;
	};

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
				h: Math.floor(item.description.length / (6 * defaultW)),
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
			if (isMobileView() === true) {
				return mobileSize(i, item);
			} else {
				return defaultSize(i, item);
			}
		});
	}
	// TODO: actually first columns are the rows (in the gen function)
	let items = gridHelp.adjust(generateLayout(projectData), columns);
</script>

<div class="project-container">
	<!--  TODO: set min-width for each card, matching title length-->
	<Grid
		data-sveltekit-preload-data="off"
		bind:items
		rowHeight={50}
		let:dataItem
		cols={[[50, columns]]}
		let:resizePointerDown
		fillSpace={true}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
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
				<!-- TODO: make gsap scale and twinkle this -->
				<IconLink />
			</a>
			<div class="footer resizer" on:pointerdown={resizePointerDown}>
				<!-- TODO: make gsap scale and twinkle this -->
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
