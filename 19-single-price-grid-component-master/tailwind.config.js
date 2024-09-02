/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Karla: ['Karla', 'sans-serif'],
			},
			colors: {
				Cyan: 'hsl(179, 62%, 43%)',
				BrightYellow: 'hsl(71, 73%, 54%)',
				LightGray: 'hsl(204, 43%, 93%)',
				GrayishBlue: 'hsl(218, 22%, 67%)',
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
