const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'media',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				red: colors.red,
				rose: colors.rose,
				teal: colors.teal,
				light: colors.light,
				orange: colors.orange,
				cyan: colors.cyan
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()'
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
				});
			});
		}),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio')
	],

	variants: {
		extend: {
			opacity: ['disabled'],
			backgroundColor: ['disabled', 'firefox'],
			backgroundOpacity: ['firefox'],
			scale: ['focus-within'],
			divideColor: ['group-hover']
		}
	}
};

module.exports = config;
