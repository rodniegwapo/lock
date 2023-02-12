<script>
	import { API_URL } from '../../lib/constants.js';
	import Map from '../../components/Map.svelte';

	import { getContext } from 'svelte';

	const context = getContext('app');
	const state = context.state;

	const status = [
		{
			title: 'Total Managers',
			message: 'Loading...'
		},
		{
			title: 'Total Employees',
			message: 'Loading...'
		},
		{
			title: 'Total Departments',
			message: 'Loading...'
		},
		{
			title: 'Total Punches',
			message: 'Loading...'
		}
	];

	const loadStatus = async (id) => {
		status[0].message = 'Loading...';
		status[1].message = 'Loading...';
		status[2].message = 'Loading...';
		status[3].message = 'Loading...';

		const response = await fetch(`${API_URL}/status`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + context.getToken(),
				Company: id
			}
			/* body: JSON.stringify( {} ) */
		}).catch((e) => {
			console.error('fetch error: ', e);
		});

		if (response.ok) {
			const json = await response.json();
			if (json && json.error) {
				if (json.error.message.includes('expired')) {
					return context.disconnect();
				} else {
					console.error('Error ', json.error.message);
				}
			} else if (json && json.manager) {
				status[0].message = json.manager;
				status[1].message = json.employee;
				status[2].message = json.department;
				status[3].message = json.punch;
			}
		}
	};

	let activity = [
		{
			title: 'WORKING',
			class: 'bg-green-500',
			data: null
		},
		{
			title: 'ON BREAK/LUNCH',
			class: 'bg-yellow-500',
			data: null
		},
		{
			title: 'END DAY',
			class: 'bg-blue-600',
			data: null
		},
		{
			title: 'OFF THE CLOCK',
			class: 'bg-red-600',
			data: null
		}
	];

	activity[0].data = [
		{
			name: 'Lailton',
			emp_no: '0010',
			department: 'dev'
		},
		{
			name: 'George',
			emp_no: '0012',
			department: 'admin'
		},
		{
			name: 'Lailton 2',
			emp_no: '0010',
			department: 'dev'
		},
		{
			name: 'George 2',
			emp_no: '0012',
			department: 'admin'
		},
		{
			name: 'Lailton 3',
			emp_no: '0010',
			department: 'dev'
		},
		{
			name: 'George 3',
			emp_no: '0012',
			department: 'admin'
		}
	];
	activity[1].data = [
		{
			name: 'Chris',
			emp_no: '0013',
			department: 'admin'
		}
	];
	activity[2].data = [
		{
			name: 'JJ',
			emp_no: '0014',
			department: 'dev'
		},
		{
			name: 'Mary',
			emp_no: '0015',
			department: 'support'
		}
	];
	activity[3].data = [
		{
			name: 'Kathie',
			emp_no: '0018',
			department: 'admin'
		}
	];

	function update_data() {
		console.log('update company: ', context.getActive().company.id);
		loadStatus(context.getActive().company.id);
	}
	update_data();

	let cSelected = context.getActive().company.id;
	const onReload = context.onReload;

	$: if ($onReload.id && $onReload.id !== cSelected) {
		console.log('old: ', cSelected, ' new -> ', $onReload.id);
		cSelected = $onReload.id;
		update_data();
	}

	console.log('selected: ', cSelected);
</script>

<div>
	<dl class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
		{#each status as info}
			<div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<dt class="text-sm font-medium text-gray-500 truncate">
					{info.title}
				</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{info.message}
				</dd>
			</div>
		{/each}
	</dl>
</div>

<div class="google-map">
	{#if $state.isReady}
		<Map />
	{:else}
		Loading...
	{/if}
</div>

<div class="my-5">
	<dl class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
		{#each activity as employee}
			<div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
				<dt>
					<div class="absolute {employee.class} rounded-md p-3">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<p class="ml-16 text-sm font-medium text-gray-500 truncate">{employee.title}</p>
				</dt>
				<dd class="ml-16 pb-3 flex items-baseline">
					<p class="text-2xl font-semibold text-gray-900">
						{employee.data.length}
					</p>
				</dd>
				<div>
					<div class="relative">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-start">
							<span class="pr-3 bg-white text-lg font-medium text-gray-900"> Employees </span>
						</div>
					</div>

					<div class="flow-root mt-6">
						<ul class="-my-5 divide-y divide-gray-200">
							{#each employee.data as data}
								<li class="py-4">
									<div class="flex items-center space-x-4">
										<div class="flex-shrink-0">
											<img
												class="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div class="flex-1 min-w-0">
											<p class="text-sm font-medium text-gray-900 truncate">
												{data.name}
											</p>
											<p class="text-sm text-gray-500 truncate">
												@{data.department}
											</p>
										</div>
										<a
											href="/employees/{data.emp_no}"
											class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
										>
											Profile
										</a>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</dl>
</div>
