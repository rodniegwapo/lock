<script>
	import { setContext } from 'svelte';

	import Layout from './layout/Layout.svelte';

	// Router && Pages
	import Router, { location, replace } from 'svelte-spa-router';
	import { wrap } from 'svelte-spa-router/wrap';

	import { localStorageStore } from './lib/local-store';
	import { writable } from 'svelte/store';

	import jwt_decode from 'jwt-decode';

	const Auth = localStorageStore('Auth', undefined);

	function isAuth() {
		return $Auth && $Auth.token;
	}

	function AuthConnect(id, token) {
		if (token) {
			const json = jwt_decode(token);
			if (json && json.data) {
				$Auth = {
					id: id,
					token: token,
					data: json.data
				};
				//replace( "/" );
			} else {
				AuthDisconnect();
			}
		}
	}

	function AuthDisconnect() {
		$Auth = null;
		active = null;
		/* replace( "/" ); */
		document.location.href = '/';
	}

	function getToken() {
		return $Auth.token;
	}

	function setClient(id) {
		$Auth.id = id;
		return getClient(id);
	}

	function getClient(id = null) {
		let client;
		if (id) {
			id = id.toUpperCase();
			client = $Auth.data.filter((item) => item.company.id === id);
			if (client && client.length > 0) {
				client = client[0];
			} else {
				client = null;
			}
		} else {
			client = $Auth.data;
		}
		return client;
	}

	function redirect(path) {
		replace(path);
	}

	let active;

	function getActive() {
		return active;
	}

	export let ready;

	let state = writable({
		isReady: false
	});
	$: $state = {
		isReady: ready
	};

	$: if ($Auth) {
		active = getClient($Auth.id);
	}

	// Dashboard
	import Dashboard from './pages/dashboard/Dashboard.svelte';

	// Employee main page
	import Employees from './pages/employees/Employees.svelte';

	// Timesheets
	import TimesheetsPunchManagement from './pages/timesheets/PunchManagement.svelte';
	import TimesheetsSummary from './pages/timesheets/Summary.svelte';
	import TimesheetsApproval from './pages/timesheets/Approval.svelte';
	import TimesheetSendRequest from './pages/timesheets/SendRequest.svelte';
	import TimesheetsHistory from './pages/timesheets/History.svelte';

	// Reports
	import ReportsTimeCards from './pages/reports/TimeCards.svelte';
	import ReportsTips from './pages/reports/Tips.svelte';

	// Company setup
	import SettingsCompanySetup from './pages/settings/company/Company.svelte';

	// General Setup
	import SettingsCompanyJobs from './pages/settings/company/Jobs.svelte';
	import SettingsDepartment from './pages/settings/company/Department.svelte';
	import SettingsWorkerCodes from './pages/settings/company/WorkerCodes.svelte';
	import SettingsCompanyShifts from './pages/settings/company/Shifts.svelte';
	import SettingsPayPolicy from './pages/settings/company/PayPolicy.svelte';
	import SettingsConfigurePayPolicy from './pages/settings/company/ConfigurePayPolicy.svelte';
	import SettingsHolidays from './pages/settings/company/Holidays.svelte';

	import SettingsCompanyPayDates from './pages/settings/company/PayDates.svelte';

	// settings / proclock
	import SettingsProClockSetup from './pages/settings/proclock/ProClock.svelte';
	import SettingsProClockUsers from './pages/settings/proclock/Users.svelte';
	import SettingsProClockConnectedDevices from './pages/settings/proclock/ConnectedDevices.svelte';

	// Billing
	import Billing from './pages/billing/History.svelte';
	import Setup from './pages/billing/Setup.svelte';
	// Login
	import Login from './layout/Login.svelte';
	import NotFound from './layout/Error.svelte';

	import NotImplemented from './layout/NotImplemented.svelte';

	// Router
	function protectedRoute(component) {
		return wrap({
			component: component,
			conditions: [
				() => {
					return isAuth();
				}
			]
		});
	}

	const routes = {
		'/': protectedRoute(Dashboard),

		'/employees': protectedRoute(Employees),
		'/employees/:id': protectedRoute(Employees),

		'/timesheets/punch-management': protectedRoute(TimesheetsPunchManagement),
		'/timesheets/timesheet-summary': protectedRoute(TimesheetsSummary),
		'/timesheets/timesheet-approval': protectedRoute(TimesheetsApproval),
		'/timesheets/timesheet-approval/send-request/:id': protectedRoute(TimesheetSendRequest),
		'/timesheets/timesheet-history': protectedRoute(TimesheetsHistory),

		'/reports/time-cards': protectedRoute(ReportsTimeCards),
		'/reports/tips': protectedRoute(ReportsTips),

		'/billing/billing-setup': protectedRoute(Setup),
		'/billing/billing-history': protectedRoute(Billing),

		'/settings/company/company-setup': protectedRoute(SettingsCompanySetup),
		'/settings/company/pay-policies': protectedRoute(SettingsPayPolicy),
		'/settings/company/pay-policies/:policy': protectedRoute(SettingsConfigurePayPolicy),
		'/settings/company/departments': protectedRoute(SettingsDepartment),
		'/settings/company/shifts': protectedRoute(SettingsCompanyShifts),
		'/settings/company/jobs': protectedRoute(SettingsCompanyJobs),
		'/settings/company/wc-codes': protectedRoute(SettingsWorkerCodes),
		'/settings/company/pay-dates': protectedRoute(SettingsCompanyPayDates),
		'/settings/company/holidays': protectedRoute(SettingsHolidays),

		'/settings/proclock/proclock-setup': protectedRoute(SettingsProClockSetup),
		'/settings/proclock/users': protectedRoute(SettingsProClockUsers),
		'/settings/proclock/connected-devices': protectedRoute(SettingsProClockConnectedDevices),

		'/help': protectedRoute(NotImplemented),

		'/login': Login,

		'*': NotFound
	};

	function isOnNavbar(path) {
		return $location.includes(path);
	}

	let navbar = [
		{
			title: 'Dashboard',
			path: '/'
		},
		{
			title: 'Employees',
			path: '/employees'
		},
		{
			title: 'Timesheets',
			isOpen: isOnNavbar('/timesheets/'),
			links: [
				{
					title: 'Punch Management',
					path: '/timesheets/punch-management'
				},
				{
					title: 'Timesheet Summary',
					path: '/timesheets/timesheet-summary'
				},
				{
					title: 'Timesheet Approval',
					path: '/timesheets/timesheet-approval'
				},
				{
					title: 'Timesheet History',
					path: '/timesheets/timesheet-history'
				}
			]
		},
		{
			title: 'Reports',
			isOpen: isOnNavbar('/reports/'),
			links: [
				{
					title: 'Time Cards',
					path: '/reports/time-cards'
				},
				{
					title: 'Tips',
					path: '/reports/tips'
				}
			]
		},
		{
			title: 'Billing',
			isOpen: isOnNavbar('/billing/'),
			links: [
				{
					title: 'Billing Setup',
					path: '/billing/billing-setup'
				},
				{
					title: 'Billing History',
					path: '/billing/billing-history'
				}
			]
		},
		{
			title: 'Settings',
			isOpen: isOnNavbar('/settings/'),
			links: [
				{
					title: 'Company',
					isOpen: isOnNavbar('/settings/'),
					noBorder: true,
					links: [
						{
							title: 'Company Setup',
							path: '/settings/company/company-setup'
						},
						{
							title: 'Pay Policies',
							path: '/settings/company/pay-policies'
						},
						{
							title: 'Departments',
							path: '/settings/company/departments'
						},
						{
							title: 'Shifts',
							path: '/settings/company/shifts'
						},
						{
							title: 'Jobs',
							path: '/settings/company/jobs'
						},
						{
							title: 'W/C Codes',
							path: '/settings/company/wc-codes'
						},
						{
							title: 'Pay Dates',
							path: '/settings/company/pay-dates'
						},
						{
							title: 'Holidays',
							path: '/settings/company/holidays'
						}
					]
				},
				{
					title: 'ProClock Setup',
					path: '/settings/proclock/proclock-setup'
				},
				{
					title: 'Users',
					path: '/settings/proclock/users'
				},
				{
					title: 'Connected Devices',
					path: '/settings/proclock/connected-devices'
				}
			]
		},
		{
			title: 'Help',
			path: '/help'
		}
	];

	function getNavbar() {
		return navbar;
	}

	let onReload = writable({
		id: $Auth ? $Auth.id : null
	});

	setContext('app', {
		connect: AuthConnect,
		disconnect: AuthDisconnect,
		getToken: getToken,
		setClient: setClient,
		getClient: getClient,
		getActive: getActive,
		redirect: redirect,
		getNavbar: getNavbar,
		state: state,
		onReload: onReload
	});

	$: if (active) {
		document.body.classList['remove']('login');
		document.body.classList['add']('main');
	} else {
		document.body.classList['add']('login', 'overflow-hidden');
		document.body.classList['remove']('main', 'overflow-hidden');
	}

	const reload = (event) => {
		$onReload = {
			id: event.detail.company.id
		};
	};
</script>

<svelte:head>
	<title>ProClock Manager</title>
	<meta name="description" content="Online Time and Attendance" />
	<script defer async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDI26QLC2PbKknvKzWtZgpI6dPgmqrilMU&callback=initMap">
	</script>
</svelte:head>

{#if active}
	<Layout on:reload={reload}>
		<Router {routes} on:conditionsFailed={() => replace('/')} />
	</Layout>
{:else}
	<Login />
{/if}
