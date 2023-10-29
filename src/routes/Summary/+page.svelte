<script>
	import { userDataStore, summary, isComplete } from "../userData"

	const confirm = () => isComplete.set(true)
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Finishing up</h1>
		<p class="page__description">
			Double-check everything looks OK before confirming.
		</p>
	</header>

	<div class="summary">
		<div class="plan">
			<p class="plan__name">
				{$summary.planInfo.title} ({$summary.planInfo.billingScheme})
			</p>
			<a href="/" class="plan__to-step-one">Change</a>

			{#if $summary.planInfo.billingScheme === "monthly"}
				<p class="plan__price">${$summary.planInfo.price}/month</p>
			{:else}
				<p class="plan__price">${$summary.planInfo.price}/year</p>
			{/if}
		</div>

		{#if $summary.addOnsInfo.length > 0}
			<ul class="add-ons">
				{#each $summary.addOnsInfo as addOn}
					<li class="add-ons__list-item">
						<p class="add-ons__name">{addOn.title}</p>

						{#if $userDataStore.billingScheme === "monthly"}
							<p class="add-ons__price">
								+${addOn.price}/month
							</p>
						{:else}
							<p class="add-ons__price">
								+${addOn.price}/year
							</p>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="total">
			{#if $summary.planInfo.billingScheme === "monthly"}
				<p class="total__name">Total (per month)</p>
				<p class="total__cost">${$summary.total}/month</p>
			{:else}
				<p class="total__name">Total (per year)</p>
				<p class="total__cost">${$summary.total}/year</p>
			{/if}
		</div>

		<button class="button button--outline" on:click={confirm}>
			<div class="button__contents">Confirm</div>
		</button>
	</div>
</div>

<style>
	.summary {
		width: 100%;
		padding-inline: 1rem;
		display: grid;

		background-color: var(--color-background-card);
	}

	.summary > *:where(:not(:last-child)) {
		padding: 1.5rem;

		display: grid;
	}

	/* Plan */

	.plan {
		grid-template-areas:
			"name price"
			"change price";
		align-items: center;
		row-gap: 0.25rem;
		column-gap: 2rem;

		border-bottom: 1px solid var(--color-text-main);
	}

	.plan__name {
		grid-area: name;

		font-weight: var(--font-weight-bold);
	}

	.plan__to-step-one {
		width: fit-content;
		grid-area: change;

		opacity: 0.5;
		border-bottom: 1px solid;

		font-size: var(--font-size-200);

		transition: opacity 100ms ease-in;
	}

	.plan__price {
		grid-area: price;
		justify-self: end;

		font-weight: var(--font-weight-bold);
	}

	/* Add-ons list*/

	.add-ons {
		gap: 1rem;

		border-bottom: 1px solid var(--color-text-main);
	}

	.add-ons__list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* Total */

	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-weight: var(--font-weight-bold);
	}

	/* Neon button */

	.button {
		margin-inline: 1.5rem;
		margin-block: 2rem 2.5rem;

		border: 1px solid var(--color-active);
		color: var(--color-active);
		background-color: var(--color-neutral-800);
		box-shadow: 0 0 1.5rem 0 hsl(308, 100%, 42%, 0.25),
			inset 0 0 1rem 0 hsl(308, 100%, 42%, 0.25);

		font-size: var(--font-size-400);
		text-shadow: 0 0 1rem hsl(308, 100%, 42%, 0.25),
			0 0 0.125rem hsl(308, 100%, 100%, 0.25);

		transition: color 100ms linear;
	}

	.button__contents {
		width: 100%;
		height: 3rem;

		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	.button::before {
		content: "";

		position: absolute;
		inset: 0;
		z-index: -1;

		background-color: var(--color-active);
		box-shadow: 0 0 2rem 0 hsl(308, 100%, 42%, 0.5);

		opacity: 0;
		transition: opacity 100ms linear;
	}

	.plan__to-step-one:hover {
		opacity: 1;
	}

	.button:hover,
	.button:focus-visible {
		color: var(--color-background-page);
		text-shadow: none;
	}

	.button:hover::before,
	.button:focus-visible::before {
		opacity: 1;
	}

	@media screen and (width > 40rem) {
		.summary > *:where(:not(:last-child)) {
			padding: 2.5rem;
		}

		.plan__name,
		.plan__price,
		.total {
			font-size: var(--font-size-400);
		}

		.add-ons {
			gap: 2rem;
		}

		.button {
			justify-self: end;
			width: 12.5rem;
		}
	}
</style>
