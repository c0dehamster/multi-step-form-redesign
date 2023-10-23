<script lang="ts">
	import "./style.css"

	import backgroundPatternMobile from "../lib/images/background-pattern-mobile.svg"
	import backgroundPatternDesktop from "../lib/images/background-pattern-desktop.svg"

	import { navigationData } from "./data"
	import { userDataStore } from "./userData"

	import Navigation from "./Navigation.svelte"
	import NavArrows from "./NavArrows.svelte"

	$: console.log($userDataStore)
</script>

<div class="app" style="--background-mobile: url({backgroundPatternMobile});">
	<aside class="navigation">
		<Navigation {navigationData} />
	</aside>

	<main class="card">
		<slot />
		<NavArrows />
	</main>
</div>

<style>
	.app {
		position: relative;

		min-height: 100vh;
		width: 100%;

		display: grid;
		grid-template-areas:
			"navigation"
			"main";
		justify-items: center;

		color: var(--color-text-main);
		background-color: var(--color-background-page);
	}

	.navigation {
		grid-area: navigation;
		width: 100%;
	}

	.card {
		width: 100%;
		padding-block-end: 2rem;

		grid-area: main;
	}
</style>
