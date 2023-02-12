<script>
	import { link, replace } from 'svelte-spa-router';
	let fakeData = [
		{ id: 1, name: 'Default' },
		{ id: 2, name: 'Day Shift' },
		{ id: 3, name: 'Evening Shift' },
		{ id: 4, name: 'Swing Shift' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Pay Policy</h2>
	</div>
	<div class="mt-2">
		<button
			type="button"
			class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
		>
			New Pay Policy
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
									<th class="uppercase p-1 h-8">ID</th>
									<th class="uppercase p-1 h-8">Pay Policy Name</th>
									<th class="uppercase p-1 h-8">Action</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
									<td class="border-b p-1 h-8">
										{fData.id}
									</td>
									<td class="border-b p-1 h-8">{fData.name}</td>
									<td class="border-b p-1 h-8">
										<span class="relative z-0 inline-flex rounded-md" on:click={() => replace('/settings/company/pay-policies/' + fData.name)}>
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
