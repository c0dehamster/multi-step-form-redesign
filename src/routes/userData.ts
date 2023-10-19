import { writable } from "svelte/store"

import type { UserData } from "./Types"

const initialValues: UserData = {
	name: "",
	email: "",
	phoneNumber: "",
	plan: "arcade",
	billing: "monthly",
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
