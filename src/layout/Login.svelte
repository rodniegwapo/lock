<script>
	import { getContext } from 'svelte';

	import jwt_decode from 'jwt-decode';

	import { API_URL } from '../lib/constants.js';
	import { fly } from 'svelte/transition';

	let email = '';
	let password = '';

	let error = false;
	let data,
		token,
		selected = undefined;

	let context = getContext('app');

	let isProcessing = false;

	const closePanel = async () => {
		data = undefined;
		selected = undefined;
	};

	function itemSelected(item) {
		if (selected && selected.company.id === item.company.id) {
			selected = undefined;
		} else {
			selected = item;
		}
	}

	function onConnect() {
		if (selected && data) {
			context.connect(selected.company.id, token, data);
		}
	}

	const handleLogin = async () => {
		isProcessing = true;

		error = false;

		const response = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		}).catch(() => {
			error = 'Internal Error...';
		});

		if (!error && response.ok) {
			const json = await response.json();
			if (json.error) {
				error = json.error.message;
			} else {
				token = json.token;
				data = jwt_decode(token).data;
				if (data.length === 1) {
					selected = data[0];
					onConnect();
				}
			}
		}

		isProcessing = false;
	};

	let search = '';
	let search_type = 'ID';
	let xData = [];

	$: xData = filterData(search, search_type, data);

	function filterData(cSearch, cType, aData) {
		let xList = aData;

		if (selected) {
			selected = undefined;
		}

		if (xList && xList.length > 0) {
			if (cType === 'ID') {
				xList = xList.filter((item) => item.company.id.toUpperCase().indexOf(cSearch.toUpperCase()) !== -1);
			} else if (cType === 'Name') {
				xList = xList.filter((item) => item.company.title.toUpperCase().indexOf(cSearch.toUpperCase()) !== -1);
			} else if (cType === 'City') {
				xList = xList.filter((item) => item.company.city.toUpperCase().indexOf(cSearch.toUpperCase()) !== -1);
			} else if (cType === 'State') {
				xList = xList.filter((item) => item.company.state.toUpperCase().indexOf(cSearch.toUpperCase()) !== -1);
			}
		}

		return xList;
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<img src="./images/sign-in.png" width="" height="" alt="ProClock" class="mx-auto h-24 w-auto" />
		</div>
		<form on:submit|preventDefault={handleLogin} method="post" class="mt-8 space-y-6">
			{#if error}
				<p class="mt-8 mb-6 text-xs text-center font-medium text-red-600">{error}</p>
			{/if}
			<input type="hidden" name="remember" value="true" />
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						bind:value={email}
						disabled={isProcessing}
						class="{error === false
							? 'text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400'
							: 'text-red-600 ring-red-600 placeholder-red-400 pr-11'} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						bind:value={password}
						disabled={isProcessing}
						class="{error === false
							? 'text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400'
							: 'text-red-600 ring-red-600 placeholder-red-400 pr-11'} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded" />
					<label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
				</div>

				<div class="text-sm">
					<a href="/login/forgot-password" class="font-medium text-gray-600 hover:text-gray-500"> Forgot your password? </a>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={isProcessing}
					class="{isProcessing
						? 'disabled:opacity-50 cursor-not-allowed'
						: ''} group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
				>
					{#if isProcessing}
						<span class="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
							</svg>
						</span>
						Processing...
					{:else}
						<span class="absolute left-0 inset-y-0 flex items-center pl-3">
							<!-- Heroicon name: solid/lock-closed -->
							<svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
							</svg>
						</span>
						Sign in
					{/if}
				</button>
			</div>
		</form>
		<div class="mt-6">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-300" />
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="px-2 bg-white text-gray-500"> Or continue with </span>
				</div>
			</div>

			<div class="mt-6 grid grid-cols-3 gap-3">
				<div>
					<a
						href="/login/facebook"
						class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						<span class="sr-only">Sign in with Facebook</span>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div>
					<a
						href="/login/twitter"
						class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						<span class="sr-only">Sign in with Twitter</span>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path
								d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
					</a>
				</div>

				<div>
					<a href="/login/github" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
						<span class="sr-only">Sign in with GitHub</span>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

{#if data && data.length > 1}
	<section class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
			<div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
				<div class="w-screen max-w-md" transition:fly={{ x: 500, opacity: 1 }}>
					<div class="h-full divide-gray-200 flex flex-col bg-white shadow-xl overflow-y-scroll">
						<div class="p-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Select a company</h2>
								<div class="ml-3 h-7 flex items-center">
									<button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-gray-500" on:click={closePanel}>
										<span class="sr-only">Close panel</span>
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
											><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg
										>
									</button>
								</div>
							</div>
						</div>
						<div class="border-b border-gray-200">
							<div>
								<div class="mt-1 relative rounded-md shadow-sm m-2">
									<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
											><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
										>
									</div>
									<input
										type="text"
										name="search"
										bind:value={search}
										id="search"
										class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
										placeholder="Search"
									/>
									<div class="absolute inset-y-0 right-0 flex items-center">
										<label for="search-by" class="sr-only">Search</label>
										<select
											id="search-by"
											name="search-by"
											bind:value={search_type}
											class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
										>
											<option>ID</option>
											<option>Name</option>
											<option>City</option>
											<option>State</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<ul class="divide-y divide-gray-200 overflow-y-auto h-full">
							{#each xData as item}
								<li class="bg-white p-1" on:click={() => itemSelected(item)}>
									<div
										class="relative group flex items-center {selected && selected.company.id === item.company.id
											? 'cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none ring-2 ring-offset-2 ring-gray-600 bg-gray-100'
											: ''}"
									>
										<div class="-m-1 flex-1 block p-1 ">
											<button class="focus:outline-none">
												<div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
												<div class="flex-1 flex items-center min-w-0 relative">
													<span class="flex-shrink-0 inline-block relative">
														<!-- <img class="h-10 w-10 rounded-full" width="" height="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
														<!-- Online: "bg-green-400", Offline: "bg-gray-300" -->
														<span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
															<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
																<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
															</svg>
														</span>
														<span class="hidden bg-green-400 absolute top-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white" aria-hidden="true" />
													</span>
													<div class="ml-4 truncate">
														<p class="text-left font-medium text-gray-900 truncate">{item.company.title} - {item.company.id.toUpperCase()}</p>
														<p class="text-left text-sm text-gray-500 truncate">{item.company.addr}. {item.company.city}, {item.company.state} {item.company.zip}</p>

														<p class="flex items-start text-left font-medium text-gray-900 mt-2">
															<svg class="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
																<path
																	fill-rule="evenodd"
																	d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																	clip-rule="evenodd"
																/>
															</svg>
															<span class="ml-2"> Ready for Payroll </span>
														</p>

														<p class="text-left text-sm font-medium text-gray-500">Submitted on January 07, 2020 @ 12:55 pm</p>
													</div>
												</div>
											</button>
										</div>
									</div>
								</li>
							{/each}
						</ul>

						<div class="flex-shrink-0 px-4 py-4 flex justify-end">
							<button
								type="button"
								class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
								on:click={closePanel}
							>
								Cancel
							</button>
							<button
								type="submit"
								disabled={!selected}
								class="{selected
									? ''
									: 'disabled:opacity-50 cursor-not-allowed'} ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
								on:click={onConnect}
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}
