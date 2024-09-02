/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				LibreFranklin: ['"Libre Franklin"', 'sans-serif'],
			},
			colors: {
				Blue: 'hsl(223, 87%, 63%)',
				PaleBlue: 'hsl(223, 100%, 88%)',
				LightRed: 'hsl(354, 100%, 66%)',
				Gray: 'hsl(0, 0%, 59%)',
				VeryDarkBlue: 'hsl(209, 33%, 12%)',
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
