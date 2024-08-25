/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				BigShouldersDisplay: ['"Big Shoulders Display"', 'sans-serif'],
				LexendDeca: ['"Lexend Deca"', 'sans-serif'],
			},
			colors: {
				BrightOrange: 'hsl(31, 77%, 52%)',
				DarkCyan: 'hsl(184, 100%, 22%)',
				VeryDarkCyan: 'hsl(179, 100%, 13%)',
				VeryLightGray: 'hsl(0, 0%, 95%)',
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
