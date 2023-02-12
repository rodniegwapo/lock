<script>
	import { link } from 'svelte-spa-router';

	let fakeData = [
		{ id: 1, dep_number: 200, name: 'Bus Boys', wc: 200, description: 'BUS BOYS', rate: 4.5 },
		{ id: 1, dep_number: 300, name: 'Cooks', wc: 300, description: 'Cooks', rate: 7.5 },
		{ id: 1, dep_number: 400, name: 'Kitchen', wc: 400, description: 'Kitchen', rate: 5.5 },
		{ id: 1, dep_number: 500, name: 'Mgmt', wc: 500, description: 'Mgmt', rate: 1.5 },
		{ id: 1, dep_number: 100, name: 'Servers', wc: 100, description: 'Servers', rate: 6.5 },
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Departments Defined</h2>
	</div>
	<div class="mt-2">
		<button
			type="button"
			class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
		>
			New Department
		</button>
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
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
									<th class="uppercase p-1 h-8">Dept #</th>
									<th class="uppercase p-1 h-8">Dept Name</th>
									<th class="uppercase p-1 h-8">W/C #</th>
									<th class="uppercase p-1 h-8">W/C Description</th>
									<th class="uppercase p-1 h-8">W/C Rate</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
									<td class="border-b p-1 h-8">
										{fData.dep_number}
									</td>
									<td class="border-b p-1 h-8">{fData.name}</td>
									<td class="border-b p-1 h-8">{fData.wc}</td>
									<td class="border-b p-1 h-8">{fData.description}</td>
									<td class="border-b p-1 h-8">{fData.rate}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
	<div class="-mt-px w-0 flex-1 flex">
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
		>
			<!-- Heroicon name: solid/arrow-narrow-left -->
			<svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			Previous
		</a>
	</div>
	<div class="hidden md:-mt-px md:flex">
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
		>
			1
		</a>
		<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
		<a href="/timesheets/timesheet-history" use:link class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page"> 2 </a>
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
		>
			3
		</a>
		<span class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> ... </span>
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
		>
			8
		</a>
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
		>
			9
		</a>
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
		>
			10
		</a>
	</div>
	<div class="-mt-px w-0 flex-1 flex justify-end">
		<a
			href="/timesheets/timesheet-history"
			use:link
			class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
		>
			Next
			<!-- Heroicon name: solid/arrow-narrow-right -->
			<svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</nav>
