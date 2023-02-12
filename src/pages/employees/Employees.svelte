<script>
	import Loading from '../../layout/Loading.svelte';
	import EmployeesList from './List.svelte';
	import EmployeesProfile from './Profile.svelte';

	import { API_URL } from '../../lib/constants.js';

	import { replace } from 'svelte-spa-router';

	import { getContext } from 'svelte';
	const context = getContext('app');

	export let params = {};

	let employee = [];
	let employees = [];
	let departments = [];

	async function loadEmployees(id) {
		const res = await fetch(`${API_URL}/employees`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + context.getToken(),
				Company: id
			}
		});

		const data = await res.json();
		if (res.ok) {
			employees = data;
			return data;
		} else {
			throw new Error(data);
		}
	}

	async function loadEmplByEmpNo(id, emp_no) {
		const res = await fetch(`${API_URL}/employees/${emp_no}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + context.getToken(),
				Company: id
			}
		});

		const data = await res.json();
		if (res.ok) {
			employee = data;
			return data;
		} else {
			throw new Error(data);
		}
	}

	async function loadDepartments(id) {
		const res = await fetch(`${API_URL}/departments`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + context.getToken(),
				Company: id
			}
		});

		const data = await res.json();
		if (res.ok) {
			departments = data;
			return data;
		} else {
			throw new Error(data);
		}
	}

	let cSelected = context.getActive().company.id;
	const onReload = context.onReload;

	$: if ($onReload.id && $onReload.id !== cSelected) {
		console.log('old: ', cSelected, ' new -> ', $onReload.id);
		cSelected = $onReload.id;
		if (params.id) {
			replace('/employees');
		}
	}

	console.log('selected: ', cSelected);
</script>

{#if !params.id}
	{#await Promise.all([loadEmployees(cSelected), loadDepartments(cSelected)])}
		<Loading />
	{:then response}
		<EmployeesList employees={response[0]} departments={response[1]} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{:else}
	{#await Promise.all([loadEmplByEmpNo(cSelected, params.id), loadDepartments(cSelected)])}
		<Loading />
	{:then response}
		<EmployeesProfile employee={response[0]} departments={response[1]} />
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}
