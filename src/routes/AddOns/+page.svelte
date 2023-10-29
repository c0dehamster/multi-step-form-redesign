<script lang="ts">
	import { beforeNavigate } from "$app/navigation"
	import { createForm } from "felte"

	import { addOns } from "../data"
	import iconCheckmark from "../../lib/images/checkmark.svg"
	import { userDataStore } from "../stores"

	const { form, data, createSubmitHandler } = createForm({
		onSubmit: (values) => {
			userDataStore.onSubmit(values)
		},
		initialValues: {
			addOns: $userDataStore.addOns,
		},
	})

	/* Trigger form submit when the user goes to the next/previous page */

	const handleSubmit = createSubmitHandler()

	beforeNavigate(() => handleSubmit())
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Pick add-ons</h1>
		<p class="page__description">
			Add-ons help enhance your gaming experience.
		</p>
	</header>

	<form use:form class="form">
		<ul class="add-ons">
			{#each addOns as addOn}
				<li class="card">
					<label for={addOn.name} class="card__contents">
						<p class="card__title">{addOn.title}</p>
						<p class="card__description">
							{addOn.description}
						</p>
						<p class="card__price">
							{$userDataStore.billingScheme === "monthly"
								? `+$${addOn.pricePerMonth}/mo`
								: `+$${addOn.pricePerYear}/yr`}
						</p>

						<input
							type="checkbox"
							class="hidden"
							value={addOn.name}
							id={addOn.name}
							name="addOns" />

						<div
							class={`card__checkbox ${
								$data.addOns?.includes(addOn.name)
									? "card__checkbox--checked"
									: ""
							}`}
							style="--icon-checkmark: url({iconCheckmark});" />
					</label>
				</li>
			{/each}
		</ul>
	</form>
</div>

<style>
	.add-ons {
		width: 100%;
		padding-inline: 2rem;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Individual card */

	.card {
		position: relative;

		border: 1px solid var(--color-text-main);

		transition: transform 200ms ease-out;
	}

	.card:hover {
		transform: scale(1.05);
	}

	.card::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;

		background-color: var(--color-background-highlight);
	}

	.card__contents {
		padding-block: 0.75rem;
		padding-inline: 1rem;
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: auto 1fr 1.5rem;
		grid-template-areas:
			"title price checkbox"
			"description description description ";
		gap: 1.5rem;
		align-items: center;
	}

	.card__title {
		grid-area: title;

		font-weight: var(--font-weight-bold);
	}

	.card__price {
		grid-area: price;

		opacity: 0.5;
	}

	.card__description {
		/* To prevent line break */
		min-width: max-content;
		grid-area: description;
	}

	/* The custom checkbox */

	.card__checkbox {
		position: relative;
		grid-area: checkbox;
		justify-self: end;

		width: 1.5rem;
		aspect-ratio: 1;

		border: 1px solid var(--color-text-main);
	}

	.card__checkbox::before {
		content: "";
		position: absolute;
		/* Due to the shadow the SVG is much larger than the checkmark itself */
		inset: -1.75rem -1.5rem -1.25rem -1.5rem;
		z-index: 2;
		background-image: var(--icon-checkmark);
		background-repeat: no-repeat;
		background-size: cover;

		opacity: 0;
		transition: opacity 100ms linear;
	}

	.card__checkbox--checked::before {
		opacity: 1;
	}

	@media (width < 40rem) {
		.add-ons {
			padding: 2rem;
		}
	}

	@container form (width > 32rem) {
		.card::before {
			width: calc(50% + 2rem);
			clip-path: polygon(0 0, 100% 0, calc(100% - 2rem) 100%, 0 100%);
		}
		.card__contents {
			grid-template-areas:
				"title title checkbox"
				"description price .";
			column-gap: 2.5rem;
		}
	}
</style>
