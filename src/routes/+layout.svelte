<script lang="ts">
	import "./style.css"

	import backgroundPatternDesktop from "../lib/images/background-pattern-desktop.svg"

	import { navigationData } from "./data"
	import { isComplete, userDataStore } from "./stores"

	import Navigation from "./Navigation.svelte"
	import NavArrows from "./NavArrows.svelte"
	import SuccessMessage from "./SuccessMessage.svelte"

	$: {
		console.log($userDataStore)
	}
</script>

<div
	class="app"
	style="--background-pattern-desktop: url({backgroundPatternDesktop});">
	{#if !$isComplete}
		<aside class="navigation">
			<Navigation {navigationData} />
		</aside>

		<main class="card">
			<slot />
			<NavArrows {navigationData} />
		</main>
	{:else}
		<!-- I think users should not be able to navigate back to the summary
		after submitting the form hence the success message as a component
		rather than a separate route. Tell me if I am wrong -->
		<div class="success-message-wrapper">
			<SuccessMessage />
		</div>
	{/if}
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
		min-height: 40rem;
		padding-block: 3rem;
	}

	.success-message-wrapper {
		height: 100vh;
		width: 100%;

		display: grid;
		place-items: center;

		background-image: var(--background-app);
	}

	@media screen and (width > 40rem) {
		.app {
			padding-inline: 2.5rem;
			grid-template-rows: 6.25rem 1fr;

			background: var(--background-app);
		}

		.navigation {
			/* Explicitly declaring grid-rows works here a bit like position: absolute */
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

	@media screen and (width > 80rem) {
		.app {
			grid-template-rows: auto;
			grid-template-columns: 12rem 1fr;
			grid-template-areas: "navigation main";
			align-items: center;
		}

		.navigation {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
		}

		.card {
			grid-row: 1 / 2;
			grid-column: 1 / 3;

			margin-block: 2.5rem;
		}

		/* Decorative corner elements */

		.card::before,
		.card::after {
			content: "";
			position: absolute;
			width: 16rem;
			height: 10rem;
		}

		.card::before {
			top: -1.5rem;
			left: -1.5rem;

			border-top: 1px solid var(--color-text-main);
			border-left: 1px solid var(--color-text-main);
		}

		.card::after {
			bottom: -1.5rem;
			right: -1.5rem;

			border-bottom: 1px solid var(--color-text-main);
			border-right: 1px solid var(--color-text-main);
		}

		.success-message-wrapper {
			grid-column: 1 / 3;
		}
	}
</style>
