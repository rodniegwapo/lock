import { writable } from 'svelte/store';

// SvelteKit
//import { browser } from "$app/env";
//const client = browser;

const client = true;

export const localStorageStore = (key, initial) => {
	const { set: setStore, ...readableStore } = writable(initial, () => {
		if (!client) return;

		getAndSetFromLocalStorage();

		const updateFromStorageEvents = (event) => {
			if (event.key === key) getAndSetFromLocalStorage();
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('storage', updateFromStorageEvents);
			return () => window.removeEventListener('storage', updateFromStorageEvents);
		}
		return;
	});

	// Set both localStorage and this Svelte store
	const set = (value) => {
		setStore(value);
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`the \`${key}\` store's new value \`${value}\` could not be persisted to localStorage because of ${error}`);
		}
	};

	// Synchronize the Svelte store with localStorage
	const getAndSetFromLocalStorage = () => {
		let localValue = null;

		try {
			localValue = localStorage.getItem(key);
		} catch (error) {
			console.error(`the \`${key}\` store's value could not be restored from localStorage because of ${error}`);
		}

		if (localValue === null) {
			set(initial);
		} else {
			try {
				setStore(JSON.parse(localValue));
			} catch {
				set(initial);
			}
		}
	};

	return {
		...readableStore,
		set
	};
};
