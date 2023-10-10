<script>
	import iconArrowLeft from "../lib/images/icon-arrow-left.svg"
	import iconArrowRight from "../lib/images/icon-arrow-right.svg"
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Pick add-ons</h1>
		<p class="page__description">
			Add-ons help enhance your gaming experience.
		</p>
	</header>

	<form class="form">
		<ul class="add-ons">
			<li class="add-ons__list-item">
				<label for="" class="card">
					<p class="card__title">Online service</p>
					<p class="card__description">Access to multiplayer games</p>
					<p class="card__price">+$1/mo</p>

					<input type="checkbox" class="card__checkbox" />
				</label>
			</li>

			<li class="add-ons__list-item">
				<label for="" class="card">
					<p class="card__title">Larger storage</p>
					<p class="card__description">Extra 1TB of cloud save</p>
					<p class="card__price">+$2/mo</p>

					<input type="checkbox" class="card__checkbox" />
				</label>
			</li>

			<li class="add-ons__list-item">
				<label for="" class="card">
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

	<div class="nav-arrows">
		<a href="#0" class="nav-arrows__link">
			<img
				src={iconArrowLeft}
				alt="Previous step"
				class="nav-arrows__icon" />
			<img
				src={iconArrowRight}
				alt="Next Step"
				class="nav-arrows__icon" />
		</a>
	</div>
</div>
