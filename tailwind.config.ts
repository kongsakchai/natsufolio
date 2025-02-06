import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			primary: ['var(--font-primary)', 'sans-serif'],
			mono: ['var(--font-mono)', 'monospace']
		}
	},

	plugins: []
} satisfies Config;
