<script>
	let top = 150;
	let left = 150;
	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e) {
		switch (e.keyCode) {
			case 38:
				top -= 50;
				break;
			case 40:
				top += 50;
				break;
			case 37:
				left -= 50;
				break;
			case 39:
				left += 50;
				break;
		}
	}
</script>

<main>
	<div style="left: {left}px; top: {top}px" />
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
	div {
		width: 50px;
		height: 50px;
		background-color: green;
		position: absolute;
	}
</style>
