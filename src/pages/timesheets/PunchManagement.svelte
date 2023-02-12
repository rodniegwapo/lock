<script>
	import ProSelect from '../../components/ProSelect.svelte';

	let employees = [{ id: -1, caption: 'All Employees' }];
	let departments = [{ id: -1, caption: 'All Departments' }];
	let payperiod = [
		{ id: 1, caption: 'Weekly' },
		{ id: 2, caption: 'Bi-Weekly' },
		{ id: 3, caption: 'Semi-Monthly' },
		{ id: 4, caption: 'Monthly' }
	];
	let paydates = [{ id: -1, caption: '01/01/21' }];
	let fakeData = [
		{ id: 1, day: 'Monday', date: '07/07/21', time: '08:00 am', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Day', dropdown: false },
		{ id: 2, day: 'Monday', date: '07/07/21', time: '10:00 am', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Lunch', dropdown: false },
		{ id: 3, day: 'Monday', date: '07/07/21', time: '01:00 pm', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Lunch', dropdown: false },
		{ id: 4, day: 'Monday', date: '07/07/21', time: '06:00 pm', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Day', dropdown: false }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Punch Management</h2>
	</div>
</div>

<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-6">
	<div class="col-span-6 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<ProSelect caption="Employees" list={employees} />
	</div>
	<div class="col-span-6 sm:col-span-4 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<div class="grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6">
			<div class="col-span-3">
				<ProSelect caption="Pay Period" list={payperiod} />
			</div>
			<div class="col-span-3">
				<ProSelect caption="Pay Date" list={paydates} />
			</div>
		</div>
	</div>
	<div class="col-span-6 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<ProSelect caption="Department" list={departments} />
	</div>
	<div class="col-span-6 sm:col-span-4 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<div>
			<span class="block text-sm font-medium text-gray-700"> Settings </span>
			<div class="py-3 grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="col-span-3">
					<div class="flex items-center">
						<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
						<button
							type="button"
							class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							role="switch"
							aria-checked="false"
							aria-labelledby="annual-billing-label"
						>
							<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
							<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
						</button>
						<span class="ml-3" id="annual-billing-label">
							<span class="text-sm font-medium text-gray-900">Show Only </span>
							<span class="text-sm text-gray-500">Miss Punches</span>
						</span>
					</div>
				</div>
				<div class="col-span-3">
					<div class="flex items-center">
						<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
						<button
							type="button"
							class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							role="switch"
							aria-checked="false"
							aria-labelledby="annual-billing-label"
						>
							<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
							<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
						</button>
						<span class="ml-3" id="annual-billing-label">
							<span class="text-sm font-medium text-gray-900">Collapse All </span>
							<span class="text-sm text-gray-500">Complete Sequence</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-5">
	<div>
		<div class="rounded box bg-white shadow px-5 py-3 flex items-center">
			<div class="w-12 h-12 flex-none image-fit rounded-full overflow-hidden zoom-in">
				<span class="mt-1 inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
					<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</span>
			</div>
			<div class="ml-4 mr-auto">
				<div class="font-large">UserName</div>
				<div class="text-gray-600 text-xs mt-0.5">Department: Payroll Processing</div>
			</div>
			<div class="font-light text-xs text-white mr-1">
				Pay Date: <p class="p-0 lg:p-1 text-black cursor-pointer font-small">July 31, 2021</p>
			</div>
			<div class="font-light text-xs text-white">
				Pay Period: <p class="p-0 lg:p-1 text-black cursor-pointer font-small">July 30, 2021</p>
			</div>
		</div>

		<div class="pt-2">
			<div class="">
				<div class="overflow-x-auto">
					<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
						<thead>
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<th class="uppercase">Day</th>
									<th class="uppercase">Date</th>
									<th class="uppercase">Time</th>
									<th class="uppercase">Department</th>
									<th class="uppercase">Job</th>
									<th class="uppercase">Pay Rate</th>
									<th class="uppercase">Status</th>
									<th class="uppercase p-1 mt-1"> Actions </th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<td class="border-b">{fData.day}</td>
									<td class="border-b">{fData.date}</td>
									<td class="border-b">{fData.time}</td>
									<td class="border-b">{fData.department}</td>
									<td class="border-b">{fData.job}</td>
									<td class="border-b">{fData.payrate}</td>
									<td class="border-b">{fData.status}</td>
									<td class="border-b align-center">
										<span class="relative z-0 inline-flex shadow-sm rounded-md">
											<button
												type="button"
												class="relative inline-flex items-center p-2 my-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
											>
												Add Punches
											</button>
										</span>
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
