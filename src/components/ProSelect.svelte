<script>
	import { clickOutside } from '../lib/clickOutside.js';

	export let caption = 'Pay Period';
	export let list = [];
	export let active = undefined;

	if (!active) {
		active = list.length > 0 ? list[0] : { id: -1, caption: 'Empty' };
	}

	function onChange(item) {
		active = item;
		isOpen = false;
	}

	let isOpen = false;
</script>

<div>
	<span class="block text-sm font-medium text-gray-700">
		{caption}
	</span>
	<div class="mt-1 relative" use:clickOutside={{ enabled: isOpen, cb: () => (isOpen = false) }}>
		<button
			type="button"
			on:click={() => (isOpen = !isOpen)}
			class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left
			cursor-default focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
			aria-haspopup="listbox"
			aria-expanded="true"
			aria-labelledby="listbox-label"
		>
			<span class="block truncate">
				{active.caption}
			</span>
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</button>
		{#if isOpen}
			<ul
				class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
				tabindex="-1"
				role="listbox"
				aria-labelledby="listbox-label"
				aria-activedescendant="listbox-option-3"
			>
				{#each list as item}
					<li
						on:click={() => onChange(item)}
						class="group hover:text-white hover:bg-gray-700 text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
						id="listbox-option-0"
						role="option"
					>
						<div class="flex">
							{#if active.caption === item.caption}
								<span class="text-sm font-medium truncate">
									{item.caption}
								</span>
								<span class="group-hover:text-white text-gray-600 absolute inset-y-0 right-0 flex items-center pr-4">
									<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							{:else}
								<span class="group-hover:text-white text-sm font-medium truncate">
									{item.caption}
								</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
