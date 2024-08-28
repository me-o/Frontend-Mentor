/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				LeagueSpartan: ['"League Spartan"', 'sans-serif'],
			},
			colors: {
				VeryDarkMagenta: 'hsl(300, 43%, 22%)',
				SoftPink: 'hsl(333, 80%, 67%)',
				DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
				LightGrayishMagenta: 'hsl(300, 24%, 96%)',
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
