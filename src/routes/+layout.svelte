<script lang="ts">
	import "./style.css"

	import Navigation from "./Navigation.svelte"
</script>

<div class="app">
	<aside class="navigation">
		<Navigation />
	</aside>

	<main class="card">
		<slot />
	</main>
</div>

<style>
	.app {
		position: relative;

		width: 100%;

		display: grid;
		grid-template-areas:
			"navigation"
			"main";
		justify-items: center;

		/* background: var(--gradient-background-main); */
	}

	.navigation {
		grid-area: navigation;
	}

	.card {
		grid-area: main;
	}
</style>
