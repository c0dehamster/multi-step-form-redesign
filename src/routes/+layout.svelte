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

<div
	class="app"
	style="--background-mobile: url({backgroundPatternMobile}); --background-pattern-desktop: url({backgroundPatternDesktop});">
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
		position: relative;
		grid-area: main;
		width: 100%;
		max-width: 50rem;
		height: fit-content;
		min-height: 45rem;
		padding-block: 3rem;
	}

	@media screen and (width > 40rem) {
		.app {
			padding-inline: 2.5rem;
			grid-template-rows: 6.25rem 1fr;

			background: var(--background-app);
		}

		.navigation {
			grid-row: 1 / 2;
		}

		.card {
			padding-inline: 5rem;
			margin-block: 7.5rem;
			grid-row: 1 / 3;

			align-self: center;

			background-color: var(--color-background-page);
			background-image: var(--background-pattern-desktop);
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>
