<script>
	import Navbar from './Navbar.svelte';

	import { getContext } from 'svelte';

	import { fly } from 'svelte/transition';

	const context = getContext('app');
	let router = context.getNavbar();

	export let isSideBarOpen;
</script>

<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
{#if isSideBarOpen}
	<div class="{isSideBarOpen ? 'block' : 'hidden'} fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
		<!--
		Off-canvas menu overlay, show/hide based on off-canvas menu state.

		Entering: "transition-opacity ease-linear duration-300"
		From: "opacity-0"
		To: "opacity-100"
		Leaving: "transition-opacity ease-linear duration-300"
		From: "opacity-100"
		To: "opacity-0"
	-->
		<div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" on:click={() => (isSideBarOpen = false)} />

		<!--
		Off-canvas menu, show/hide based on off-canvas menu state.

		Entering: "transition ease-in-out duration-300 transform"
		From: "-translate-x-full"
		To: "translate-x-0"
		Leaving: "transition ease-in-out duration-300 transform"
		From: "translate-x-0"
		To: "-translate-x-full"
	-->
		<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800" transition:fly={{ x: -500, opacity: 1 }}>
			<!--
		Close button, show/hide based on off-canvas menu state.

		Entering: "ease-in-out duration-300"
			From: "opacity-0"
			To: "opacity-100"
		Leaving: "ease-in-out duration-300"
			From: "opacity-100"
			To: "opacity-0"
		-->
			<div class="absolute top-0 right-0 -mr-12 pt-2">
				<button
					type="button"
					on:click={() => (isSideBarOpen = false)}
					class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Close sidebar</span>
					<!-- Heroicon name: outline/x -->
					<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex-shrink-0 flex items-center px-4">
				<img class="h-8 w-auto" src="./images/favicon.png" alt="ProClock Manager" />
				<span class="h-8 w-auto mt-2 ml-4 cursor-default text-white">ProClock Manager</span>
			</div>
			<div class="mt-5 flex-1 h-0 overflow-y-auto">
				<nav class="px-2 space-y-1">
					<ul>
						{#each router as navbar_item}
							<Navbar bind:item={navbar_item} />
						{/each}
					</ul>
				</nav>
			</div>
		</div>
		<div class="flex-shrink-0 w-14" aria-hidden="true">
			<!-- Dummy element to force sidebar to shrink to fit close icon -->
		</div>
	</div>
{/if}

<!-- Static sidebar for desktop
	<div class="hidden md:flex lg:hidden md:flex-shrink-0">
		<div class="flex flex-col w-64 bg-gray-800">
		<div class="flex-1 flex flex-col min-h-0">
			testing
		</div>
		</div>
	</div>
	-->

<!-- Static sidebar for desktop -->
<div class="hidden lg:flex md:flex-shrink-0">
	<div class="flex flex-col w-72">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex-1 flex flex-col min-h-0">
			<div class="flex items-center h-16 flex-shrink-0 px-4 bg-white">
				<!-- <img class="h-8 w-auto" src="./images/favicon.png" alt="ProClock Manager"> -->
				<!-- <span class="h-8 w-auto mt-2 ml-4 cursor-default text-white">ProClock Manager</span> -->
				<img class="mx-auto h-12 w-auto" src="./images/sign-in.png" alt="ProClock Manager" />
			</div>
			<div class="flex-1 flex flex-col overflow-y-auto">
				<nav class="flex-1 px-2 py-4 bg-gray-800 space-y-1">
					<ul>
						{#each router as navbar_item}
							<Navbar bind:item={navbar_item} />
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
