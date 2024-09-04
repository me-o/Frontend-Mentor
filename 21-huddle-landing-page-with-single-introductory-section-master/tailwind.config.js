/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
				OpenSans: ['"Open Sans"', 'sans-serif'],
			},
			colors: {
				Violet: 'hsl(257, 40%, 49%)',
				SoftMagenta: 'hsl(300, 69%, 71%)',
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
