<script>
	import ProSelect from '../../components/ProSelect.svelte';
	import { link, replace } from 'svelte-spa-router';

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
    { id: 1, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' },
    { id: 2, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' },
    { id: 3, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' },
    { id: 4, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' },
    { id: 5, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' },
    { id: 6, name: 'Abraham, Lailton', email: 'jhonedoe@example.com', status: 'Not Submitted' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Timesheet Approval</h2>
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
		<div class="grid grid-cols-1 gap-2">
			<span class="block text-sm font-medium text-gray-700"> Settings </span>
			<div class="py-3 grid grid-cols-1 gap-2 sm:grid-cols-6">
                <div class="col-span-2 items-center">
                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Send Approval Request
                        </button>
                </div>
                <div class="col-span-2 items-center">
                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-800 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        Print All
                        </button>
                </div>
                <div class="col-span-2 items-center">
                    <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Employee Agreement
                        </button>
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
									<th class="uppercase">
                                        <div class="flex items-center h-5">
                                            <input id="check" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                    </th>
									<th class="uppercase">Employee</th>
									<th class="uppercase">Signature</th>
									<th class="uppercase">Status</th>
									<th class="uppercase">Actions</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<td class="border-b">
                                        <div class="h-5">
                                            <input id="check" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                    </td>
                                    <td class="border-b">
                                        <div class="lg:flex lg:item-center">
                                            <div class="flex-shrink-0 h-10 w-10 hidden lg:block">
                                              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                            </div>
                                            <div class="ml-4">
                                              <div class="text-sm font-medium text-gray-900">
                                                {fData.name}
                                              </div>
                                              <div class="text-sm text-gray-500 hidden lg:block">
                                                {fData.email}
                                              </div>
                                            </div>
                                          </div>
                                    </td>
									<td class="border-b">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-auto w-6 lg:w-8 lg:h-8 rounded mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </td>
									<td class="border-b">{fData.status}</td>
									<td class="border-b align-center">
										<button on:click={() => replace('/timesheets/timesheet-approval/send-request/' + fData.id)} type="button" class="inline-flex items-cente p-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-300 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        </button>
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
