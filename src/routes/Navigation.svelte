<nav class="nav">
	<ol class="nav__list">
		<li class="nav__list-item">
			<a href="/" class="nav__link">
				<div class="nav__label">
					<p class="nav__step">Step 1</p>
					<p class="nav__name">Your info</p>
				</div>
			</a>
		</li>

		<li class="nav__list-item">
			<a href="/SelectPlan" class="nav__link">
				<div class="nav__label">
					<p class="nav__step">Step 2</p>
					<p class="nav__name">Select plan</p>
				</div>
			</a>
		</li>

		<li class="nav__list-item">
			<a href="/AddOns" class="nav__link">
				<div class="nav__label">
					<p class="nav__step">Step 3</p>
					<p class="nav__name">Add-ons</p>
				</div>
			</a>
		</li>

		<li class="nav__list-item">
			<a href="/Summary" class="nav__link">
				<div class="nav__label">
					<p class="nav__step">Step 4</p>
					<p class="nav__name">Summary</p>
				</div>
			</a>
		</li>
	</ol>
</nav>

<style>
	.nav__list {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		counter-reset: navigation;
	}

	.nav__list-item {
		counter-increment: navigation;
	}

	.nav__link {
		position: relative;

		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.nav__link::before {
		content: counter(navigation);

		font-size: var(--font-size-700);
	}

	@media screen and (width < 45rem) {
		.nav__link::before {
			font-size: var(--font-size-600);
		}

		.nav__label {
			display: none;
		}
	}
</style>
