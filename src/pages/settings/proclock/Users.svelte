<script>
	import Paginator from '../../../components/Paginator.svelte';

	let fakeData = [
		{ name: 'ABRAHAM, LAILTON', emp_no: '0001', email: 'demo.0001@proclock.com' },
		{ name: 'ALLAN, GEORGE', emp_no: '0002', email: 'demo.0002@proclock.com' },
		{ name: 'ARNOLD, CHRIS,', emp_no: '0003', email: 'demo.0003@proclock.com' },
		{ name: 'BALL, KIMBERLY', emp_no: '0004', email: 'demo.0004@proclock.com' },
		{ name: 'BELL, BIANCA', emp_no: '0005', email: 'demo.0005@proclock.com' },
		{ name: 'BERRY, JORGE', emp_no: '0006', email: 'demo.0006@proclock.com' },
		{ name: 'BLAKE, ROGELIO', emp_no: '0007', email: 'demo.0007@proclock.com' },
		{ name: 'BUCKLAND, ANA', emp_no: '0008', email: 'demo.0008@proclock.com' },
		{ name: 'BURGESS, JUAN', emp_no: '0009', email: 'demo.0009@proclock.com' },
		{ name: 'BUTLER, STEPHANIE', emp_no: '0010', email: 'demo.0010@proclock.com' }
	];
</script>

<div class="md:flex md:items-center md:justify-between">
	<div class="flex-1 min-w-0">
		<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Employees</h2>
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
									<th class="uppercase">&nbsp;</th>
									<th class="uppercase">Name</th>
									<th class="uppercase">Employee Number</th>
									<th class="uppercase">E-mail</th>
									<th class="border-b h-10 md:h-auto">Password</th>
								</tr>
							{/each}
						</thead>
						<tbody class="flex-1 sm:flex-none">
							{#each fakeData as fData}
								<tr class="flex flex-col text-center flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 pt-2">
									<td class="border-b">
										<input
											id="comments"
											aria-describedby="checkbox"
											name="comments"
											type="checkbox"
											class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>
									</td>
									<td class="border-b">{fData.name}</td>
									<td class="border-b">{fData.emp_no}</td>
									<td class="border-b">{fData.email}</td>
									<td class="border-b h-10 md:h-auto">
										<input type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md text-xs" value="******" />
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

<Paginator />
