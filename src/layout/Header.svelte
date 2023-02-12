<script>
	import { getContext, createEventDispatcher } from 'svelte';

	import Notification from './Notification.svelte';

	const context = getContext('app');
	const dispatch = createEventDispatcher();

	let active = context.getActive();
	let clientList = context.getClient();

	import { clickOutside } from '../lib/clickOutside.js';

	export let isSideBarOpen;

	let isOpenList = false;
	let isOpenDropProfile = false;
	let isOpenDropNotification = false;

	function openList() {
		isOpenList = !isOpenList;
	}

	function clickList(item) {
		if (item.company.id !== active.company.id) {
			active = context.setClient(item.company.id);
			dispatch('reload', active);
		}
		isOpenList = false;
	}

	$: document.body.classList[isSideBarOpen ? 'add' : 'remove']('overflow-hidden');
</script>

<div class="relative z-30 flex-shrink-0 flex h-16 bg-white shadow">
	<button
		type="button"
		on:click={() => (isSideBarOpen = true)}
		class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset
		focus:ring-gray-500 lg:hidden"
	>
		<span class="sr-only">Open sidebar</span>
		<!-- Heroicon name: outline/menu-alt-2 -->
		<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
		</svg>
	</button>
	<div class="flex-1 px-4 flex justify-between">
		<div class="flex-1 flex">
			<div class="w-full flex md:ml-0">
				<label for="change-company" class="sr-only">Change Company</label>
				<div class="w-full max-w-3xl">
					<div use:clickOutside={{ enabled: isOpenList, cb: () => (isOpenList = false) }}>
						<div class="mt-3 relative">
							<button
								id="change-company"
								type="button"
								on:click={openList}
								class="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-gray-100 text-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-75 sm:text-sm"
								aria-haspopup="listbox"
								aria-expanded="true"
								aria-labelledby="listbox-label"
							>
								<span class="w-full inline-flex truncate">
									<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
									</div>
									<span class="text-sm font-medium truncate text-gray-500">
										{active.company.title}
									</span>
									<span class="hidden sm:block absolute right-10 ml-2 opacity-90 hover:opacity-100">
										{active.company.id}
									</span>
								</span>
								<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
									<svg class="h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</button>
							{#if isOpenList}
								<ul
									class="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
									tabindex="-1"
									role="listbox"
									aria-labelledby="listbox-label"
									aria-activedescendant="listbox-option-3"
								>
									{#each clientList as item}
										<li
											on:click={() => clickList(item)}
											class="group hover:text-white hover:bg-gray-700 text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
											id="listbox-option-0"
											role="option"
										>
											<div class="flex">
												{#if item.company.id === active.company.id}
													<span class="text-sm font-medium truncate">
														{item.company.title}
													</span>
													<span class="text-sm text-gray-20 ml-2 truncate absolute right-10">
														@{item.company.id}
													</span>
													<span class="group-hover:text-white text-gray-600 absolute inset-y-0 right-0 flex items-center pr-4">
														<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
															<path
																fill-rule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												{:else}
													<span class="group-hover:text-white text-sm font-medium truncate">
														{item.company.title}
													</span>
													<span class="group-hover:text-white text-sm text-gray-500 ml-2 truncate absolute right-10">
														@{item.company.id}
													</span>
												{/if}
											</div>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ml-4 flex items-center md:ml-6">
			<!-- Notification dropdown -->
			<div class="hidden sm:block ml-3 relative" use:clickOutside={{ enabled: isOpenDropNotification, cb: () => (isOpenDropNotification = false) }}>
				<div>
					<button
						type="button"
						on:click={() => (isOpenDropNotification = !isOpenDropNotification)}
						class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
					>
						<span class="sr-only">View notifications</span>
						<!-- Heroicon name: outline/bell -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>
				</div>
				{#if isOpenDropNotification}
					<Notification />
				{/if}
			</div>

			<!-- Profile dropdown -->
			<div class="ml-3 relative" use:clickOutside={{ enabled: isOpenDropProfile, cb: () => (isOpenDropProfile = false) }}>
				<div>
					<button
						type="button"
						class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
						on:click={() => (isOpenDropProfile = !isOpenDropProfile)}
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="hidden h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
							<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</span>
					</button>
				</div>
				{#if isOpenDropProfile}
					<div
						class="block absolute top-full right-0 w-60 mt-3 -mr-0.5 sm:-mr-3.5 bg-white rounded-lg shadow-md ring-1 ring-gray-900 ring-opacity-5 font-normal text-sm text-gray-900 divide-y divide-gray-100"
					>
						<p class="py-3 px-3.5 truncate">
							<span class="block mb-0.5 text-xs text-gray-500">Signed in as</span>
							<span class="font-semibold">{active.user.email}</span>
						</p>
						<div class="py-1.5 px-3.5">
							<a href="/" on:click|preventDefault={() => context.disconnect()} class="group flex w-full items-center py-1.5 text-gray-900 hover:text-gray-600">
								<svg width="20" height="20" fill="none" class="flex-none mr-3 text-gray-400 group-hover:text-gray-600">
									<path
										d="M10.25 3.75H9A6.25 6.25 0 002.75 10v0A6.25 6.25 0 009 16.25h1.25M10.75 10h6.5M14.75 12.25l2.5-2.25-2.5-2.25"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Sign out
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
