<script>
	import ProSelect from '../../components/ProSelect.svelte';
	import Paginator from '../../components/Paginator.svelte';

	let years = [
		{ id: 1, caption: '2021' },
		{ id: 1, caption: '2022' },
		{ id: 1, caption: '2023' },
		{ id: 1, caption: '2024' },
		{ id: 1, caption: '2025' },
		{ id: 1, caption: '2026' }
	];
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
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List Employee Tips</h2>
	</div>
</div>

<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-6">
	<div class="col-span-4 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<ProSelect caption="Select Year" list={years} />
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
	<!-- <div class="col-span-3 sm:col-span-2 rounded-lg divide-y divide-gray-200 p-2">
		<div class="grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6 mt-6">
            <div class="col-span-3">
				<button type="button" class="block inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
                      </svg>
                    Print
                  </button>
			</div>
            <div class="col-span-3">
                <button class="inline-flex items-center h-10 px-6 text-white transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" />
                    </svg>
                    <span>Help</span>
                </button>
			</div>
		</div>
	</div> -->
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
