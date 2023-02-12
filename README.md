## ProClock Development

#### Layout and Pages

```
App.svelte          -> This file contains the PAGES to be loaded and our Rourter/Store/etc.

src
└── components      -> Our own components
└── layout          -> Our Layout [ Header, Sidebar, NavBar, Login, ... ]
└── lib             -> Our Javascript Library
├── pages
│   └── Home.svelte ( Dashboard )
│   └── Employee.svelte
│   └── EmployeeList.svelte
│   └── EmployeeProfile.svelte
│
│
│       You can add new pages just saving files inside this folder with
│       the extension .svelte
│
│       ( Edit the App.svelte to load it and to add to the router )
│
│
└── styles          -> You can edit style to customize the tailwind
```

#### Install all dependencies:

```
$ npm install
```

#### Test

```
$ npm run dev
```

#### Build

```
$ npm run build
```

#### Docs

- [TailwindCSS](https://tailwindcss.com/)
- [TailwindUI](https://tailwindui.com/)
- [SvelteJS](https://svelte.dev/)
# lock
