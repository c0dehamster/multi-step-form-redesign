<script lang="ts">
	import { page } from "$app/stores"
	import { afterUpdate } from "svelte"

	export let navigationData: Array<{
		id: number
		name: string
		address: string
	}>

	afterUpdate(() => {
		currentUrl = $page.url.pathname.split("/").filter(Boolean).pop() || "/"
		console.log(currentUrl)
	})
</script>

<div class="nav-arrows">
	<a
		href="#0"
		class="nav-arrows__link nav-arrows__link--left"
		aria-label="next step">
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

	<a
		href="#0"
		class="nav-arrows__link nav-arrows__link--right"
		aria-label="next step">
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
</div>
