import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				base: 'var(--color-base)',
				secondary: '#D7D1BF',
				chip: '#3C3533'
			}
		},
		fontFamily: {
			primary: ['var(--font-primary)', 'sans-serif'],
			mono: ['var(--font-mono)', 'monospace']
		}
	},

	plugins: []
} satisfies Config;
