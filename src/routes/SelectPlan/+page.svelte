<script>
	import iconArrowLeft from "../../lib/images/icon-arrow-left.svg"
	import iconArrowRight from "../../lib/images/icon-arrow-right.svg"
</script>

<div class="page">
	<header class="page__header">
		<h1 class="page__title">Select your plan</h1>
		<p class="page__description">
			You have the option of monthly or yearly billing.
		</p>
	</header>

	<form class="form">
		<ul class="form__radio-cards">
			<li class="form__radio-card">
				<label for="" class="card">
					<input
						type="radio"
						class="card__radio hidden"
						value="arcade" />

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

			<li class="form__radio-card">
				<label for="" class="card">
					<input
						type="radio"
						class="card__radio hidden"
						value="advanced" />

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

			<li class="form__radio-card">
				<label for="" class="card">
					<input
						type="radio"
						class="card__radio hidden"
						value="pro" />

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
