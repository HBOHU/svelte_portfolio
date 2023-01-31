<script>
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<div class="body-wrapper">
	<slot />
</div>

<style>
	.body-wrapper {
		padding-top: 21px;
	}
</style>
