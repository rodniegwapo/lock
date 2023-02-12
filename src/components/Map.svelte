<script>
	let container;
	let map;
	let zoom = 7;
	let center = {
		lat: -23.4937236,
		lng: -47.431293
	};

	import { onMount } from 'svelte';

	const employees = [
		['Bondi Beach', -33.890542, 151.274856, 4],
		['Coogee Beach', -33.923036, 151.259052, 5],
		['Cronulla Beach', -34.028249, 151.157507, 3],
		['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
		['Maroubra Beach', -33.950198, 151.259302, 1]
	];

	const setMarkers = () => {
		const image = {
			url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
			size: new window.google.maps.Size(20, 32),
			origin: new window.google.maps.Point(0, 0),
			anchor: new window.google.maps.Point(0, 32)
		};

		const shape = {
			coords: [1, 1, 1, 20, 18, 20, 18, 1],
			type: 'poly'
		};

		for (let i = 0; i < employees.length; i++) {
			const employee = employees[i];
			new window.google.maps.Marker({
				position: {
					lat: employee[1],
					lng: employee[2]
				},
				map,
				icon: image,
				shape: shape,
				title: employee[0],
				zIndex: employee[3]
			});
		}
	};

	onMount(async () => {
		map = new window.google.maps.Map(container, {
			zoom,
			center
		});

		setMarkers();
	});
</script>

<div class="google-map" bind:this={container} />
