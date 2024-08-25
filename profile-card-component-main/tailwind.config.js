/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				KumbhSans: ['"Kumbh Sans"', 'sans-serif'],
			},
			colors: {
				DarkCyan: 'hsl(185, 75%, 39%)',
				VeryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
				DarkGrayishBlue: 'hsl(227, 10%, 46%)',
				DarkGray: 'hsl(0, 0%, 59%)',
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
