<script>
  const tabs = [
    { id: 1, name: 'Overtime Type', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 2, name: 'Minimum Time', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'},
    { id: 3, name: 'Consecutive Day Rules', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'},
    { id: 4, name: 'Saturday OT/DT', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { id: 5, name: 'Lunches & Breaks', icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'},
    { id: 6, name: 'Work Week', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 7, name: 'Weekend Premiums', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 8, name: 'Lunches & Breaks Deductions', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 9, name: 'Exports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];
  let tabSelected = 1
</script>
<div class="md:flex md:items-center my-4 md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Default</h2>
	</div>
</div>
<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
				{#each tabs as item}
          <nav class="space-y-1">
            <!-- Current: "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" -->
            <button on:click={() => (tabSelected = item.id)} 
            class="{tabSelected === item.id
            ? 'border-red-500 text-red-600'
            : '' }
             hover:text-gray-700 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" class="{tabSelected === item.id ? 'text-red-600' : 'text-gray-400'} group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{item.icon}" />
            </svg>
            <span class="truncate">
              {item.name}
            </span>
          </button>
          </nav>
        {/each}
    </aside>
  
    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          {#if tabSelected === 1}
            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
              <!-- Start on the fields  -->
                <div class="flex items-center">
                  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                  <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="annual-billing-label">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                  <span class="ml-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900">Daily</span>
                  </span>
                </div>

                <div class="flex items-center">
                  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                  <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="annual-billing-label">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                  <span class="ml-3" id="annual-billing-label">
                    <span class="text-sm font-medium text-gray-900">Weekly</span>
                  </span>
                </div>

                <div class="grid grid-cols-3 gap-4">
                  <div class="p-2">
                    <div class="font-medium">Pay Time & One Half</div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium text-gray-700">
                          Daily: After
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            Hours
                          </span>
                          <input type="text" value="8" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium text-gray-700">
                          Weekly: After
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            Hours
                          </span>
                          <input type="text" value="40" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-2">
                    <div class="font-medium">Pay Double Time</div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium text-gray-700">
                          After
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            Hours
                          </span>
                          <input type="text" value="12" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium text-gray-700">
                          After
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            Hours
                          </span>
                          <input type="text" value="80" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <!-- End of Fields  -->
            </div>
          {/if}
          {#if tabSelected === 2}
            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
              <!-- Start on the fields  -->
              <div class="grid grid-cols-3 gap-4">
                <div class="p-2">
                  <div class="font-medium">Minimum Time</div>
                  <div class="mt-6 grid grid-cols-1 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                      <label for="username" class="block text-sm font-medium text-gray-700">
                        Pay
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                          Hours
                        </span>
                        <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                      </div>
                    </div>
                    <div class="sm:col-span-4">
                      <label for="username" class="block text-sm font-medium text-gray-700">
                        For
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                          Hours
                        </span>
                        <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 font-small">(Minimum Work Time)</div>
                </div>
              </div>
              <!-- End of Fields  -->
            </div>
          {/if}
          {#if tabSelected === 3}
            <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
              <div class="font-medium">Consecutive Day Rules</div>
              <div class="bg-white rounded-md -space-y-px">
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-0-label" class="block text-sm font-medium">
                      None
                    </span>
                  </div>
                </label>
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-1-label" class="block text-sm font-medium">
                      5th Day
                    </span>
                  </div>
                </label>
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      6th Day
                    </span>
                  </div>
                </label>
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      7th Day
                    </span>
                  </div>
                </label>
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      Inclusive
                    </span>
                  </div>
                </label>
              </div>
              <div class="mt-6 grid grid-cols-1 sm:grid-cols-6 gap-2">
                <div class="sm:col-span-2">
                  <label for="username" class="block text-sm font-medium text-gray-700">
                    Qualified Hours
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                </div>
                <div class="sm:col-span-2 gap-2">
                  <label for="username" class="block text-sm font-medium text-gray-700">
                    Pay Time and One-Half After
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                </div>
                <div class="sm:col-span-2 gap-2">
                  <label for="username" class="block text-sm font-medium text-gray-700">
                    Pay Double Time After
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                </div>
              </div>
            </div>
          {/if}
          {#if tabSelected === 4}
          <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
            <div class="p-2">
              <div class="font-medium mb-2">Saturday OT/DT</div>
              <div class="bg-white rounded-md -space-y-px">
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-0-label" class="block text-sm font-medium">
                      None
                    </span>
                  </div>
                </label>
            
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-1-label" class="block text-sm font-medium">
                      Time & One Half
                    </span>
                  </div>
                </label>
            
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      Double Time
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div class="p-2">
              <div class="font-medium mb-2">Sunday OT/DT</div>
              <div class="bg-white rounded-md -space-y-px">
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-0-label" class="block text-sm font-medium">
                      None
                    </span>
                  </div>
                </label>
            
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-1-label" class="block text-sm font-medium">
                      Time & One Half
                    </span>
                  </div>
                </label>
            
                <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="radio" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      Double Time
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/if}
          {#if tabSelected === 5}
          <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
            <div class="p-2">
              <div class="font-medium mb-2">Launches & Breaks</div>
              <div class="bg-white rounded-md -space-y-px">
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Public access" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-0-label" class="block text-sm font-medium">
                      Pay Lunch Time
                    </span>
                  </div>
                </label>
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-1-label" class="block text-sm font-medium">
                      Pay Break Time
                    </span>
                  </div>
                </label>
      
                <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Private to you" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-2-label" aria-describedby="privacy-setting-2-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-2-label" class="block text-sm font-medium">
                      Combine Lunch and Break minutes
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div> 
          {/if}
          {#if tabSelected === 6}
          <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Start Day</label>
              <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option selected>MOI</option>
              </select>
              <p class="p-2 italic text-xs">Applies when no Overtime Type has been checked!</p>
            </div>
          </div> 
          {/if}
          {#if tabSelected === 7}
            <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
              <div class="space-y-6 sm:space-y-5">
                <p class="italic text-sm text-red-600">For Minimum Hours</p>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Extra for Saturday Shifts per Hour
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-2">
                  <label for="sunday" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Extra for Sunday Shifts per Hour
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="sunday" id="sunday" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
              </div>
              <div class="space-y-6 sm:space-y-5">
                <p class="italic text-sm text-red-600">Will be paid Extra per Hour</p>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label for="sunday" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Amount ($)
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="sunday" value="0.00" id="sunday" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-2">
                  <label for="sunday" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Pct (%)
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="sunday" value="0" id="sunday" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
              </div>
            </div>
          {/if}
          {#if tabSelected === 8}
          <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
            <div class="p-2">
              <div class="font-medium mb-2">Launches & Breaks</div>
              <div class="bg-white rounded-md -space-y-px">
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Public access" class="h-4 w-4 mt-3 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <span id="privacy-setting-0-label" class="mt-3 block text-sm font-medium">
                      Deduct Minimum Lunch
                    </span>
                  </div>
                  <div class="flex flex-col ml-3">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-20 h-auto rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                  <span class="flex flex-col p-2 text-xs text-gray italic">mins</span>
                </label>
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Public access" class="h-4 w-4 mt-3 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <span id="privacy-setting-0-label" class="mt-3 block text-sm font-medium">
                      For Minimum
                    </span>
                  </div>
                  <div class="flex flex-col ml-3">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-20 h-auto rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                  <span class="flex flex-col p-2 text-xs text-gray italic">hours worked</span>
                </label>
                <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Private to Project Members" class="h-4 w-4 mt-3 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-1-label" aria-describedby="privacy-setting-1-description">
                  <div class="ml-3 flex flex-col">
                    <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                    <span id="privacy-setting-1-label" class="mt-3 block text-sm font-medium">
                      Deduct Minimum Breaks
                    </span>
                  </div>
                  <div class="flex flex-col ml-3">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-20 h-auto rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                  <span class="flex flex-col p-2 text-xs text-gray italic">mins</span>
                </label>
                <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                  <input type="checkbox" name="privacy-setting" value="Public access" class="h-4 w-4 mt-3 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" aria-labelledby="privacy-setting-0-label" aria-describedby="privacy-setting-0-description">
                  <div class="ml-3 flex flex-col">
                    <span id="privacy-setting-0-label" class="mt-3 block text-sm font-medium">
                      For Minimum
                    </span>
                  </div>
                  <div class="flex flex-col ml-3">
                    <input type="text" value="0:00" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-20 h-auto rounded-none rounded sm:text-sm border-gray-300">
                  </div>
                  <span class="flex flex-col p-2 text-xs text-gray italic">hours worked</span>
                </label>
             
              </div>
            </div>
          </div> 
          {/if}
          {#if tabSelected === 9}
          <div class="bg-white py-6 px-2 space-y-6 sm:p-6">
            <div class="p-2">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export PDF
              </button>
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export CSV
              </button>
            </div>
          </div>
          {/if}
          {#if tabSelected !== 9}
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
          {/if}
        </div>
      </form>
    </div>
  </div>