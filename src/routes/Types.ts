export interface NavigationItem {
	id: number
	name: string
	address: string
}

export interface UserData {
	name?: string
	email?: string
	phoneNumber?: string
	plan?: "arcade" | "advanced" | "pro"
	billing?: "monthly" | "yearly"
	addOns?: Array<"onlineService" | "largerStorage" | "customizableProfile">
}
