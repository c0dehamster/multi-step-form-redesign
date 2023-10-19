<script lang="ts">
	import iconArrowLeft from "../../lib/images/icon-arrow-left.svg"
	import iconArrowRight from "../../lib/images/icon-arrow-right.svg"

	import { createForm } from "felte"

	const { form } = createForm({
		onSubmit: (values) => {
			console.log(values)
		},
	})
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
			<li class="card">
				<label for="arcade" class="card__contents">
					<input
						type="radio"
						class="card__radio hidden"
						id="arcade"
						value="arcade"
						name="arcade" />

					<div class="card__title-wrapper">
						<p class="card__title">Arcade</p>
					</div>

					<div class="card__details">
						<p class="card__price">$90/year</p>
						<p class="card__bonus">+2 months free</p>
					</div>

					<div class="card__circle" />
				</label>
			</li>

			<li class="card">
				<label for="advanced" class="card__contents">
					<input
						id="advanced"
						type="radio"
						class="card__radio hidden"
						value="advanced"
						name="advanced" />

					<div class="card__title-wrapper">
						<p class="card__title">Advanced</p>
					</div>

					<div class="card__details">
						<p class="card__price">$12/mo</p>
						<p class="card__bonus">+2 months free</p>
					</div>

					<div class="card__circle" />
				</label>
			</li>

			<li class="card">
				<label for="pro" class="card__contents">
					<input
						id="pro"
						type="radio"
						class="card__radio hidden"
						value="pro"
						name="pro" />

					<div class="card__title-wrapper">
						<p class="card__title">Pro</p>
					</div>

					<div class="card__details">
						<p class="card__price">$15/mo</p>
						<p class="card__bonus">+2 months free</p>
					</div>

					<div class="card__circle" />
				</label>
			</li>
		</ul>

		<!-- This is an improvised way to make a two-option 
		toggle switch, use with caution -->

		<fieldset class="billing-options">
			<legend class="sr-only">Select monthly or yearly billing</legend>

			<label
				for="monthly"
				class="billing-options__label billing-options__label--left">
				Monthly
			</label>

			<input
				type="radio"
				class="billing-options__radio hidden"
				value="monthly"
				id="monthly"
				name="monthly" />
			<button class="billing-options__switch" />

			<input
				type="radio"
				class="billing-options__radio hidden"
				value="yearly"
				id="yearly"
				name="yearly" />

			<label
				for="yearly"
				class="billing-options__label billing-options__label--right">
				Yearly
			</label>
		</fieldset>
	</form>
</div>

<style>
	.form {
		gap: 2.75rem;
	}

	.form__radio-cards {
		width: 100%;
		display: grid;
		gap: 2rem;
	}

	/* Individual card */

	.card {
		padding-inline-end: 1.25rem;
		height: 3.5rem;

		container-type: size;

		--_card-color: var(--color-text-main);
		border: 1px solid var(--_card-color);
	}

	.card:has(.card__bonus) {
		height: 5rem; /* Solution for overflow is needed */
	}

	.card__contents {
		height: 100%;

		display: grid;
		grid-template-areas: "title details";
		align-items: center;
	}

	.card__title-wrapper {
		height: 100%;
		padding-inline: 1.25rem 0.5rem;

		grid-area: title;
		display: grid;
		align-items: center;

		position: relative;
	}

	.card__title-wrapper::before {
		content: "";
		position: absolute;

		inset: 0 -2rem 0 0;
		clip-path: polygon(0 0, 100% 0, calc(100% - 57cqb) 100%, 0 100%);

		background-color: var(--color-background-highlight);
	}

	.card__title {
		position: relative;
		z-index: 1;

		font-size: var(--font-size-400);
		font-weight: var(--font-weight-bold);
	}

	.card__details {
		grid-area: details;
		display: grid;
		gap: 0.5rem;
	}

	.card__price {
		padding-inline-start: 2.5rem;

		opacity: 0.5;
	}

	.card__bonus {
		padding-inline-start: 1rem;
	}

	/* Radio button */

	.card__circle {
		width: 1.5rem;
		aspect-ratio: 1;

		position: absolute;
		top: 1rem;
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

		width: 0.75rem;
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

	/* Toggle switch */

	.billing-options {
		display: grid;
		grid-template-columns: 1fr 3rem 1fr;
		gap: 2rem;
		align-items: center;

		border: none;
	}

	.billing-options__label {
		position: relative;

		--_label-color: var(--color-text-main);
	}

	.billing-options__label::before {
		content: "";
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: 0;
		transition: 100ms ease-in;

		border-bottom: 1px solid var(--_label-color);
	}

	.billing-options__label:hover::before,
	.billing-options__label:focus::before {
		left: 0;
		right: 0;
	}

	.billing-options__label--left {
		justify-self: end;
	}

	.billing-options__label--right {
		justify-self: baseline;
	}

	.billing-options__switch {
		position: relative;

		width: 3rem;
		height: 1.5rem;

		background: transparent;
		--_switch-color: var(--color-text-main);
		border: 1px solid var(--_switch-color);
	}

	.billing-options__switch:hover,
	.billing-options__switch:focus {
		--_switch-color: var(--color-active);
	}

	.billing-options__switch::before {
		content: "";

		position: absolute;
		top: 50%;
		left: 0.2rem;
		transform: translateY(-50%);

		width: 1rem;
		aspect-ratio: 1;

		border: 1px solid var(--_switch-color);
	}
</style>
