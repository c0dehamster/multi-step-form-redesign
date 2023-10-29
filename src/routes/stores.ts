import { writable, derived } from "svelte/store"

import type { UserData } from "./Types"
import { plans, addOns } from "./data"

const initialValues: UserData = {
	name: "",
	email: "",
	phoneNumber: "",
	plan: "arcade",
	billingScheme: "monthly",
	addOns: [],
}

const createUserDataStore = (initialValues: UserData) => {
	const { set, update, subscribe } = writable(initialValues)

	const onSubmit = (values: UserData) => {
		update((store) => {
			return { ...store, ...values }
		})
	}

	const onReset = () => {
		set(initialValues)
	}

	return {
		onReset,
		onSubmit,
		subscribe,
	}
}

export const userDataStore = createUserDataStore(initialValues)

export const summary = derived(userDataStore, ($userDataStore) => {
	const chosenPlan =
		plans.find((item) => item.name === $userDataStore.plan) || plans[0]

	let chosenAddOns = addOns.filter((i) =>
		$userDataStore.addOns?.find((j) => i.name === j)
	)

	const planInfo = {
		title: chosenPlan.title,
		billingScheme: $userDataStore.billingScheme,

		get price() {
			if ($userDataStore.billingScheme === "monthly")
				return chosenPlan.pricePerMonth
			return chosenPlan.pricePerYear
		},
	}

	const addOnsInfo = chosenAddOns.map((i) => {
		return {
			title: i.title,

			get price() {
				if ($userDataStore.billingScheme === "monthly")
					return i.pricePerMonth
				return i.pricePerYear
			},
		}
	})

	/* Add all the prices together */

	const total = [planInfo.price, ...addOnsInfo.map((i) => i.price)].reduce(
		(previousValue, currentValue) => previousValue + currentValue
	)

	return {
		planInfo,
		addOnsInfo,
		total,
	}
})

export const isComplete = writable(false)