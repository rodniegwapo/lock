<script>
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';

	let isSideBarOpen = false;
</script>

<div class="h-screen flex overflow-hidden bg-gray-100">
	<Sidebar bind:isSideBarOpen />

	<div class="flex flex-col w-0 flex-1 overflow-hidden">
		<Header bind:isSideBarOpen on:reload />

		<main class="flex-1 relative overflow-y-auto focus:outline-none">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				<div class="py-4">
					<slot />
				</div>
			</div>
		</main>
	</div>
</div>
