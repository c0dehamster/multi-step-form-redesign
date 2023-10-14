<script>
	import iconArrowRight from "../lib/images/icon-arrow-right.svg"

	import { createForm } from "felte"

	const { form } = createForm({
		onSubmit: (values) => {
			console.log(values)
		},
	})
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Personal info</h1>
		<p class="page__description">
			Please provide your name, email address, and phone number.
		</p>
	</header>

	<form use:form class="form">
		<div class="input-wrapper">
			<label for="" class="label">Name</label>
			<input type="text" class="input" placeholder="e.g. Stephen King" />
			<p class="error">Error</p>
		</div>

		<div class="input-wrapper">
			<label for="" class="label">Email Address</label>
			<input
				type="text"
				class="input"
				placeholder="e.g. stephenking@lorem.com" />
			<p class="error" />
		</div>

		<div class="input-wrapper">
			<label for="" class="label">Phone Number</label>
			<input
				type="text"
				class="input"
				placeholder="e.g. +1 234 567 890" />
			<p class="error" />
		</div>
	</form>

	<div class="nav-arrows">
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
	.form {
		padding-block: 2.5rem;
		gap: 2.5rem;
	}

	.input-wrapper {
		width: 100%;

		display: grid;
		grid-template-areas:
			"label error"
			"input input";
		gap: 0.5rem;

		--_color: var(--color-text-main);
	}

	/* :has() does not work of Firefox. Fallback is needed */

	.input-wrapper:has(.input:hover),
	.input-wrapper:has(.input:focus) {
		--_color: var(--color-active);
	}

	.label {
		grid-area: label;
		color: var(--_color);
	}

	.error {
		grid-area: error;

		justify-self: end;
		text-align: end;

		color: var(--color-text-error);
	}

	.input {
		grid-area: input;

		padding-block: 0.5rem;

		text-align: center;

		background-color: transparent;
		border: none;
		outline: none;
		border-bottom: 1px solid var(--_color);
	}

	.input::placeholder {
		color: var(--_color);
		opacity: 0.25;
	}

	/* Active states */
</style>
