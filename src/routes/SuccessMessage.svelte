<script>
	import { goto } from "$app/navigation"

	import backgroundCheckmark from "../lib/images/checkmark-background.svg"

	import { userDataStore, isComplete } from "./userData"

	const reset = () => {
		userDataStore.onReset()
		goto("/")
		isComplete.set(false)
	}
</script>

<div class="success-message" style="--checkmark: url({backgroundCheckmark});">
	<h1 class="success-message__title">Thank you!</h1>

	<p class="success-message__description">
		Thanks for confirming your subscription! We hope you have fun using our
		platform. If you ever need support, please feel free to email us at
		support@loremgaming.com.
	</p>

	<button class="button button--outline" on:click={reset}> Continue </button>
</div>

<style>
	.success-message {
		width: min(100%, 32rem);

		padding-inline: 2rem;
		padding-block: 4rem;

		display: grid;
		place-items: center;
		gap: 1.5rem;

		text-align: center;

		background-image: var(--checkmark);
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.success-message__title {
		font-size: var(--font-size-800);
	}

	.success-message__description {
		text-wrap: balance;
	}

	.button {
		height: 2.5rem;
		padding-inline: 3rem;

		background: transparent;
		border: 1px solid var(--color-text-main);
		color: var(--color-text-main);
	}

	.button::before,
	.button::after {
		content: "";
		position: absolute;

		z-index: -1;

		opacity: 0;
		transition: opacity 100ms ease-in;
	}

	.button::before {
		inset: 0;

		background-color: var(--color-text-main);
	}

	.button::after {
		inset: -0.25rem -0.25rem -0.25rem -0.25rem;

		border: 2px solid var(--color-text-main);
	}

	.button:hover::before {
		opacity: 0.1;
	}

	.button:focus-visible::after {
		opacity: 1;
	}

	@media screen and (width > 40rem) {
		.success-message {
			width: min(75%, 32rem);

			gap: 2rem;
		}
	}
</style>
