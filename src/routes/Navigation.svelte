<script lang="ts">
	export let navigationData: Array<{
		id: number
		name: string
		address: string
	}>
</script>

<nav class="nav">
	<ol class="nav__list">
		{#each navigationData as listItem}
			<li class="nav__list-item">
				<a href={listItem.address} class="nav__link">
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
	.nav__list {
		position: relative;

		width: 100%;
		padding: 2rem;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		counter-reset: navigation;

		border-bottom: 1px solid var(--color-text-main);
	}

	.nav__list-item {
		counter-increment: navigation;
	}

	.nav__link {
		position: relative;

		display: flex;
		align-items: center;
		gap: 1rem;

		--_color: var(--color-text-main);
	}

	.nav__link:hover,
	.nav__link:focus,
	.nav__link:active {
		--_color: var(--color-active);
	}

	.nav__link::before {
		content: counter(navigation);

		color: var(--_color);

		font-size: var(--font-size-800);
		line-height: 1;
	}

	.nav__label {
		color: var(--_color);
	}

	@media screen and (width < 45rem) {
		.nav__link::before {
			font-size: var(--font-size-600);
		}

		.nav__label {
			display: none;
		}
	}

	@media screen and (width > 64rem) {
		.nav__list {
			padding-inline-start: 0rem;

			flex-direction: column;
			gap: 2.5rem;

			align-items: baseline;

			border-bottom: none;
			border-right: 1px solid;
		}
	}
</style>
