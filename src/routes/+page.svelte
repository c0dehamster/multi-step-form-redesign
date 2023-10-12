<script>
	import iconArrowRight from "../lib/images/icon-arrow-right.svg"
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Personal info</h1>
		<p class="page__description">
			Please provide your name, email address, and phone number.
		</p>
	</header>

	<form class="form">
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
		<a href="#0" class="nav-arrows__link">
			<img
				src={iconArrowRight}
				alt="Next Step"
				class="nav-arrows__icon" />
		</a>
	</div>
</div>

<style>
	.page {
		display: grid;
		justify-items: center;
		gap: 1.5rem;
	}

	.form {
		width: 100%;
		padding: 2rem;
		display: grid;
		gap: 1rem;
	}

	.input-wrapper {
		width: 100%;

		display: grid;
		grid-template-areas:
			"label error"
			"input input";
	}

	.label {
		grid-area: label;
	}

	.error {
		grid-area: error;

		justify-self: end;
		text-align: end;
	}

	.input {
		grid-area: input;
	}
</style>
