<script>
	import { link } from 'svelte-spa-router';
</script>

<div class="mt-10 text-center">
	<span class="sr-only">ProClock Manager</span>
	<img class="mx-auto h-24 w-auto" src="./images/sign-in.png" alt="ProClock Manager" />

	<div class="my-6">
		<svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path
				vector-effect="non-scaling-stroke"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
			/>
		</svg>
	</div>

	<h3 class="mt-2 text-sm font-medium text-gray-900">Page not found.</h3>
	<p class="mt-1 text-sm text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
	<div class="mt-6">
		<a href="/" use:link class="text-base font-medium text-indigo-600 hover:text-indigo-500">Go back home<span aria-hidden="true"> &rarr;</span></a>
	</div>
</div>
