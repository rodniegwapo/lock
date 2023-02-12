<script>
	import ProSelect from '../../components/ProSelect.svelte';

	let employees = [{ id: -1, caption: 'All Employees' }];
	let departments = [{ id: -1, caption: 'All Departments' }];
	let payperiod = [
		{ id: 1, caption: 'Weekly' },
		{ id: 2, caption: 'Bi-Weekly' },
		{ id: 3, caption: 'Semi-Monthly' },
		{ id: 4, caption: 'Monthly' }
	];
	let paydates = [{ id: -1, caption: '01/01/21' }];
	let items = [
		{
			id: 1,
			date: 'Mon 07/26/2021',
			department: 'Customer Support',
			job: 'Customer Support - 08:01',
			lunch: '01:00',
			break: '--:--',
			total_hours: '08:04',
			reg_hours: '07:20',
			overtime_hours: '--:--',
			doubletime_hours: '--:--',
			pay_rate: 'Regular',
			pay_rate_details: '07:00',
			paid_hours: '07:05',
			paid_hours_decimal: '07:05'
		},
		{
			id: 2,
			date: 'TUE 07/27/2021',
			department: 'Customer Support',
			job: 'Customer Support - 08:01',
			lunch: '01:00',
			break: '--:--',
			total_hours: '08:04',
			reg_hours: '07:20',
			overtime_hours: '--:--',
			doubletime_hours: '--:--',
			pay_rate: 'Regular',
			pay_rate_details: '07:00',
			paid_hours: '07:05',
			paid_hours_decimal: '07:05'
		},
		{
			id: 3,
			date: 'WED 07/28/2021',
			department: 'Customer Support',
			job: 'Customer Support - 08:01',
			lunch: '01:00',
			break: '--:--',
			total_hours: '08:04',
			reg_hours: '07:20',
			overtime_hours: '--:--',
			doubletime_hours: '--:--',
			pay_rate: 'Regular',
			pay_rate_details: '07:00',
			paid_hours: '07:05',
			paid_hours_decimal: '07:05'
		}
	];

	let onlyTotals = false;
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Timesheet Summary</h2>
	</div>
	<div class="mt-4 flex md:mt-0 md:ml-4">
		<div class="flex items-center">
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<button
				type="button"
				class="{onlyTotals
					? 'bg-indigo-600'
					: 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				role="switch"
				aria-checked="false"
				aria-labelledby="annual-billing-label"
				on:click={() => (onlyTotals = !onlyTotals)}
			>
				<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
				<span
					aria-hidden="true"
					class="{onlyTotals ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
				/>
			</button>
			<span class="ml-3" id="annual-billing-label">
				<span class="text-sm font-medium text-gray-900">Only Show </span>
				<span class="text-sm text-gray-500">Totals</span>
			</span>
		</div>
	</div>
</div>

<div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-6">
	<div class="col-span-6 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<ProSelect caption="Employees" list={employees} />
	</div>
	<div class="col-span-6 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<ProSelect caption="Department" list={departments} />
	</div>
	<div class="col-span-6 sm:col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 p-2">
		<div class="grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-6">
			<div class="col-span-3">
				<ProSelect caption="Pay Period" list={payperiod} />
			</div>
			<div class="col-span-3">
				<ProSelect caption="Pay Date" list={paydates} />
			</div>
		</div>
	</div>
</div>

<div class="mt-5">
	<div>
		<div class="rounded box bg-white shadow px-5 py-3 flex items-center">
			<div class="w-12 h-12 flex-none image-fit rounded-full overflow-hidden zoom-in">
				<span class="mt-1 inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
					<svg class="h-full w-full text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</span>
			</div>
			<div class="ml-4 mr-auto">
				<div class="font-large">UserName</div>
				<div class="text-gray-600 text-xs mt-0.5">Employee #: 0010</div>
			</div>

			<div class="flex flex-row-reverse">
				<div class="flex-col mx-1">
					<div class="text-xs text-black font-semibold">
						Pay Policy: <p class="p-1 lg:p-1 text-black cursor-pointer font-small font-light">Default</p>
					</div>
				</div>
				<div class="flex-col mx-1">
					<div class="text-xs text-black font-semibold">
						Pay Period: <p class="p-1 lg:p-1 text-black cursor-pointer font-small font-light">Weekly</p>
					</div>
				</div>
				<div class="flex-col mx-1">
					<div class="text-xs text-black font-semibold">
						Pay Type: <p class="p-1 lg:p-1 text-black cursor-pointer font-small font-light">Salaried</p>
					</div>
				</div>
			</div>
		</div>

		<div class="pt-2">
			<div class="">
				<div class="overflow-x-auto">
					<table class="table--xs w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg">
						<thead>
							<tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 text-xs">
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> Date </th>
								<th class="uppercase whitespace-nowrap p-1"> Department </th>
								<th class="uppercase whitespace-nowrap p-1"> Job </th>
								<th class="uppercase whitespace-nowrap p-1"> Lunch </th>
								<th class="uppercase whitespace-nowrap p-1"> Break </th>
								<th class="uppercase whitespace-nowrap p-1"> Total Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Regular Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Overtime Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Double Time Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate Detail </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Time) </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Decimal) </th>
							</tr>
							<tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 text-xs">
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> Date </th>
								<th class="uppercase whitespace-nowrap p-1"> Department </th>
								<th class="uppercase whitespace-nowrap p-1"> Job </th>
								<th class="uppercase whitespace-nowrap p-1"> Lunch </th>
								<th class="uppercase whitespace-nowrap p-1"> Break </th>
								<th class="uppercase whitespace-nowrap p-1"> Total Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Regular Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Overtime Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Double Time Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate Detail </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Time) </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Decimal) </th>
							</tr>
							<tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 text-xs">
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> Date </th>
								<th class="uppercase whitespace-nowrap p-1"> Department </th>
								<th class="uppercase whitespace-nowrap p-1"> Job </th>
								<th class="uppercase whitespace-nowrap p-1"> Lunch </th>
								<th class="uppercase whitespace-nowrap p-1"> Break </th>
								<th class="uppercase whitespace-nowrap p-1"> Total Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Regular Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Overtime Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Double Time Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate Detail </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Time) </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Decimal) </th>
							</tr>
							<tr class="lg:hidden md:hidden bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 text-xs">
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> &nbsp; </th>
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> Date </th>
								<th class="uppercase whitespace-nowrap p-1"> Department </th>
								<th class="uppercase whitespace-nowrap p-1"> Job </th>
								<th class="uppercase whitespace-nowrap p-1"> Lunch </th>
								<th class="uppercase whitespace-nowrap p-1"> Break </th>
								<th class="uppercase whitespace-nowrap p-1"> Total Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Regular Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Overtime Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Double Time Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate Detail </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Time) </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Decimal) </th>
							</tr>
							<tr class="lg:hidden md:hidden bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 text-xs">
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> &nbsp; </th>
								<th class="uppercase border-top-2 whitespace-nowrap p-1"> Date </th>
								<th class="uppercase whitespace-nowrap p-1"> Department </th>
								<th class="uppercase whitespace-nowrap p-1"> Job </th>
								<th class="uppercase whitespace-nowrap p-1"> Lunch </th>
								<th class="uppercase whitespace-nowrap p-1"> Break </th>
								<th class="uppercase whitespace-nowrap p-1"> Total Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Regular Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Overtime Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Double Time Hours </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate </th>
								<th class="uppercase whitespace-nowrap p-1"> Pay Rate Detail </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Time) </th>
								<th class="uppercase whitespace-nowrap p-1"> Paid Hours (Decimal) </th>
							</tr>
						</thead>
						<tbody class="flex-1 sm:flex-none mb-2">
							{#each items as item}
								<tr v-for="item in items" :key="item.id" class="flex flex-col text-center sm:table-row lg:h-auto font-base text-xs mb-2">
									<td class="border-b p-1 text-small">{item.date}</td>
									<td class="border-b p-1">{item.department}</td>
									<td class="border-b p-1">{item.job}</td>
									<td class="border-b p-1">{item.lunch}</td>
									<td class="border-b p-1">{item.break}</td>
									<td class="border-b p-1">{item.total_hours}</td>
									<td class="border-b p-1">{item.reg_hours}</td>
									<td class="border-b p-1">{item.overtime_hours}</td>
									<td class="border-b p-1">{item.doubletime_hours}</td>
									<td class="border-b p-1">{item.pay_rate}</td>
									<td class="border-b p-1">{item.paid_hours}</td>
									<td class="border-b p-1">{item.paid_hours_decimal}</td>
									<td class="border-b p-1">{item.paid_hours_decimal}</td>
								</tr>
							{/each}
							<tr class="flex flex-col flex-no wrap sm:table-row sm:mb-0 bg-gray-200 mb-2 font-bold">
								<td class="border-b font-bold p-1 lg:text-left md:text-left text-leftt" colspan="13">Deducted</td>
								<td class="lg:hidden md:hidden flex border-b p-1 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
								<td class="lg:hidden md:hidden flex border-b p-1.5 text-center">&nbsp;</td>
							</tr>
							<tr class="flex flex-col flex-no wrap sm:table-row sm:mb-0 bg-gray-200 p-2 mb-2 font-bold">
								<td class="border-b font-bold p-1 lg:text-left md:text-left text-left" colspan="3">Subtotals</td>
								<td class="border-b p-1 text-center">&nbsp;</td>
								<td class="border-b p-1 text-center">&nbsp;</td>
								<td class="border-b p-1 text-center">&nbsp;</td>
								<td class="border-b p-1 text-center">&nbsp;</td>
								<td class="border-b p-1.5 text-center">&nbsp;</td>
								<td class="border-b p-1.5 text-center">&nbsp;</td>
								<td class="border-b p-1.5 text-center">&nbsp;</td>
								<td class="border-b p-1.5 text-center">&nbsp;</td>
								<td class="border-b font-bold p-1.5 text-center">&nbsp;</td>
								<td class="border-b font-bold p-1.5 text-center">&nbsp;</td>
							</tr>
							<tr class="flex flex-col flex-no wrap sm:table-row sm:mb-0 p-2 mb-2 font-bold bg-gray-500 text-white  mt-5">
								<td class="border-b p-1 font-bold text-center" colspan="4">
									<h3>Grand Total</h3>
								</td>
								<td class="border-b p-1 font-bold" colspan="4">
									<h3>Salaried</h3>
								</td>
								<td class="border-b p-1 font-bold" colspan="5">
									<h3>$1800</h3>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
