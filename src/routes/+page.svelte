<script lang="ts">
	import { createForm } from "felte"

	import NavArrows from "./NavArrows.svelte"

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
			<label for="name" class="label">Name</label>
			<input
				type="text"
				class="input"
				placeholder="e.g. Stephen King"
				id="name"
				autocomplete="off"
				name="name" />
			<p class="error">Error</p>
		</div>

		<div class="input-wrapper">
			<label for="email" class="label">Email Address</label>
			<input
				type="text"
				class="input"
				placeholder="e.g. stephenking@lorem.com"
				id="email"
				autocomplete="off"
				name="email" />
			<p class="error" />
		</div>

		<div class="input-wrapper">
			<label for="phoneNumber" class="label">Phone Number</label>
			<input
				type="text"
				class="input"
				placeholder="e.g. +1 234 567 890"
				id="phoneNumber"
				autocomplete="off"
				name="phoneNumber" />
			<p class="error" />
		</div>

		<NavArrows />
	</form>
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

		color: var(--color-text-main);
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
