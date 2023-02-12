<script>
	//import { link } from 'svelte-spa-router';
	import LoadFailed from '../../layout/LoadFailed.svelte';

	export let employee;
	export let departments;

	const tabs = [
		{ id: 1, caption: 'Profile' },
		{ id: 2, caption: 'Deductions / Reimbursement' },
		{ id: 3, caption: 'Tax Status' },
		{ id: 4, caption: '2020 W-4 Form' },
		{ id: 5, caption: 'Direct Deposits' }
	];
	let tabSelected = 1;

	function getEmployeeDepartment(cDeptId) {
		const item = departments.find((i) => i.id === cDeptId);
		if (item) {
			return item.description;
		}
		return 'Unknow';
	}

	let deductionTypes = [
		{ id: '', caption: '' },
		{ id: 'A', caption: 'Amount' },
		{ id: 'P', caption: 'Percent' },
		{ id: 'H', caption: 'Hourly' },
		{ id: 'G', caption: 'Garnishment' },
		{ id: 'D', caption: 'Disposable' }
	];

	let aDeductions = [
		{ caption: 'ADVANCE', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED2', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED3', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED4', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'REIMB', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED6', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED7', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED8', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED9', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'DED10', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc11', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc12', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc13', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc14', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc15', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc16', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc17', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 },
		{ caption: 'Misc18', type: '', fixAmount: 0.0, Percent: 0.0, HourlyRate: 0.0, limitAmount: 0.0 }
	];

	let aTaxGroupA = {
		caption: 'Check if Applicable',
		data: [
			{ caption: 'Exempt from Fed WH Tax', checked: false },
			{ caption: 'Exempt from FICA Tax', checked: false },
			{ caption: 'Exempt from SUI Tax', checked: false },
			{ caption: 'Exempt from FUTA Tax', checked: true },
			{ caption: 'Exempt from STATE WT', checked: false },
			{ caption: 'Exempt from SDI Tax', checked: false },
			{ caption: null },
			{ caption: 'Exempt from Local Tax 1', checked: false },
			{ caption: 'Exempt from Local Tax 2', checked: false },
			{ caption: 'Exempt from Local Tax 3', checked: false },
			{ caption: 'Exempt from Local Tax 4', checked: true },
			{ caption: 'Exempt from Local Tax 5', checked: false }
		]
	};

	let aTaxGroupB = {
		caption: 'Residency/Status (Check if applicable)',
		data: [
			{ caption: 'Employee is Non-Resident of the State', checked: false },
			{ caption: 'Employee is Non-Resident of Locality 1', checked: false },
			{ caption: 'Employee is Non-Resident of Locality 2', checked: true },
			{ caption: 'Employee is Non-Resident of Locality 3', checked: false },
			{ caption: 'Employee is Non-Resident of Locality 4', checked: true },
			{ caption: 'Employee is Non-Resident of Locality 5', checked: false },
			{ caption: null },
			{ caption: 'Check if Employee Pay Rate is confidential', checked: false },
			{ caption: 'W-2 Deferred Compensation', checked: false },
			{ caption: 'W-2 Pension Plan', checked: false }
		]
	};

	let aDeposits = [
		{ bankName: '', routing: '', EmployeeAcntNo: '', CheckingSavings: '', Percent: 0, Amount: 0.0 },
		{ bankName: '', routing: '', EmployeeAcntNo: '', CheckingSavings: '', Percent: 0, Amount: 0.0 },
		{ bankName: '', routing: '', EmployeeAcntNo: '', CheckingSavings: '', Percent: 0, Amount: 0.0 },
		{ bankName: '', routing: '', EmployeeAcntNo: '', CheckingSavings: '', Percent: 0, Amount: 0.0 }
	];
</script>

{#if employee}
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
										<h1 class="text-2xl font-bold text-gray-900">{employee.name}</h1>
										<p class="text-sm font-medium text-gray-500">{getEmployeeDepartment(employee.dept)}</p>
									</div>
								</div>
								<div
									class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
								>
									<button
										type="button"
										class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
									>
										<svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											/>
										</svg>
										Edit
									</button>
									<button
										type="button"
										class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
									>
										<svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
											<path
												fill-rule="evenodd"
												d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
										Delete
									</button>
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

	<div class="my-5">
		{#if tabSelected === 1}
			<div class="shadow overflow-hidden  rounded sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="">
						<div class="mb-5">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
						</div>
						<div class="md:mt-0">
							<form action="#" method="POST">
								<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
									<div class="col-span-1 sm:col-span-2">
										<label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
										<input
											type="text"
											name="first-name"
											id="first-name"
											autocomplete="given-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-4">
										<label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
										<input
											type="text"
											name="last-name"
											id="last-name"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-6">
										<label for="street-address" class="block text-sm font-medium text-gray-700">Address</label>
										<input
											type="text"
											name="street-address"
											id="street-address"
											autocomplete="street-address"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-2">
										<label for="city" class="block text-sm font-medium text-gray-700">City</label>
										<input
											type="text"
											name="city"
											id="city"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-2">
										<label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
										<input
											type="text"
											name="state"
											id="state"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-2">
										<label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
										<input
											type="text"
											name="postal-code"
											id="postal-code"
											autocomplete="postal-code"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-1">
										<label for="ssn" class="block text-sm font-medium text-gray-700">SSN</label>
										<input
											type="text"
											name="ssn"
											id="ssn"
											autocomplete="given-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-3 sm:col-start-1">
										<label for="phone-first" class="block text-sm font-medium text-gray-700">Phone</label>
										<input
											type="text"
											name="phone-first"
											id="phone-first"
											autocomplete="given-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-3">
										<label for="phone-second" class="block text-sm font-medium text-gray-700">Phone</label>
										<input
											type="text"
											name="phone-second"
											id="phone-second"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-2">
										<label for="phone-second" class="block text-sm font-medium text-gray-700">Hire Date</label>
										<input
											type="date"
											name="phone-second"
											id="phone-second"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-1 sm:col-span-2">
										<label for="phone-second" class="block text-sm font-medium text-gray-700">Termination Date</label>
										<input
											type="date"
											name="phone-second"
											id="phone-second"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		{/if}

		{#if tabSelected === 2}
			<div class="shadow overflow-hidden  rounded sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="flex flex-col">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table class="min-w-full flex flex-row flex-no-wrap divide-y divide-gray-200">
										<thead class="bg-gray-50">
											{#each aDeductions as deduction}
												<tr class="flex flex-col text-center flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Name</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Type</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Fix Amount</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Percent</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Hourly Rate</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Limit Amount</th>
												</tr>
											{/each}
										</thead>
										<tbody class="flex-1 sm:flex-none">
											{#each aDeductions as deduction}
												<!-- Odd row -->
												<tr class="bg-white text-sm flex flex-col text-center flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
													<td class="border pb-0.5">
														<span class="w-full p-1.5">
															{deduction.caption}
														</span>
													</td>
													<td class="border pb-0.5">
														<select bind:value={deduction.type} class="block w-full text-base sm:text-sm">
															{#each deductionTypes as deductionType}
																<option value={deductionType.id}>{deductionType.caption}</option>
															{/each}
														</select>
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={deduction.fixAmount} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={deduction.Percent} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={deduction.HourlyRate} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={deduction.limitAmount} />
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		{/if}

		{#if tabSelected === 3}
			<div class="mb-5">
				<div class="rounded-md bg-yellow-50 p-4">
					<div class="flex">
						<div class="flex-shrink-0">
							<!-- Heroicon name: solid/exclamation -->
							<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-medium text-yellow-800">Attention needed</h3>
							<div class="mt-2 text-sm text-yellow-700">
								<p>Only your Payroll Processor can check/uncheck boxes affecting 100% exemption from Fed & State withholding.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
						<div class="col-span-12 lg:col-span-4 p-5">
							<div class="preview">
								<div class="divide-y divide-gray-200 space-y-10">
									<div>
										<fieldset>
											<legend class="block text-sm font-medium text-gray-900">{aTaxGroupA.caption}</legend>
											<div class="pt-6 space-y-3">
												{#each aTaxGroupA.data as TaxGroupA}
													<div class="flex items-center">
														{#if TaxGroupA.caption}
															<input
																id={TaxGroupA.caption}
																name={TaxGroupA.caption}
																bind:checked={TaxGroupA.checked}
																type="checkbox"
																class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
															/>
															<label for={TaxGroupA.caption} class="ml-3 text-sm text-gray-600">{TaxGroupA.caption}</label>
														{/if}
													</div>
												{/each}
											</div>
											<div class="pt-6 space-y-3 block text-sm font-medium text-red-900">Check ALL boxes for 1099-subcontractor</div>
										</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
						<div class="col-span-12 lg:col-span-4 p-5">
							<div class="preview">
								<div class="divide-y divide-gray-200 space-y-10">
									<div>
										<fieldset>
											<legend class="block text-sm font-medium text-gray-900">{aTaxGroupB.caption}</legend>
											<div class="pt-6 space-y-3">
												{#each aTaxGroupB.data as TaxGroupB}
													<div class="flex items-center">
														{#if TaxGroupB.caption}
															<input
																id={TaxGroupB.caption}
																name={TaxGroupB.caption}
																bind:checked={TaxGroupB.checked}
																type="checkbox"
																class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
															/>
															<label for={TaxGroupB.caption} class="ml-3 text-sm text-gray-600">{TaxGroupB.caption}</label>
														{/if}
													</div>
												{/each}
											</div>
										</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-5 shadow overflow-hidden rounded sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="">
						<div class="mb-5">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Other Employee Info</h3>
							<p class="hidden mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
						</div>
						<div class="mt-5 md:mt-0">
							<form action="#" method="POST">
								<div class="grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="birth-date" class="block text-sm font-medium text-gray-700">Birth Date</label>
										<input
											type="date"
											name="birth-date"
											id="birth-date"
											autocomplete="given-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="last-raise" class="block text-sm font-medium text-gray-700">Last Raise</label>
										<input
											type="date"
											name="last-raise"
											id="last-raise"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="male-female" class="block text-sm font-medium text-gray-700">Male - Female</label>
										<select
											id="male-female"
											name="male-female"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option />
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="employment-type" class="block text-sm font-medium text-gray-700">Employment Type</label>
										<select
											id="employment-type"
											name="employment-type"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option>Normal</option>
											<option>Officer</option>
											<option>Owner</option>
											<option>1099</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="full-part-time" class="block text-sm font-medium text-gray-700">Full Time - Part Time</label>
										<select
											id="full-part-time"
											name="full-part-time"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option>Full Time</option>
											<option>Part Time</option>
											<option>Seasonal</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="ethnicity" class="block text-sm font-medium text-gray-700">Ethnicity</label>
										<select
											id="ethnicity"
											name="ethnicity"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option value="Unknown">Unknown</option>
											<option value="America Indian">America Indian</option>
											<option value="Asian">Asian</option>
											<option value="African American">African American</option>
											<option value="Hawaian">Hawaian</option>
											<option value="Hispanic">Hispanic</option>
											<option value="White">White</option>
											<option value="Multi-Race">Multi-Race</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="citizenship" class="block text-sm font-medium text-gray-700">Citizenship</label>
										<select
											id="citizenship"
											name="citizenship"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option value="Unknown">Unknown</option>
											<option value="US Citizen">US Citizen</option>
											<option value="Resident Alien">Resident Alien</option>
											<option value="Non Resident Alien">Non Resident Alien</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2">
										<label for="citizenship" class="block text-sm font-medium text-gray-700">Citizenship</label>
										<select
											id="citizenship"
											name="citizenship"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option value="Unknown">Unknown</option>
											<option value="US Citizen">US Citizen</option>
											<option value="Resident Alien">Resident Alien</option>
											<option value="Non Resident Alien">Non Resident Alien</option>
										</select>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 pt-5">
										<label for="emergency-contact" class="block text-sm font-medium text-gray-700">Emergency Contact</label>
										<input
											type="text"
											name="emergency-contact"
											id="emergency-contact"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6">
										<label for="other-info" class="block text-sm font-medium text-gray-700">and/or Other Info</label>
										<input
											type="text"
											name="other-info"
											id="other-info"
											autocomplete="family-name"
											class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		{/if}

		{#if tabSelected === 4}
			<div class="shadow overflow-hidden  rounded sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="">
						<div class="mt-5 md:mt-0">
							<div class="overflow-x-auto">
								<fieldset class="px-2">
									<legend class="sr-only">2020 W-4 Form</legend>
									<div class="divide-y divide-gray-200">
										<div class="relative flex items-start py-4">
											<div class="min-w-0 flex-1 text-sm">
												<label for="comments" class="font-medium text-gray-700">2020 W-4 Form</label>
												<p id="comments-description" class="text-gray-500">Employee has filed 2-2- W-4 Form as shown below:</p>
											</div>
											<div class="ml-3 flex xitems-center h-5">
												<input
													id="comments"
													aria-describedby="comments-description"
													name="comments"
													type="checkbox"
													class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
												/>
											</div>
										</div>
										<div>
											<div class="relative flex items-start py-4">
												<div class="min-w-0 flex-1 text-sm">
													<label for="candidates" class="font-medium text-gray-700">W-4 Step 2</label>
													<p id="candidates-description" class="text-gray-500">Employee has more than one job or spouse works</p>
												</div>
												<div class="ml-3 flex xitems-center h-5">
													<input
														id="candidates"
														aria-describedby="candidates-description"
														name="candidates"
														type="checkbox"
														class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>
												</div>
											</div>
										</div>
										<div>
											<div class="relative flex items-start py-4">
												<div class="min-w-0 flex-1 text-sm">
													<label for="offers" class="font-medium text-gray-700">W-4 Step 3</label>
													<p id="offers-description" class="text-gray-500">Dependents Annual Deduction Amount</p>
												</div>
												<div class="ml-3 flex xitems-center h-5">
													<div>
														<label for="w-4-step-3" class="sr-only">W-4 Step 3</label>
														<input
															type="text"
															name="w-4-step-3"
															id="w-4-step-3"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
															placeholder="0.00"
														/>
													</div>
												</div>
											</div>
										</div>

										<div>
											<div class="relative flex items-start py-4">
												<div class="min-w-0 flex-1 text-sm">
													<label for="offers" class="font-medium text-gray-700">W-4 Step 4a</label>
													<p id="offers-description" class="text-gray-500">Other Annual Income Taxable</p>
												</div>
												<div class="ml-3 flex xitems-center h-5">
													<div>
														<label for="w-4-step-4" class="sr-only">W-4 Step 4a</label>
														<input
															type="text"
															name="w-4-step-4"
															id="w-4-step-4"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
															placeholder="0.00"
														/>
													</div>
												</div>
											</div>
										</div>

										<div>
											<div class="relative flex items-start py-4">
												<div class="min-w-0 flex-1 text-sm">
													<label for="offers" class="font-medium text-gray-700">W-4 Step 4b</label>
													<p id="offers-description" class="text-gray-500">Annual Deductions Amount Other Than Standard</p>
												</div>
												<div class="ml-3 flex xitems-center h-5">
													<div>
														<label for="w-4-step-4b" class="sr-only">W-4 Step 4b</label>
														<input
															type="text"
															name="w-4-step-4b"
															id="w-4-step-4b"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
															placeholder="0.00"
														/>
													</div>
												</div>
											</div>
										</div>

										<div>
											<div class="relative flex items-start py-4">
												<div class="min-w-0 flex-1 text-sm">
													<label for="offers" class="font-medium text-gray-700">W-4 Step 4c</label>
													<p id="offers-description" class="text-gray-500">Extra Withholding Each Pay Period</p>
												</div>
												<div class="ml-3 flex xitems-center h-5">
													<div>
														<label for="w-4-step-4c" class="sr-only">W-4 Step 4c</label>
														<input
															type="text"
															name="w-4-step-4c"
															id="w-4-step-4c"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
															placeholder="0.00"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		{/if}

		{#if tabSelected === 5}
			<div class="shadow overflow-hidden  rounded sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="flex flex-col">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table class="min-w-full flex flex-row flex-no-wrap divide-y divide-gray-200">
										<thead class="bg-gray-50">
											{#each aDeposits as aDeposit}
												<tr class="flex flex-col text-center flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Bank Name</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Routing #</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Employee Acnt No</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">(C)hecking (S)avings</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">%</th>
													<th scope="col" class="whitespace-nowrap p-2 text-sm font-medium uppercase tracking-wider">Amount</th>
												</tr>
											{/each}
										</thead>
										<tbody class="flex-1 sm:flex-none">
											{#each aDeposits as aDeposit}
												<!-- Odd row -->
												<tr class="bg-white text-sm flex flex-col text-center flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.bankName} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.Routing} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.EmployeeAcntNo} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.CheckingSavings} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.Percent} />
													</td>
													<td class="border pb-0.5">
														<input class="w-full p-1.5" bind:value={aDeposit.Amount} />
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<LoadFailed />
{/if}
