/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Outfit: ['Outfit', 'sans-serif'],
			},
			colors: {
				'Slate-300': 'hsl(212, 45%, 89%)',
				'Slate-500': 'hsl(216, 15%, 48%)',
				'Slate-900': 'hsl(218, 44%, 22%)',
			},
			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
			minWidth: {
				mobile: '375px',
				desktop: '1440px',
			},
		},
	},
};
