<script lang="ts">
	/* This entire page _kind_of_works_ */

	import { beforeNavigate } from "$app/navigation"
	import { createForm } from "felte"

	import { userDataStore } from "./stores"

	let errorMessages = {
		name: "",
		email: "",
		phoneNumber: "",
	}

	const { form, touched, isValid, createSubmitHandler } = createForm({
		onSubmit: (values) => {
			userDataStore.onSubmit(values)
			return values
		},

		validate: (values) => {
			/* Validates on input. Prevents form submission.
			$errors is only updated upon submitting
			hence errorMessages workaround */
			const errors = {
				name: "",
				email: "",
				phoneNumber: "",
			}

			if (values.name === "") errors.name = "Cannot be empty"
			if (values.email === "") errors.email = "Cannot be empty"
			if (values.phoneNumber === "")
				errors.phoneNumber = "Cannot be empty"

			errorMessages = errors
			return errors
		},

		initialValues: {
			name: $userDataStore.name,
			email: $userDataStore.email,
			phoneNumber: $userDataStore.phoneNumber,
		},
	})

	const handleSubmit = createSubmitHandler()

	/* The function to prevent routing has to be passed
	as an argument to the callback of beforeNavigate. */

	beforeNavigate(({ cancel }) => {
		if (!$isValid) {
			console.log("Navigation cancelled:", errorMessages)
			/* cancel() */
			return
		}

		handleSubmit()
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
		<div class="form__inputs">
			<div class="input-wrapper">
				<label for="name" class="label">Name</label>
				<input
					type="text"
					class="input"
					placeholder="e.g. Stephen King"
					id="name"
					autocomplete="off"
					name="name" />
				<p class="error">{$touched.name ? errorMessages.name : ""}</p>
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
				<p class="error">{$touched.email ? errorMessages.email : ""}</p>
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
				<p class="error">
					{$touched.phoneNumber ? errorMessages.phoneNumber : ""}
				</p>
			</div>
		</div>
	</form>
</div>

<style>
	.form__inputs {
		width: 100%;
		max-width: 32rem;
		padding: 2rem;
		display: grid;
		gap: 2.5rem;

		background-color: var(--color-background-card);
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

		transition: color 150ms ease-out;
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

		transition: border-color 150ms ease-out;
	}

	.input::placeholder {
		color: var(--_color);
		opacity: 0.25;

		transition: color 150ms ease-out;
	}

	@media screen and (width > 40rem) {
		.form__inputs {
			padding: 2.5rem;
			gap: 2.5rem;
		}
	}
</style>
