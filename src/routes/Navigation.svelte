<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"

	import type { NavigationItem } from "./Types"

	import linkPointerDesktop from "../lib/images/active-link-pointer-desktop.svg"
	import linkPointerMobile from "../lib/images/active-link-pointer-mobile.svg"
	import linkPointerTablet from "../lib/images/active-link-pointer-tablet.svg"

	export let navigationData: Array<NavigationItem>

	/* The following is to prevent artifacts when the page is reloaded */

	let initialIndex: number
	let navListClass = "nav__list"
	let initialPointerPosition: string
	let navWidth: number
	let navHeight: number

	onMount(() => {
		let initialUrl = $page.url.pathname

		initialIndex = navigationData.findIndex(
			(item) => item.address === initialUrl
		)

		initialPointerPosition = `${
			((initialIndex + 0.5) / navigationData.length) * 100
		}%`

		// The pointer only appears after the URL is retrieved
		navListClass = "nav__list nav__list--pointer-active"
	})

	/* Calculate the offset from the position the pointer has been
	placed upon loading/reloading the page */

	$: currentUrl = $page.url.pathname

	$: currentIndex = navigationData.findIndex(
		(item) => item.address === currentUrl
	)

	$: pointerOffsetMobile = `${
		(navWidth / navigationData.length) * (currentIndex - initialIndex)
	}px`

	$: pointerOffsetDesktop = `${
		(navHeight / navigationData.length) * (currentIndex - initialIndex)
	}px`
</script>

<nav
	class="nav"
	style="
	--pointer-mobile: url({linkPointerMobile});
	--pointer-desktop: url({linkPointerDesktop});
	--pointer-tablet: url({linkPointerTablet});
	
	--initial-pointer-position: {initialPointerPosition};
	--pointer-offset-mobile: {pointerOffsetMobile};
	--pointer-offset-desktop: {pointerOffsetDesktop};">
	<ol
		class={navListClass}
		bind:clientWidth={navWidth}
		bind:clientHeight={navHeight}>
		{#each navigationData as listItem}
			<li class="nav__list-item">
				<a
					href={listItem.address}
					class={`nav__link ${
						listItem.address === currentUrl
							? "nav__link--active"
							: ""
					}`}>
					<div class="nav__label">
						<p class="nav__step">Step {listItem.id}</p>
						<p class="nav__name">{listItem.name}</p>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	.nav {
		padding-block: 2rem;

		display: grid;
		place-items: center;

		border-bottom: 1px solid var(--color-text-main);
	}

	.nav__list {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		counter-reset: navigation;
	}

	/* The pointer */

	.nav__list--pointer-active::before {
		content: "";
		/* Due to the glow extending far outside the actual shape,
		the dimensions of the pointer are somewhat arbitrary */
		height: 6rem;
		width: 12rem;

		margin-block: auto;

		position: absolute;
		left: var(--initial-pointer-position);

		transform: translateX(calc(-50% + var(--pointer-offset-mobile)));

		transition: transform 150ms ease-out;

		background-image: var(--pointer-tablet);
		background-position: center;
		background-repeat: no-repeat;
	}

	/* Individual nav items */

	.nav__list-item {
		min-width: 10rem;
		counter-increment: navigation;

		display: grid;
		place-items: center;
	}

	.nav__link {
		position: relative;

		display: flex;
		align-items: center;
		gap: 1rem;

		--_color: var(--color-text-main);
	}

	.nav__link:hover,
	.nav__link:focus-visible,
	.nav__link--active {
		--_color: var(--color-active);
	}

	.nav__link::before {
		content: counter(navigation);

		color: var(--_color);
		transition: color 100ms ease-in;

		font-size: var(--font-size-800);
		line-height: 1;
	}

	.nav__label {
		color: var(--_color);
		transition: color 100ms ease-in;
	}

	@media screen and (width < 48rem) {
		.nav__list-item {
			min-width: 4rem;
		}
		.nav__list--pointer-active::before {
			height: 5rem;
			width: 6rem;
			background-image: var(--pointer-mobile);
		}

		.nav__link::before {
			font-size: var(--font-size-600);
		}

		.nav__label {
			display: none;
		}
	}

	@media screen and (width > 80rem) {
		.nav {
			border-bottom: none;
			border-right: 1px solid;

			padding-inline-start: 0rem;
			padding-inline-end: 1rem;
		}
		.nav__list {
			padding-block: 0rem;

			flex-direction: column;

			align-items: baseline;
		}

		.nav__list--pointer-active::before {
			margin-block: 0rem;
			margin-inline: auto;

			position: absolute;
			left: -2rem;
			top: var(--initial-pointer-position);

			transform: translate(0, calc(-50% + var(--pointer-offset-desktop)));

			transition: transform 200ms ease-out;

			background-image: var(--pointer-desktop);
			background-position: center;
			background-repeat: no-repeat;
		}

		.nav__list-item {
			min-height: 7rem;
			justify-items: baseline;
		}
	}
</style>
