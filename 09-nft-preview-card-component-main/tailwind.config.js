/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Outfit: ['Outfit', 'sans-serif'],
			},
			colors: {
				'Soft-blue': 'hsl(215, 51%, 70%)',
				Cyan: 'hsl(178, 100%, 50%)',
				'main-blue': 'hsl(217, 54%, 11%)',
				'card-blue': 'hsl(216, 50%, 16%)',
				'line-blue': 'hsl(215, 32%, 27%)',
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
