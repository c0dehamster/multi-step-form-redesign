<script>
	import iconArrowLeft from "../../lib/images/icon-arrow-left.svg"
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Finishing up</h1>
		<p class="page__description">
			Double-check everything looks OK before confirming.
		</p>
	</header>

	<form class="form">
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

			<button class="summary__button">Confirm</button>
		</div>
	</form>

	<div class="nav-arrows">
		<a href="#0" class="nav-arrows__link nav-arrows__link--left">
			<img
				src={iconArrowLeft}
				alt="Previous step"
				class="nav-arrows__icon" />
		</a>
	</div>
</div>
