<script lang="ts">
	import { page } from "$app/stores"

	import { navigationData } from "./data"

	$: currentUrl = $page.url.pathname // Atlernatively, the current URL could be passed as a prop
	$: currentIndex = navigationData.findIndex(
		(item) => item.address === currentUrl
	)
	$: previousUrl = navigationData[currentIndex - 1]?.address || null
	$: nextUrl = navigationData[currentIndex + 1]?.address || null
</script>

<div class="nav-arrows">
	{#if previousUrl}
		<a href={previousUrl} class="nav-arrows__link nav-arrows__link--left">
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
		</a>
	{/if}

	{#if nextUrl}
		<a href={nextUrl} class="nav-arrows__link nav-arrows__link--right">
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
		</a>
	{/if}
</div>

<style>
	.nav-arrows {
		width: 100%;
		padding-inline: 1rem;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "left right";
	}

	.nav-arrows__link {
		height: 3rem;

		border: none;
		--_nav-arrow-color: var(--color-text-main);
		background: transparent;
	}

	.nav-arrows__link--left {
		justify-self: baseline;
		grid-area: left;
	}

	.nav-arrows__link--right {
		justify-self: end;
		grid-area: right;
	}

	.nav-arrows__icon {
		height: 100%;
	}

	.nav-arrows__icon path {
		fill: var(--_nav-arrow-color);
	}

	.nav-arrows__link:hover,
	.nav-arrows__link:focus {
		--_nav-arrow-color: var(--color-active);
	}

	@media screen and (width > 40rem) {
		.nav-arrows {
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			transform: translateY(-50%);
		}
	}
</style>
