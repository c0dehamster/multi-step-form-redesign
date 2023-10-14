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
						<p class="card__price">$9/mo</p>
						<p class="card__bonus" />
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
						<p class="card__bonus" />
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
						<p class="card__bonus" />
					</div>

					<div class="card__circle" />
				</label>
			</li>
		</ul>

		<!-- This is an improvised way to make a two-option 
		toggle switch, use with caution -->

		<fieldset class="billing-options">
			<legend class="sr-only">Select monthly or yearly billing</legend>

			<label for="" class="billing-options__label">Monthly</label>

			<input
				type="radio"
				class="billing-options__radio hidden"
				value="monthly" />
			<button class="billing-options__switch" />

			<input
				type="radio"
				class="billing-options__radio hidden"
				value="yearly" />
			<label for="" class="billing-options__label">Yearly</label>
		</fieldset>
	</form>

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
</div>

<style>
	.form__radio-cards {
		width: 100%;
		display: grid;
		gap: 2rem;
	}

	/* Individual card */

	.card {
		padding-inline-end: 1.25rem;

		--_card-color: var(--color-text-main);

		border: 1px solid var(--_card-color);
	}

	.card__contents {
		display: grid;
		grid-template-areas: "title details radio-button";
		align-items: center;
	}

	.card__title-wrapper {
		padding-block: 1rem;
		padding-inline-start: 1.25rem;

		position: relative;
	}

	.card__title-wrapper::before {
		content: "";
		position: absolute;

		inset: 0 -2rem 0 0;
		clip-path: polygon(0 0, 100% 0, calc(100% - 2rem) 100%, 0 100%);

		background-color: var(--color-background-highlight);
	}

	.card__title {
		position: relative;
		z-index: 1;
	}

	/* Radio button */

	.card__circle {
		width: 1.5rem;
		aspect-ratio: 1;

		position: relative;
		grid-area: radio-button;
		justify-self: end;

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
</style>
