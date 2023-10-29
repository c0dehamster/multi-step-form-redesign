<script lang="ts">
	import { beforeNavigate } from "$app/navigation"
	import { createForm } from "felte"
	import { userDataStore } from "../userData"

	import { plans } from "../data"

	import ToggleSwitch from "./ToggleSwitch.svelte"

	const { form, data, createSubmitHandler } = createForm({
		onSubmit: (values: {
			plan: "arcade" | "advanced" | "pro"
			billingScheme: "monthly" | "yearly"
		}) => {
			userDataStore.onSubmit(values)
		},
		initialValues: {
			plan: $userDataStore.plan,
			billingScheme: $userDataStore.billingScheme,
		},
	})

	/* Code for the custom toggle switch */

	const option1 = {
		label: "Monthly",
		value: "monthly",
		checked: $userDataStore.billingScheme === "monthly",
	}

	const option2 = {
		label: "Yearly",
		value: "yearly",
		checked: $userDataStore.billingScheme === "yearly",
	}

	const changeBillingScheme = (value: "monthly" | "yearly") => {
		data.update((values) => {
			return { ...values, billingScheme: value }
		})
	}

	/* Trigger form submit when the user goes to the next/previous page */

	const handleSubmit = createSubmitHandler()

	beforeNavigate(() => handleSubmit())
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Select your plan</h1>
		<p class="page__description">
			You have the option of monthly or yearly billing.
		</p>
	</header>

	<form use:form class="form">
		<ul class="form__radio-cards">
			{#each plans as plan}
				<!-- Felte takes an array of objects to create a field array.
				For radio buttons, unique IDs are required -->

				<li class="card">
					<label for={plan.id} class="card__contents">
						<input
							type="radio"
							class="card__radio hidden"
							id={plan.id}
							value={plan.name}
							name="plan" />

						<div class="card__title-wrapper">
							<p class="card__title">{plan.title}</p>
						</div>

						<div class="card__details">
							{#if $data.billingScheme === "monthly"}
								<p class="card__price">
									${plan.pricePerMonth}/month
								</p>
							{:else}
								<p class="card__price">
									${plan.pricePerYear}/year
								</p>
								<p class="card__bonus">+2 months free</p>
							{/if}
						</div>

						<div class="card__circle" />
					</label>
				</li>
			{/each}
		</ul>

		<ToggleSwitch
			{option1}
			{option2}
			on:toggle={(e) => changeBillingScheme(e.detail)} />
	</form>
</div>

<style>
	.form {
		gap: 2.75rem;
	}

	.form__radio-cards {
		width: 100%;
		display: grid;

		grid-template-columns: 1fr 1fr 1fr;

		gap: max(7.5%, 2rem);
	}

	/* Individual card */

	.card {
		height: 13.5rem;

		container-type: size;

		--_card-color: var(--color-text-main);
		border: 1px solid var(--_card-color);

		transition: transform 200ms ease-out;
	}

	.card:hover {
		transform: scale(1.05);
	}

	.card__contents {
		height: 100%;

		display: grid;
		grid-template-rows: 3.5rem 1fr;
		grid-template-areas:
			"title"
			"details";
		gap: 1rem;
	}

	.card__title-wrapper {
		position: relative;
		height: 100%;
		padding-inline: 1.25rem 0.5rem;

		grid-area: title;
		display: grid;
		align-items: center;
	}

	.card__title-wrapper::before {
		content: "";
		position: absolute;

		inset: 0;

		background-color: var(--color-background-highlight);
	}

	.card__title {
		position: relative;
		z-index: 1;

		font-size: var(--font-size-400);
		font-weight: var(--font-weight-bold);
	}

	.card__details {
		height: fit-content;
		padding-inline: 1.25rem;

		grid-area: details;

		display: grid;
		gap: 0.5rem;
	}

	.card__price {
		opacity: 0.5;
	}

	/* Radio button */

	.card__circle {
		width: 2rem;
		aspect-ratio: 1;

		position: absolute;
		bottom: 1.25rem;
		right: 1.25rem;

		border-radius: 50%;

		border: 1px solid var(--color-text-main);
	}

	.card__circle::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 1rem;
		border-radius: 50%;
		aspect-ratio: 1;

		background-color: var(--color-active);
		box-shadow: 0 0 0.5rem 0 var(--color-active);
		opacity: 0;

		transition: opacity 100ms ease-in;
	}

	.card__contents:has(.card__radio:checked) > .card__circle::before {
		opacity: 1;
	}

	/* Container queries seem to be messing up hot reloading with Vite.
	Manual refreshing might be required after resizing */

	@media (width < 40rem) {
		.form__radio-cards {
			padding-inline: 2rem;
		}
	}

	@container form (width < 32rem) {
		.form__radio-cards {
			grid-template-columns: auto;
		}

		.card {
			padding-inline-end: 1.25rem;

			height: 3.5rem;
		}

		.card:has(.card__bonus) {
			height: 5rem; /* Solution for overflow is needed */
		}

		.card__contents {
			grid-template-rows: auto;
			grid-template-columns: 1fr 2fr;
			grid-template-areas: "title details";
			align-items: center;
		}

		.card__title-wrapper::before {
			content: "";
			position: absolute;

			inset: 0 -2rem 0 0;
			clip-path: polygon(0 0, 100% 0, calc(100% - 57cqb) 100%, 0 100%);
		}

		.card__details {
			padding: 0rem;
		}

		.card__price {
			padding-inline-start: 2.5rem; /* For positioning on the diagonal */
		}

		.card__bonus {
			padding-inline-start: 1rem;
		}

		/* Radio button */

		.card__circle {
			width: 1.5rem;

			top: 50%;
			bottom: auto;
			transform: translateY(-50%);
		}

		.card__circle::before {
			width: 0.75rem;
		}
	}

	@media screen and (width > 45rem) {
		.page {
			gap: 3rem;
		}
	}
</style>
