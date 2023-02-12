<script>
	import ProSelect from '../../components/ProSelect.svelte';

	import { link, replace } from 'svelte-spa-router';

	export let employees;
	export let departments;

	function getPeriodDescription(cShort) {
		let cDescription;
		if (cShort === 'W') {
			cDescription = 'Weekly';
		} else if (cShort === 'B') {
			cDescription = 'Bi-Weekly';
		} else if (cShort === 'S') {
			cDescription = 'Semi-Monthly';
		} else if (cShort === 'M') {
			cDescription = 'Monthly';
		} else if (cShort === 'I') {
			cDescription = 'Inactive';
		} else if (cShort === 'T') {
			cDescription = 'Terminated';
		}
		return cDescription;
	}

	function getEmployeeDepartment(cDeptId) {
		const item = departments.find((i) => i.id === cDeptId);
		if (item) {
			return item.description;
		}
		return 'Unknow';
	}

	let paylist = [];
	let deptList = [];

	function updatePaylist(list) {
		paylist = [
			{
				id: -1,
				caption: 'All Pay Periods ( Active Uses )'
			},
			{
				id: -2,
				caption: 'All Pay Periods'
			}
		];
		list.forEach((item) => {
			if (!paylist.some((item_exist) => item_exist.caption === getPeriodDescription(item.period))) {
				paylist = [
					...paylist,
					{
						id: item.__recno,
						caption: getPeriodDescription(item.period)
					}
				];
			}
		});
		console.log(paylist);
	}

	function updateDeptList(list) {
		deptList = [
			{
				id: -1,
				caption: 'All Departments'
			}
		];
		list.forEach((item) => {
			deptList = [
				...deptList,
				{
					id: item.id,
					caption: item.description
				}
			];
		});
		console.log(deptList);
	}

	let search = '';
	let display = 'list';
	let showList = [];

	$: if (search.length > 0) {
		showList = employees.filter((item) => {
			return item.name.toUpperCase().indexOf(search.toUpperCase()) !== -1 || item.emp_no === search;
		});
	} else {
		showList = employees;
	}

	$: if (employees) {
		updatePaylist(employees);
	}
	$: if (departments) {
		updateDeptList(departments);
	}
</script>

<div class="relative pb-5 border-b border-gray-200">
	<div class="mt-2">
		<div class="flex">
			<div class="flex-1">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Employees</h3>
			</div>
			<div class="flex-none">
				<div class="col-span-1 rounded-lg p-2">
					<div class="flex items-center ">
						<div class="flex ml-6 bg-gray-100 p-0.5 rounded-lg items-center">
							<button
								on:click={() => (display = 'list')}
								type="button"
								class="{display === 'list'
									? ' bg-white p-1.5 rounded-md shadow-sm text-gray-400'
									: 'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ml-1"
							>
								<svg class="h-5 w-5" x-description="Heroicon name: solid/view-list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Use list view</span>
							</button>
							<button
								on:click={() => (display = 'grid')}
								type="button"
								class="{display === 'grid'
									? ' bg-white p-1.5 rounded-md shadow-sm text-gray-400'
									: 'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ml-1"
							>
								<svg class="h-5 w-5" x-description="Heroicon name: solid/view-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									/>
								</svg>
								<span class="sr-only">Use grid view</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-between flex-wrap sm:flex-nowrap">
		<div class="mt-2">
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
			>
				New Employee
			</button>
		</div>
		<div class="hidden md:block">
			Showing 1 to {employees.length} entries
		</div>
		<div class="ml-4 mt-2 flex-shrink-0">
			<div class="flex">
				<label for="search-candidate" class="sr-only">Search</label>
				<div class="flex rounded-md shadow-sm">
					<div class="relative flex-grow focus-within:z-10">
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
							</svg>
						</div>
						<form autocomplete="false">
							<input
								type="text"
								bind:value={search}
								autocomplete="false"
								class="focus:ring-gray-500 focus:border-gray-500 block w-full rounded-md pl-10 sm:hidden border-gray-300"
								placeholder="Search"
							/>
							<input
								type="text"
								bind:value={search}
								autocomplete="false"
								class="hidden focus:ring-gray-500 focus:border-gray-500 w-full rounded-md pl-10 sm:block sm:text-sm border-gray-300"
								placeholder="Search Employee"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-2">
		<div class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
			<ProSelect caption="Pay Period" list={paylist} />
		</div>
		<div class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
			<ProSelect caption="Department" list={deptList} />
		</div>
	</div>
</div>

{#if display === 'grid'}
	<ul class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-2">
		{#each showList as employee}
			<a href="/employees/{employee.emp_no}" use:link>
				<li class="relative col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 hover:bg-gray-100 group hover:ring-2 hover:ring-offset-2 hover:ring-gray-500">
					<div class="w-full flex items-center justify-between p-4 space-x-4">
						<div class="flex-shrink-0">
							<img
								class="hidden h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
								alt=""
							/>
							<span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
								<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</span>
						</div>
						<div class="flex-1 min-w-0">
							<span class="absolute inset-0" aria-hidden="true" />
							<p class="text-sm font-medium text-gray-900">
								{employee.name}
							</p>
							<p class="text-sm text-gray-500 truncate">
								{getEmployeeDepartment(employee.dept)}
							</p>
							<p class="text-sm text-gray-500 truncate">
								EmpNo: {employee.emp_no}
							</p>
						</div>
					</div>
					<div class="p-4">
						<p class="mt-1 text-gray-500 text-sm truncate">E-mail: {employee.email}</p>
						<p class="mt-1 text-gray-500 text-sm truncate">Phone: {employee.phone}</p>
						<p class="mt-1 text-gray-500 text-sm truncate">Pay Period: {getPeriodDescription(employee.period)}</p>
					</div>
				</li>
			</a>
		{/each}
	</ul>
{:else}
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
					<table class="w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Name </th>
								<th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Department </th>
								<th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Pay Period </th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							{#each showList as employee}
								<tr on:click={() => replace('/employees/' + employee.emp_no)} class="cursor-pointer hover:bg-gray-100 group">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="hidden h-10 w-10 rounded-full"
													src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
													alt=""
												/>
												<span class="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
													<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
														<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
													</svg>
												</span>
											</div>
											<div class="ml-4">
												<div class="text-sm font-medium text-gray-900">
													{employee.name}
												</div>
												<div class="text-sm text-gray-500">
													{employee.email}
												</div>
											</div>
										</div>
									</td>
									<td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900" />
										<div class="text-sm text-gray-500">{getEmployeeDepartment(employee.dept)}</div>
									</td>
									<td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
										<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											{getPeriodDescription(employee.period)}
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
{/if}
