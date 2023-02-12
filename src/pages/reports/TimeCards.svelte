<script>
	import ProSelect from '../../components/ProSelect.svelte';
	import Paginator from '../../components/Paginator.svelte';

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
		{ id: 1, day: 'Jhon Doe', date_start: '06/07/21', date_end: '06/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Day', dropdown: false },
		{ id: 2, day: 'Peter Simon', date_start: '07/07/21', date_end: '07/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Lunch', dropdown: false },
		{ id: 3, day: 'Kate Williams', date_start: '08/07/21', date_end: '08/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Lunch', dropdown: false },
		{ id: 4, day: 'Will Smith', date_start: '09/07/21', date_end: '09/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Day', dropdown: false },
		{ id: 1, day: 'Jhon Doe', date_start: '06/07/21', date_end: '06/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Day', dropdown: false },
		{ id: 2, day: 'Peter Simon', date_start: '07/07/21', date_end: '07/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Lunch', dropdown: false },
		{ id: 3, day: 'Kate Williams', date_start: '08/07/21', date_end: '08/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Lunch', dropdown: false },
		{ id: 4, day: 'Will Smith', date_start: '09/07/21', date_end: '09/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Day', dropdown: false },
		{ id: 1, day: 'Jhon Doe', date_start: '06/07/21', date_end: '06/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Day', dropdown: false },
		{ id: 2, day: 'Peter Simon', date_start: '07/07/21', date_end: '07/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'Start Lunch', dropdown: false },
		{ id: 3, day: 'Kate Williams', date_start: '08/07/21', date_end: '08/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Lunch', dropdown: false },
		{ id: 4, day: 'Will Smith', date_start: '09/07/21', date_end: '09/07/21', department: 'Customer', job: 'Customer', payrate: 'Regular Pay', status: 'End Day', dropdown: false }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Time Cards</h2>
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
			<div class="py-3 grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="col-span-3">
					<div>
						<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
						<label for="start" class="block text-sm font-medium text-gray-700">Start</label>
						<input
							type="date"
							name="start"
							id="start"
							class="focus:ring-indigo-500
                                focus:border-indigo-500
                                block w-full pl-10 sm:text-sm
                                border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div class="col-span-3">
					<div>
						<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
						<label for="end" class="block text-sm font-medium text-gray-700">End</label>
						<input
							type="date"
							name="end"
							id="end"
							class="focus:ring-indigo-500
                                focus:border-indigo-500
                                block w-full pl-10 sm:text-sm
                                border-gray-300 rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-5">
	<div>
		<div class="pt-2">
			<div class="">
				<div class="overflow-x-auto">
					<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
						<thead>
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<th class="uppercase">Name</th>
									<th class="uppercase">Start Date</th>
									<th class="uppercase">End Date</th>
									<th class="uppercase">Department</th>
									<th class="uppercase">Job</th>
									<th class="uppercase">Pay Rate</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<td class="border-b">{fData.day}</td>
									<td class="border-b">{fData.date_start}</td>
									<td class="border-b">{fData.date_end}</td>
									<td class="border-b">{fData.department}</td>
									<td class="border-b">{fData.job}</td>
									<td class="border-b">{fData.payrate}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<Paginator />
