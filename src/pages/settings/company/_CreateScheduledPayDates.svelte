<script>
	import ProSelect from '../../../components/ProSelect.svelte';

	let payperiod = [
		{ id: 1, caption: 'Weekly' },
		{ id: 2, caption: 'Bi-Weekly' },
		{ id: 3, caption: 'Semi-Monthly' },
		{ id: 4, caption: 'Monthly' }
	];
	let paydates = [
		{ id: 1, caption: '2021' },
		{ id: 1, caption: '2022' },
		{ id: 1, caption: '2023' },
		{ id: 1, caption: '2024' },
		{ id: 1, caption: '2025' },
		{ id: 1, caption: '2026' }
	];

	let fakeData = [
		{ id: 1, period: 'W', period_begin: '01/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '02/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '03/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '04/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '05/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '06/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '07/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '08/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '09/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '10/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '11/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '12/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '01/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '02/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '03/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '04/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '05/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '06/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '07/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '08/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '09/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '10/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '11/04/21', period_ends: '01/25/21', pay_date: '01/25/21' },
		{ id: 1, period: 'W', period_begin: '12/04/21', period_ends: '01/25/21', pay_date: '01/25/21' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Schedule Pay Dates</h2>
	</div>
</div>

<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-6">
	<div class="col-span-6 sm:col-span-4 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<div class="grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6">
			<div class="col-span-3">
				<ProSelect caption="Year" list={paydates} />
			</div>
			<div class="col-span-3">
				<ProSelect caption="Pay Period" list={payperiod} />
			</div>
		</div>
	</div>
</div>

<div class="mt-5">
	<p class="p-2 text-sm text-red-600 italic">Payroll Dates for selected period above</p>
	<div class="pt-2">
		<div class="">
			<div class="overflow-x-auto">
				<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
					<thead>
						{#each fakeData as fData}
							<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
								<th class="uppercase">Period</th>
								<th class="uppercase">Period Begins</th>
								<th class="uppercase">Period Ends</th>
								<th class="uppercase">Pay Date</th>
							</tr>
						{/each}
					</thead>
					<tbody class="flex-1 sm:flex-none">
						{#each fakeData as fData}
							<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
								<td class="border-b">
									<div class="bg-indigo-200 hover:bg-purple-700">{fData.period}</div>
								</td>
								<td class="border-b">{fData.period_begin}</td>
								<td class="border-b">{fData.period_ends}</td>
								<td class="border-b">{fData.pay_date}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
