<script>
	import iconArrowLeft from "../../lib/images/icon-arrow-left.svg"

	import { createForm } from "felte"

	const { form } = createForm({
		onSubmit: (values) => {
			console.log(values)
		},
	})
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Finishing up</h1>
		<p class="page__description">
			Double-check everything looks OK before confirming.
		</p>
	</header>

	<form use:form class="form">
		<div class="summary">
			<div class="plan">
				<p class="plan__name">Arcade (yearly)</p>
				<a href="#0" class="plan__to-step-one">Change</a>
				<p class="plan__price">$90/year</p>
			</div>

			<ul class="add-ons">
				<li class="add-ons__list-item">
					<p class="add-ons__name">Online service</p>
					<p class="add-ons__price">+$10/year</p>
				</li>

				<li class="add-ons__list-item">
					<p class="add-ons__name">Larger storage</p>
					<p class="add-ons__price">+$20/year</p>
				</li>
			</ul>

			<div class="total">
				<p class="total__name">Total (per year)</p>
				<p class="total__cost">$120/year</p>
			</div>

			<button class="button button--outline">
				<div class="button__contents">Confirm</div>
			</button>
		</div>
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
	</div>
</div>

<style>
	.form {
		padding-inline: 1rem;

		background-color: var(--color-background-card);
	}

	.summary {
		display: grid;
	}

	.summary > *:where(:not(:last-child)) {
		padding: 1.5rem;

		display: grid;
	}

	.plan {
		grid-template-areas:
			"name price"
			"change price";
		align-items: center;
		gap: 0.25rem;

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
	}

	.plan__price {
		grid-area: price;
		justify-self: end;

		font-weight: var(--font-weight-bold);
	}

	.add-ons {
		gap: 1rem;

		border-bottom: 1px solid var(--color-text-main);
	}

	.add-ons__list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-weight: var(--font-weight-bold);
	}

	.button {
		isolation: isolate;

		margin-inline: 1.5rem;

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
		z-index: 1;

		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	.button::before {
		content: "";

		position: absolute;
		inset: 0;
		background-color: var(--color-active);
		box-shadow: 0 0 2rem 0 hsl(308, 100%, 42%, 0.5);

		opacity: 0;
		transition: opacity 100ms linear;
	}

	.button:hover,
	.button:focus {
		color: var(--color-background-page);
		text-shadow: none;
	}

	.button:hover::before,
	.button:focus::before {
		opacity: 1;
	}
</style>
