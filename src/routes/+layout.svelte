<script lang="ts">
	import "./style.css"

	import backgroundPatternMobile from "../lib/images/background-pattern-mobile.svg"
	import backgroundPatternDesktop from "../lib/images/background-pattern-desktop.svg"

	import Navigation from "./Navigation.svelte"
</script>

<div class="app" style="--background-mobile: url({backgroundPatternMobile});">
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

		color: var(--color-text-main);
		background: var(--background-mobile), var(--background-app);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.navigation {
		grid-area: navigation;
	}

	.card {
		grid-area: main;
	}
</style>
