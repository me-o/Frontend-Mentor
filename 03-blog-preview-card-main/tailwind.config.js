/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Figtree: ['Figtree', 'sans-serif'],
			},
			colors: {
				Yellow: 'hsl(47, 88%, 63%)',
				White: 'hsl(0, 0%, 100%)',
				'Grey-500': 'hsl(0, 0%, 42%)',
				'Grey-950': 'hsl(0, 0%, 7%)',
			},
			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
			minWidth: {
				mobile: '375px',
				desktop: '1440px',
			},
			dropShadow: {
				card: '8px 8px 0 hsl(0, 0%, 7%)',
			},
		},
	},
};
