/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				YoungSerif: ['"Young Serif"', 'sans-serif'],
				Outfit: ['Outfit', 'sans-serif'],
			},
			colors: {
				white: 'hsl(0, 0%, 100%)',
				'stone-100': 'hsl(30, 54%, 90%)',
				'stone-150': 'hsl(30, 18%, 87%)',
				'stone-600': 'hsl(30, 10%, 34%)',
				'stone-900': 'hsl(24, 5%, 18%)',
				'brown-800': 'hsl(14, 45%, 36%)',
				'rose-50': 'hsl(330, 100%, 98%)',
				'rose-800': 'hsl(332, 51%, 32%)',
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
