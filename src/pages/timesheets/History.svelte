<script>
	import Paginator from '../../components/Paginator.svelte';
	let fakeData = [
		{ data: '07/21/2021', department: 'Customer Support', time: '08:00 am', date: '07/21/2021', msg: 'Something Notes here' },
		{ data: '07/23/2021', department: 'Admin', time: '010:00 am', date: '07/28/2021', msg: 'Something Notes here' },
		{ data: '07/26/2021', department: 'Payroll', time: '01:00 am', date: '08/21/2021', msg: 'Something Notes here' },
		{ data: '08/21/2021', department: 'Customer Support', time: '09:00 am', date: '07/29/2021', msg: 'Something Notes here' },
		{ data: '07/28/2021', department: 'Ceo', time: '08:00 am', date: '07/29/2021', msg: 'Something Notes here' },
		{ data: '07/21/2021', department: 'Customer Support', time: '08:00 am', date: '07/21/2021', msg: 'Something Notes here' },
		{ data: '07/23/2021', department: 'Admin', time: '010:00 am', date: '07/28/2021', msg: 'Something Notes here' },
		{ data: '07/26/2021', department: 'Payroll', time: '01:00 am', date: '08/21/2021', msg: 'Something Notes here' },
		{ data: '08/21/2021', department: 'Customer Support', time: '09:00 am', date: '07/29/2021', msg: 'Something Notes here' },
		{ data: '07/28/2021', department: 'Ceo', time: '08:00 am', date: '07/29/2021', msg: 'Something Notes here' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Timesheet History</h2>
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
									<th class="uppercase">Date Exported</th>
									<th class="uppercase">User</th>
									<th class="uppercase">Time Exported</th>
									<th class="uppercase">Pay Date</th>
									<th class="uppercase">Remarks</th>
									<th class="uppercase p-1 mt-1"> Actions </th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<td class="border-b">{fData.data}</td>
									<td class="border-b">{fData.department}</td>
									<td class="border-b">{fData.time}</td>
									<td class="border-b">{fData.date}</td>
									<td class="border-b">{fData.msg}</td>
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

<Paginator />
