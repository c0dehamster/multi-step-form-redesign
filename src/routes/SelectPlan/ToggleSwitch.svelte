<script lang="ts">
	import { createEventDispatcher } from "svelte"

	interface ToggleOption {
		value: string
		label: string
		checked?: boolean
	}

	export let option1: ToggleOption
	export let option2: ToggleOption

	let group = option1.checked
		? option1.value
		: option2.checked
		? option2.value
		: ""

	const dispatch = createEventDispatcher()

	const onToggle = () =>
		(group = group === option1.value ? option2.value : option1.value)

	$: switchClass = `billing-options__switch ${
		group === option2.value ? "billing-options__switch--option-2" : ""
	}`

	$: {
		dispatch("toggle", group)
	}
</script>

<!-- This is a custom way to make a two-option toggle switch, use with caution -->

<fieldset class="billing-options">
	<legend class="sr-only">Select monthly or yearly billing</legend>

	<label
		for={option1.value}
		class="billing-options__label billing-options__label--left">
		{option1.label}
		<input
			type="radio"
			class="billing-options__radio hidden"
			value={option1.value}
			id={option1.value}
			bind:group />
	</label>

	<button
		type="button"
		class={switchClass}
		aria-label="Switch billing scheme"
		on:click={onToggle} />

	<label
		for={option2.value}
		class="billing-options__label billing-options__label--right">
		<input
			type="radio"
			class="billing-options__radio hidden"
			value={option2.value}
			id={option2.value}
			bind:group />
		{option2.label}
	</label>
</fieldset>

<style>
	.billing-options {
		display: grid;
		grid-template-columns: 1fr 3rem 1fr;
		gap: 2rem;
		align-items: center;

		border: none;
	}

	.billing-options__label {
		position: relative;

		--_label-color: var(--color-text-main);

		color: var(--_label-color);

		transition: color 150ms ease-out;
	}

	.billing-options__label:where(:has(.billing-options__radio:checked)) {
		text-shadow: 0 0 0.125rem hsl(308, 100%, 100%, 0.25);
		--_label-color: var(--color-active);
	}

	.billing-options__label::before {
		content: "";
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: 0;
		transition: 100ms ease-in;

		border-bottom: 1px solid var(--_label-color);
	}

	.billing-options__label:hover::before,
	.billing-options__label:focus::before {
		left: 0;
		right: 0;
	}

	/* Workaround for the animated shadow */

	.billing-options__label::after {
		content: "";
		position: absolute;
		inset: 0;

		background-color: var(--color-active);
		filter: blur(0.5rem);

		opacity: 0;

		transition: opacity 150ms ease-out;
	}

	.billing-options__label:where(
			:has(.billing-options__radio:checked)
		)::after {
		opacity: 0.1;
	}

	.billing-options__label--left {
		justify-self: end;
	}

	.billing-options__label--right {
		justify-self: baseline;
	}

	.billing-options__switch {
		position: relative;

		width: 3rem;
		height: 1.5rem;

		background: transparent;
		--_switch-color: var(--color-text-main);
		border: 1px solid var(--_switch-color);

		transition: border-color 200ms ease-out;
	}

	.billing-options__switch::after {
		content: "";
		position: absolute;
		inset: 0;

		z-index: -1;

		box-shadow: 0 0 1.5rem 0 hsl(308, 100%, 42%, 0.25),
			inset 0 0 0.75rem 0 hsl(308, 100%, 42%, 0.25);

		opacity: 0;
		transition: opacity 200ms linear;
	}

	.billing-options__switch:hover::after {
		opacity: 1;
	}

	.billing-options__switch:hover,
	.billing-options__switch:focus-visible {
		--_switch-color: var(--color-active);
	}

	.billing-options__switch::before {
		content: "";

		position: absolute;
		top: 50%;
		left: 0.2rem;
		transform: translateY(-50%);

		/* It is not recommended to transition inset but
        the performance impact is negligible for a single element */

		transition: left 200ms ease-out;

		width: 1rem;
		aspect-ratio: 1;

		border: 1px solid var(--_switch-color);
	}

	.billing-options__switch--option-2::before {
		left: calc(100% - 1.2rem);
	}
</style>
