/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				LexendDeca: ['"Lexend Deca"', 'sans-serif'],
			},
			colors: {
				VeryDarkBlue: 'hsl(233, 47%, 7%)',
				DarkDesaturatedBlue: 'hsl(244, 38%, 16%)',
				SoftViolet: 'hsl(277, 64%, 61%)',
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
