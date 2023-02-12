<script>
	import { link } from 'svelte-spa-router';
	import active from 'svelte-spa-router/active';
	export let item;
</script>

<li>
	{#if item.links}
		<div class="space-y-1">
			<!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
			<div
				on:click={() => {
					item.isOpen = !item.isOpen;
				}}
				class="sidebar-item-inactive group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-pointer"
				aria-controls="sub-menu-1"
				aria-expanded="false"
			>
				<!-- {#if item.icon}<svelte:component this={item.icon} class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" />{/if} -->
				{item.title}
				<svg
					class="{item.isOpen ? 'text-gray-400 rotate-90' : 'text-gray-300'} ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
				>
			</div>
			<div class="space-y-1">
				{#if item.isOpen}
					<ul class="ml-2 {item.noBorder ? '' : 'pl-1 border-l-2 border-gray-700'}">
						{#each item.links as links}
							<svelte:self item={links} />
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{:else}
		<div>
			<a
				href={item.path}
				use:link
				use:active={{ path: item.path, className: 'sidebar-item-active', inactiveClassName: 'sidebar-item-inactive' }}
				class=" group w-full flex items-center text-sm font-medium rounded-md p-2 my-1"
			>
				<svg
					class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6 hidden"
					x-state-description="undefined: &quot;text-gray-300&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-300&quot;"
					x-description="Heroicon name: outline/view-list"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
				</svg>
				<svg class="group-hover:text-white mr-2 flex-shrink-0 h-6 w-6 sidebar-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
					/></svg
				>
				<!-- {#if item.icon}
					<svelte:component this={item.icon} class="{isCurrent(item.path) ? 'bg-gray-100 text-gray-900' : 'text-gray-400 group-hover:text-gray-500'} mr-3 h-6 w-6" />
				{/if} //-->
				<span class="flex-shrink-0">
					{item.title}
				</span>
			</a>
		</div>
	{/if}
</li>
