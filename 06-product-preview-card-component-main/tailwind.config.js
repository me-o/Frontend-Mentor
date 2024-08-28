/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat'],
				Fraunces: ['Fraunces'],
			},
			colors: {
				'dark-cyan': 'hsl(158, 36%, 37%)',
				cream: 'hsl(30, 38%, 92%)',
				'very-dark-blue': 'hsl(212, 21%, 14%)',
				'dark-grayish-blue': 'hsl(228, 12%, 48%)',
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
