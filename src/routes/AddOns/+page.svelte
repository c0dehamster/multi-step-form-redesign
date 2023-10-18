<script>
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
		<h1 class="page__title">Pick add-ons</h1>
		<p class="page__description">
			Add-ons help enhance your gaming experience.
		</p>
	</header>

	<form use:form class="form">
		<ul class="add-ons">
			<li class="card">
				<label for="" class="card__contents">
					<p class="card__title">Online service</p>
					<p class="card__description">Access to multiplayer games</p>
					<p class="card__price">+$1/mo</p>

					<input type="checkbox" class="card__checkbox" />
				</label>
			</li>

			<li class="card">
				<label for="" class="card__contents">
					<p class="card__title">Larger storage</p>
					<p class="card__description">Extra 1TB of cloud save</p>
					<p class="card__price">+$2/mo</p>

					<input type="checkbox" class="card__checkbox" />
				</label>
			</li>

			<li class="card">
				<label for="" class="card__contents">
					<p class="card__title">Customizable Profile</p>
					<p class="card__description">
						Custom theme on your profile
					</p>
					<p class="card__price">+$2/mo</p>

					<input type="checkbox" class="card__checkbox" />
				</label>
			</li>
		</ul>
	</form>
</div>

<style>
	.add-ons {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.card {
		position: relative;

		padding-block: 0.75rem;
		padding-inline: 1rem;

		border: 1px solid var(--color-text-main);
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
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-areas:
			"title price checkbox"
			"description description description ";
		column-gap: 1rem;
		row-gap: 1.5rem;
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

	.card__checkbox {
		grid-area: checkbox;
		justify-self: end;

		appearance: none;

		width: 1.5rem;
		aspect-ratio: 1;

		border: 1px solid var(--color-text-main);
	}

	.card__description {
		grid-area: description;
	}
</style>
