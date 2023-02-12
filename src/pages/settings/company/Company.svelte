<script>
	let aComp = {
		caption: '',
		data: [
			{ caption: 'Include Tips', checked: false },
			{ caption: 'Provide Taxable Meals', checked: false },
			{ caption: 'Use Departments', checked: false },
			{ caption: 'Print Job Cost Report', checked: true },
			{ caption: 'Employee Direct Deposits', checked: false },
			{ caption: 'Use Shifts', checked: false },
			{ caption: 'Calculate WC Insurance', checked: false }
		]
	};

	let fakeDataDeductions = [
		{ data: 'I', department: 'ADVANCE' },
		{ data: 'D', department: 'DED2' },
		{ data: 'D', department: 'DED3' },
		{ data: 'D', department: 'DED4' },
		{ data: 'D', department: 'DED5' },
		{ data: 'I', department: 'DED6' },
		{ data: 'D', department: 'DED7' },
		{ data: 'D', department: 'DED8' },
		{ data: 'I', department: 'DED9' },
		{ data: 'D', department: 'DED10' },
		{ data: 'D', department: 'MISC11' },
		{ data: 'D', department: 'MISC12' },
		{ data: 'D', department: 'MISC13' },
		{ data: 'D', department: 'MISC14' },
		{ data: 'D', department: 'MISC15' },
		{ data: 'D', department: 'MISC16' },
		{ data: 'D', department: 'MISC17' },
		{ data: 'D', department: 'MISC18' }
	];

	let fakeDataPayRates = [
		{ data: '(1)', department: 'Customer Support' },
		{ data: '(2)', department: 'Admin' },
		{ data: '(3)', department: 'Developer' },
		{ data: '(4)', department: 'Ceo' },
		{ data: '(5)', department: 'Other Pay' },
		{ data: '(6)', department: 'Another Pay' }
	];

	const tabs = [
		{ id: 1, caption: 'Company Setup' },
		{ id: 2, caption: 'Deductions & Income' },
		{ id: 3, caption: 'Other Pay Rates' }
	];
	let tabSelected = 1;
</script>

<div>
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="align-middle inline-block w-full sm:px-6 lg:px-8">
				<div class="overflow-hidden rounded-lg">
					<div class="bg-white px-3 pt-5 sm:px-6">
						<div class="md:flex md:items-center md:justify-between md:space-x-5">
							<div class="flex items-start space-x-5">
								<div class="flex-shrink-0">
									<div class="relative">
										<img
											class="hidden h-16 w-16 rounded-full"
											src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
											alt=""
										/>
										<span class="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
											<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
												<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</span>
										<span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
									</div>
								</div>
								<div class="pt-1.5">
									<h1 class="text-2xl font-bold text-gray-900">Business Title</h1>
									<p class="text-sm font-medium text-gray-500">Taxpayer Name</p>
								</div>
							</div>
						</div>

						<div class="py-5 sm:pb-0">
							<div>
								<div class="sm:hidden">
									<label for="tabs" class="sr-only">Select a tab</label>
									<select id="tabs" name="tabs" bind:value={tabSelected} class="block w-full focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md">
										{#each tabs as tab_item}
											<option value={tab_item.id}>{tab_item.caption}</option>
										{/each}
									</select>
								</div>
								<div class="hidden sm:block">
									<div class="border-b border-gray-200">
										<nav class="-mb-px flex" aria-label="Tabs">
											{#each tabs as tab_item}
												<span
													on:click={() => (tabSelected = tab_item.id)}
													class="{tabSelected === tab_item.id
														? 'border-red-500 text-red-600'
														: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer"
												>
													{tab_item.caption}
												</span>
											{/each}
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if tabSelected === 1}
	<div class="my-5">
		<div class="shadow overflow-hidden  rounded sm:rounded-md">
			<div class="bg-white px-4 py-5 sm:p-6">
				<div class="">
					<div class="md:mt-0">
						<form action="#" method="POST">
							<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div class="col-span-6">
									<label for="first-name" class="block text-sm font-medium text-gray-700">Business Title</label>
									<input
										type="text"
										name="first-name"
										id="first-name"
										autocomplete="given-name"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6">
									<label for="last-name" class="block text-sm font-medium text-gray-700">Taxpayer Name</label>
									<input
										type="text"
										name="last-name"
										id="last-name"
										autocomplete="family-name"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6 sm:col-span-4">
									<label for="street-address" class="block text-sm font-medium text-gray-700">Address</label>
									<input
										type="text"
										name="street-address"
										id="street-address"
										autocomplete="street-address"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="street-address" class="block text-sm font-medium text-gray-700">Phone</label>
									<input
										type="text"
										name="street-address"
										id="street-address"
										autocomplete="street-address"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="city" class="block text-sm font-medium text-gray-700">City</label>
									<input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
									<input
										type="text"
										name="state"
										id="state"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autocomplete="postal-code"
										class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									/>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="tax-state" class="block text-sm font-medium text-gray-700">Tax State</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="tax-state"
												id="tax-state"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="locality-01" class="block text-sm font-medium text-gray-700">Locality 1</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="locality-01"
												id="locality-01"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="locality-01" class="block text-sm font-medium text-gray-700">Locality 2</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="locality-01"
												id="locality-01"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="locality-03" class="block text-sm font-medium text-gray-700">Locality 3</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="locality-03"
												id="locality-03"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="locality-04" class="block text-sm font-medium text-gray-700">Locality 4</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="locality-04"
												id="locality-04"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-2">
									<label for="locality-05" class="block text-sm font-medium text-gray-700">Locality 5</label>
									<div class="mt-1 flex w-full rounded shadow-sm">
										<div class="relative flex items-stretch flex-grow focus-within:z-10">
											<input
												type="text"
												name="locality-05"
												id="locality-05"
												class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l sm:text-sm border-gray-300"
												placeholder=""
											/>
										</div>
										<button
											type="button"
											class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
										>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
											<span>Change</span>
										</button>
									</div>
								</div>

								<div class="col-span-6 sm:col-span-3">
									<fieldset>
										<legend class="block text-sm font-medium text-gray-900" />
										<div class="pt-6 space-y-3">
											{#each aComp.data as aCompConfig}
												<div class="flex items-center">
													{#if aCompConfig.caption}
														<input
															id={aCompConfig.caption}
															name={aCompConfig.caption}
															bind:checked={aCompConfig.checked}
															type="checkbox"
															class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
														/>
														<label for={aCompConfig.caption} class="ml-3 text-sm text-gray-600">{aCompConfig.caption}</label>
													{/if}
												</div>
											{/each}
										</div>
									</fieldset>
								</div>

								<div class="col-span-6 sm:col-span-3">
									<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
										<div class="col-span-6 sm:col-span-3">
											<label for="first-name" class="block text-sm font-medium text-gray-700">Default Vacation Hours Accrued (Yearly)</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
										<div class="col-span-6 sm:col-span-3">
											<label for="first-name" class="block text-sm font-medium text-gray-700">No. of Days to start accrual from hiring</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
										<div class="col-span-6 sm:col-span-3">
											<label for="first-name" class="block text-sm font-medium text-gray-700">Default Sick Hours Accrued (Yearly)</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
										<div class="col-span-6 sm:col-span-3">
											<label for="first-name" class="block text-sm font-medium text-gray-700">No. of Days to start accrual from hiring</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div class="col-span-6">
											<label for="first-name" class="block text-sm font-medium text-gray-700">Number of hours is Employee allowed to work after 8 hours of regular work</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autocomplete="given-name"
												class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
								</div>

								<div class="col-span-6">
									<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">Payroll Processing Software</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option value="1">NONE</option>
												<option value="2">Payroll Processing</option>
												<option value="3">Bookkeping</option>
												<option value="4">Shipping/Receiving</option>
												<option value="5">Delivery</option>
											</select>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">LOCAL (Customer) Time Zone</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option />
											</select>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">Default Pay Policy</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option />
											</select>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">Default Rounding Policy</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option />
											</select>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">Default Pay Period</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option selected>Weekly</option>
												<option>Bi-Weekly</option>
												<option>Semi-Monthly</option>
												<option>Monthly</option>
											</select>
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="employment-type" class="block text-sm font-medium text-gray-700">Default Holiday Package</label>
											<select
												id="employment-type"
												name="employment-type"
												class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option />
											</select>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button
					type="submit"
					class="mx-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Save
				</button>
			</div>
		</div>
	</div>
{:else if tabSelected === 2}
	<div class="my-5">
		<div class="shadow overflow-hidden  rounded sm:rounded-md">
			<div class="bg-white px-4 py-5 sm:p-6">
				<div class="">
					<div class="md:mt-0">
						<form action="#" method="POST">
							<div class="overflow-x-auto">
								<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
									<thead>
										{#each fakeDataDeductions as fData}
											<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
												<th class="p-1 border-b text-sm h-8 md:h-auto">Other Income/Deduction</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">(I)nc (D)ed</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Federal</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Fica</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Sui</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Futa</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No State</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Local</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">No Sdi</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">W-2 Box 13 14 11 10 Code</th>
												<th class="p-1 border-b text-sm h-8 md:h-auto">Checked if Used</th>
											</tr>
										{/each}
									</thead>
									<tbody class="flex-1 sm:flex-none">
										{#each fakeDataDeductions as fData}
											<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
												<td class="border-b h-8">
													<input
														type="text"
														class="h-6 md:h-auto lg:h-auto shadow-sm w-full lg:w-16 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md text-xs"
														value={fData.department}
													/>
												</td>
												<td class="border-b h-8">
													<input
														type="text"
														class="h-6 md:h-auto lg:h-auto w-full lg:w-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md text-xs"
														value={fData.data}
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="border-b h-8">
													<input
														type="text"
														class="h-6 md:h-auto lg:h-auto w-full md:w-14 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md text-xs"
													/>
												</td>
												<td class="p-1 border-b h-8">
													<input
														id="comments"
														aria-describedby="checkbox"
														checked
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 md:w-4 lg:w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button
					type="submit"
					class="mx-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Save
				</button>
			</div>
		</div>
	</div>
{:else if tabSelected === 3}
	<div class="my-5">
		<div class="shadow overflow-hidden  rounded sm:rounded-md">
			<div class="bg-white px-4 py-5 sm:p-6">
				<div class="">
					<div class="md:mt-0">
						<form action="#" method="POST">
							<div class="overflow-x-auto">
								<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
									<thead>
										{#each fakeDataPayRates as fData}
											<tr class="bg-gray-200 flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
												<th class="border-b">No Federal</th>
												<th class="border-b">No Fica</th>
												<th class="border-b">No Sui</th>
												<th class="border-b">No Futa</th>
												<th class="border-b">No State</th>
												<th class="border-b">No Local</th>
												<th class="border-b">No Sdi</th>
											</tr>
										{/each}
									</thead>
									<tbody class="flex-1 sm:flex-none">
										{#each fakeDataPayRates as fData}
											<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
												<td class="border-b">
													{fData.data}
												</td>
												<td class="border-b">{fData.department}</td>
												<td class="border-b">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="border-b">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="border-b">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="border-b">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
												<td class="border-b">
													<input
														id="comments"
														aria-describedby="checkbox"
														name="comments"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
				<button
					type="submit"
					class="mx-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Save
				</button>
			</div>
		</div>
	</div>
{/if}
