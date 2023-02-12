<script>
  const tabs = [
		{ id: 1, caption: 'Billing Info' },
		{ id: 2, caption: 'Subscription' }
	];
	let tabSelected = 1;
    let fakeData = [
		{ id: 1, base: 'Base Price', medium: '$19.95 /mo', large: '$99.95 /mo' },
		{ id: 1, base: 'Price per Employee', medium: '$3 /mo', large: '$3 /mo' },
		{ id: 1, base: 'Trial Period', medium: '30 Days', large: '30 Days' }
	];
  let billngData = [];
</script>
<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Billing Setup</h2>
	</div>
</div>
<div class="pb-4">
    <div class="px-4 sm:px-6 md:px-0">
      <div class="py-6">
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
        {#if tabSelected === 1}
            <form class="space-y-8 divide-y divide-gray-200">
                <div class="pt-8">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Billing Contact
                    </h3>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-2">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">
                        First name
                    </label>
                    <div class="mt-1">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    </div>
            
                    <div class="sm:col-span-2">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">
                        Last name
                    </label>
                    <div class="mt-1">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    </div>
            
                    <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div class="mt-1">
                        <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    </div>
            
                
                    <div class="sm:col-span-3">
                    <label for="company-name" class="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <div class="mt-1">
                        <input type="text" name="company-name" id="company-name" autocomplete="company-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="company-name" class="block text-sm font-medium text-gray-700">
                          Phone
                      </label>
                      <div class="mt-1">
                          <input type="text" name="company-name" id="company-name" autocomplete="company-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      </div>
                      </div>
            
                </div>
                </div>
                <div class="mt-4 divide-y divide-gray-200">
                    <div class="pt-8">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Billing Address
                        </h3>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <div class="mt-1">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-3">
                        <label for="city" class="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <div class="mt-1">
                            <input type="text" name="city" id="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Address 2
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                        <div class="sm:col-span-2">
                        <label for="street-address" class="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <div class="mt-1">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-2">
                        <label for="zip" class="block text-sm font-medium text-gray-700">
                            ZIP / Postal
                        </label>
                        <div class="mt-1">
                            <input type="text" name="zip" id="zip" autocomplete="postal-code" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="mt-4 divide-y divide-gray-200">
                    <div class="pt-8">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Shipping Address
                        </h3>
                        <div class="relative flex items-end float-right -mt-5">
                            <div class="flex items-start h-5">
                            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="comments" class="font-medium text-gray-700">Same as Billing info</label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <div class="mt-1">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-3">
                        <label for="city" class="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <div class="mt-1">
                            <input type="text" name="city" id="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Address 2
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                        <div class="sm:col-span-2">
                        <label for="street-address" class="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <div class="mt-1">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                
                        <div class="sm:col-span-2">
                        <label for="zip" class="block text-sm font-medium text-gray-700">
                            ZIP / Postal
                        </label>
                        <div class="mt-1">
                            <input type="text" name="zip" id="zip" autocomplete="postal-code" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="pt-5">
                    <div class="flex justify-end">
                    <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                    </button>
                    <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                    </div>
                </div>
            </form>
        {:else}

        <form class="space-y-8 divide-y divide-gray-200">
            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Pricing
                </h3>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <div class="overflow-x-auto">
                        <table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
                            <thead>
                                {#each fakeData as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
                                        <th class="uppercase">Base Plan</th>
                                        <th class="uppercase">1-99 Employees</th>
                                        <th class="uppercase">100 Employees</th>
                                    </tr>
                                {/each}
                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                                {#each fakeData as fData}
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
                                        <td class="border-b">{fData.base}</td>
                                        <td class="border-b">{fData.medium}</td>
                                        <td class="border-b">{fData.large}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
        
                <div class="sm:col-span-3">
                  <div class="mt-1">
                    <input type="text" name="name" id="name" placeholder="Name of Card" autocomplete="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                  
                <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="mt-1 col-span-4">
                        <input type="text" name="card" id="card" placeholder="Card Number" autocomplete="card" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="mt-1">
                        <input type="text" name="card" id="card" placeholder="MM/YY" autocomplete="card" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="mt-1">
                        <input type="text" name="card" id="card" placeholder="CVC" autocomplete="card" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                </div>
                <div class="mt-2">
                    <div class="border-gray-200">
                        <a href="#" class="block w-full bg-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Subscribe</a>
                      </div>
                </div>
                </div>
              
        
              </div>

            </div>
            <div class="mt-4 divide-y divide-gray-200">
                <div class="pt-8">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Billing Cycle
                    </h3>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <div class="overflow-x-auto">
                            <table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
                                <thead>
                                    <tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
                                        <th class="uppercase">Trial Start Date</th>
                                        <th class="uppercase">Billing Start Date</th>
                                        <th class="uppercase">Next Payment</th>
                                    </tr>
                                </thead>
                                <tbody class="flex-1 sm:flex-none">
                                    <!--no data -->
                                </tbody>
                            </table>
                        </div>
                    </div>
            
                    <div class="sm:col-span-3">
                        <ul role="list" class="space-y-4">
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <!-- Heroicon name: outline/check -->
                                <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p class="text-base text-gray-700">
                                Pro Clock is billed as a monthly subscription
                              </p>
                            </li>
                            <li class="flex items-start">
                                <div class="flex-shrink-0">
                                  <!-- Heroicon name: outline/check -->
                                  <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <p class="text-base text-gray-700">
                                  Invoices are created at the end of each billing cycle after determining how many employees were "active" during the current billing cycle.
                                </p>
                              </li>
                              <li class="flex items-start">
                                <div class="flex-shrink-0">
                                  <!-- Heroicon name: outline/check -->
                                  <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <p class="text-base text-gray-700">
                                  An active Employee is anyone in is assigned a Pay Rate of: Weekly, Bi-Weekly, Semi-Monthly or Monthly.
                                </p>
                              </li>
                              <li class="flex items-start">
                                <div class="flex-shrink-0">
                                  <!-- Heroicon name: outline/check -->
                                  <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <p class="text-base text-gray-700">
                                  A non-Active Employee is anyone that is assigned a Pay Rate of: Terminated or Inactive.
                                </p>
                              </li>
                              <li class="flex items-start">
                                <div class="flex-shrink-0">
                                  <!-- Heroicon name: outline/check -->
                                  <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <p class="text-base text-gray-700">
                                  To avoid fees for seasonal employees, assigned their Pay Rate as "Inactive" in theird Profile.
                                </p>
                              </li>
                          
                          </ul>
                    </div>
                
                  </div>
                </div>
            </div>
        </form>

        {/if}
      </div>
    </div>
  </div>