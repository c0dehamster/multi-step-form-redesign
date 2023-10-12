<script lang="ts">
	import "./style.css"

	import Navigation from "./Navigation.svelte"
</script>

<div class="app">
	<aside class="sidebar">
		<Navigation />
	</aside>

	<main class="card">
		<slot />
	</main>
</div>
