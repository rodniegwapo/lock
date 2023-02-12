<script>
	import { link } from 'svelte-spa-router';

	let fakeData = [
		{ id: 1, description: 'Customer Support' },
		{ id: 2, description: 'IT Administration' },
		{ id: 3, description: 'Programming' },
		{ id: 4, description: 'Tech Support' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Jobs Definition</h2>
	</div>
	<div class="mt-2">
		<button
			type="button"
			class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
		>
			New Job
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
									<th class="uppercase p-1">ID</th>
									<th class="uppercase p-1">Job Description</th>
									<th class="uppercase p-1 h-8">Action</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
									<td class="border-b p-1">
										{fData.id}
									</td>
									<td class="border-b p-1">{fData.description}</td>
									<td class="border-b p-1 h-8">
										<span class="relative z-0 inline-flex shadow-sm rounded-md">
											<span class="px-2 text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
													/>
												</svg>
											</span>
											<span class="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</span>
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
