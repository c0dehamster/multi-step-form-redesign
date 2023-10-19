<script lang="ts">
	import { page } from "$app/stores"
	import { goto } from "$app/navigation"
	import { createEventDispatcher } from "svelte"

	import { navigationData } from "./data"

	const dispatch = createEventDispatcher()

	$: currentUrl = $page.url.pathname // Atlernatively, the current URL could be passed as a prop
	$: currentIndex = navigationData.findIndex(
		(item) => item.address === currentUrl
	)
	$: previousUrl = navigationData[currentIndex - 1]?.address || null
	$: nextUrl = navigationData[currentIndex + 1]?.address || null

	const switchPage = (url: string | null) => url && goto(url)
</script>

<div class="nav-arrows">
	{#if previousUrl}
		<button
			type="submit"
			class="nav-arrows__button nav-arrows__button--left"
			aria-label="next step"
			on:click={() => switchPage(previousUrl)}>
			<svg
				class="nav-arrows__icon"
				width="48"
				height="125"
				viewBox="0 0 133 346"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100.25 0.75L132.25 0.75L32.25 172.25L132.25 345.25H100.25L0.25 172.25L100.25 0.75Z"
					fill="#D700BA" />
			</svg>
		</button>
	{/if}

	{#if nextUrl}
		<button
			type="submit"
			class="nav-arrows__button nav-arrows__button--right"
			aria-label="previous step"
			on:click={() => switchPage(nextUrl)}>
			<svg
				class="nav-arrows__icon"
				width="48"
				height="125"
				viewBox="0 0 133 346"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M32.25 345.25H0.25L100.25 173.75L0.25 0.75H32.25L132.25 173.75L32.25 345.25Z"
					fill="#D700BA" />
			</svg>
		</button>
	{/if}
</div>

<style>
	.nav-arrows {
		width: 100%;
		padding-inline: 3.5rem;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "left right";
	}

	.nav-arrows__button {
		width: fit-content;
		height: 3rem;

		border: none;
		--_nav-arrow-color: var(--color-text-main);
		background: transparent;
	}

	.nav-arrows__button--left {
		justify-self: baseline;
		grid-area: left;
	}

	.nav-arrows__button--right {
		justify-self: end;
		grid-area: right;
	}

	.nav-arrows__icon {
		height: 100%;
	}

	.nav-arrows__icon path {
		fill: var(--_nav-arrow-color);
	}

	.nav-arrows__button:hover,
	.nav-arrows__button:focus {
		--_nav-arrow-color: var(--color-active);
	}
</style>
