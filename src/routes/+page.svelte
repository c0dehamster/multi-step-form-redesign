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
			<p class="error" />
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