/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				VeryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
				DesaturatedDarkBlue: 'hsl(214, 17%, 51%)',
				GrayishBlue: 'hsl(212, 23%, 69%)',
				LightGrayishBlue: 'hsl(210, 46%, 95%)',
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
