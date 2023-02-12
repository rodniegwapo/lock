<script>
	let aComp = {
		caption: '',
		data: [
			{ caption: 'Include Tips', checked: false },
			{ caption: 'Provide Taxable Meals', checked: false },
			{ caption: 'Use Departments', checked: false },
			{ caption: 'Print Job Cost Report', checked: true },
			{ caption: 'Employee Direct Deposits', checked: false },
			{ caption: 'Use Shifts', checked: false },
			{ caption: 'Calculate WC Insurance', checked: false }
		]
	};

    import { link } from 'svelte-spa-router';

	let fakeData = [
		{ id: 1, holiday: 'New Years Day', holiday_date: '01/01/2021', observed_date: '' },
		{ id: 2, holiday: 'Martin Luther King, Jr. Day', holiday_date: '01/20/2021', observed_date: '' },
		{ id: 3, holiday: "George Washington's Birthday", holiday_date: '02/17/2021', observed_date: '' },
		{ id: 4, holiday: 'Memorial Day', holiday_date: '05/25/2021', observed_date: '' },
		{ id: 5, holiday: 'Independence Day', holiday_date: '07/04/2021', observed_date: '07/03/2021' },
		{ id: 6, holiday: 'Labor Day', holiday_date: '09/07/2021', observed_date: '' },
		{ id: 7, holiday: 'Columbus Day', holiday_date: '10/12/2021', observed_date: '' },
		{ id: 8, holiday: 'Veterans Day', holiday_date: '11/11/2021', observed_date: '' },
		{ id: 9, holiday: 'Thanks Giving Day', holiday_date: '11/16/2021', observed_date: '' },
		{ id: 10, holiday: 'Christmas Day', holiday_date: '12/25/2021', observed_date: '' }
	];

    let fakeDataPackageDefine = [
        { id: 1, name: 'Default Holiday Package' }
    ];

    let fakeDataPackageConstruct = [
        { id: 1, holiday: 'New Years Day', holiday_date: '01/01/2021' },
		{ id: 2, holiday: 'Martin Luther King, Jr. Day', holiday_date: '01/20/2021' },
		{ id: 3, holiday: "George Washington's Birthday", holiday_date: '02/17/2021' },
		{ id: 4, holiday: 'Memorial Day', holiday_date: '05/25/2021' },
		{ id: 5, holiday: 'Independence Day', holiday_date: '07/04/2021' },
		{ id: 6, holiday: 'Labor Day', holiday_date: '09/07/2021' },
		{ id: 7, holiday: 'Columbus Day', holiday_date: '10/12/2021' },
		{ id: 8, holiday: 'Veterans Day', holiday_date: '11/11/2021' },
		{ id: 9, holiday: 'Thanks Giving Day', holiday_date: '11/16/2021' },
		{ id: 10, holiday: 'Christmas Day', holiday_date: '12/25/2021' }
    ];

	let fakeDataDeductions = [
		{ data: 'I', department: 'ADVANCE' },
		{ data: 'D', department: 'DED2' },
		{ data: 'D', department: 'DED3' },
		{ data: 'D', department: 'DED4' },
		{ data: 'D', department: 'DED5' },
		{ data: 'I', department: 'DED6' },
		{ data: 'D', department: 'DED7' },
		{ data: 'D', department: 'DED8' },
		{ data: 'I', department: 'DED9' },
		{ data: 'D', department: 'DED10' },
		{ data: 'D', department: 'MISC11' },
		{ data: 'D', department: 'MISC12' },
		{ data: 'D', department: 'MISC13' },
		{ data: 'D', department: 'MISC14' },
		{ data: 'D', department: 'MISC15' },
		{ data: 'D', department: 'MISC16' },
		{ data: 'D', department: 'MISC17' },
		{ data: 'D', department: 'MISC18' }
	];

	let fakeDataPayRates = [
		{ data: '(1)', department: 'Customer Support' },
		{ data: '(2)', department: 'Admin' },
		{ data: '(3)', department: 'Developer' },
		{ data: '(4)', department: 'Ceo' },
		{ data: '(5)', department: 'Other Pay' },
		{ data: '(6)', department: 'Another Pay' }
	];

	const tabs = [
		{ id: 1, caption: 'Holidays' },
		{ id: 2, caption: 'Define Holiday Packages' },
		{ id: 3, caption: 'Construct Holiday Packages' }
	];
	let tabSelected = 1;
</script>

<div>
	<div class="flex flex-col">
		<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="align-middle inline-block w-full sm:px-6 lg:px-8">
				<div class="overflow-hidden rounded-lg">
					<div class="bg-white px-3 pt-5 sm:px-6">
						<div class="md:flex md:items-center md:justify-between md:space-x-5">
							<div class="flex items-start space-x-5">
								<div class="flex-shrink-0">
									<div class="relative">
										<img
											class="hidden h-16 w-16 rounded-full"
											src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
											alt=""
										/>
										<span class="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
										</span>
										<span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
									</div>
								</div>
								<div class="pt-1.5">
									<h1 class="text-2xl font-bold text-gray-900">Holidays</h1>
								</div>
							</div>
						</div>

						<div class="py-5 sm:pb-0">
							<div>
								<div class="sm:hidden">
									<label for="tabs" class="sr-only">Select a tab</label>
									<select id="tabs" name="tabs" bind:value={tabSelected} class="block w-full focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md">
										{#each tabs as tab_item}
											<option value={tab_item.id}>{tab_item.caption}</option>
										{/each}
									</select>
								</div>
								<div class="hidden sm:block">
									<div class="border-b border-gray-200">
										<nav class="-mb-px flex" aria-label="Tabs">
											{#each tabs as tab_item}
												<span
													on:click={() => (tabSelected = tab_item.id)}
													class="{tabSelected === tab_item.id
														? 'border-red-500 text-red-600'
														: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer"
												>
													{tab_item.caption}
												</span>
											{/each}
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if tabSelected === 1}
	<div class="my-5">
		<div class="md:flex md:items-center md:justify-between">
            <div class="mt-2">
                <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    New Holiday
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
                                            <th class="uppercase p-1">Holiday Name</th>
                                            <th class="uppercase p-1">Holiday Date</th>
                                            <th class="uppercase p-1">Observed Date</th>
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
                                            <td class="border-b p-1 h-8">{fData.holiday}</td>
                                            <td class="border-b p-1 h-8">{fData.holiday_date}</td>
                                            <td class="border-b p-1 h-8">{fData.observed_date}</td>
                                            <td class="border-b p-1 h-8">
                                                <span class="relative z-0 inline-flex rounded-md">
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
	</div>
{:else if tabSelected === 2}
<div class="my-5">
    <div class="md:flex md:items-center md:justify-between">
        <div class="mt-2">
            <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Define Package Holiday
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
                                {#each fakeDataPackageDefine as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
                                        <th class="uppercase p-1">ID</th>
                                        <th class="uppercase p-1">Holiday Package Name</th>
                                        <th class="uppercase p-1 h-8">Action</th>
                                    </tr>
                                {/each}
                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                                {#each fakeDataPackageDefine as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
                                        <td class="border-b p-1 h-8">
                                            {fData.id}
                                        </td>
                                        <td class="border-b p-1 h-8">{fData.name}</td>
                                        <td class="border-b p-1 h-8">
                                            <span class="relative z-0 inline-flex rounded-md">
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
</div>
{:else if tabSelected === 3}
<div class="my-5">
    <div class="md:flex md:items-center md:justify-between">
        <div class="mt-2">
            <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                New Construct Holiday
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
                                {#each fakeDataPackageConstruct as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
                                        <th class="uppercase p-1">ID</th>
                                        <th class="uppercase p-1">Holiday Name</th>
                                        <th class="uppercase p-1">Holiday Date</th>
                                        <th class="uppercase p-1 h-8">Action</th>
                                    </tr>
                                {/each}
                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                                {#each fakeDataPackageConstruct as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2">
                                        <td class="border-b p-1 h-8">
                                            {fData.id}
                                        </td>
                                        <td class="border-b p-1 h-8">{fData.holiday}</td>
                                        <td class="border-b p-1 h-8">{fData.holiday_date}</td>
                                        <td class="border-b p-1 h-8">
                                            <span class="relative z-0 inline-flex rounded-md">
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
</div>
{/if}
