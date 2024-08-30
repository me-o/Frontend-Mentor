/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				Red: 'hsl(0, 100%, 74%)',
				Green: 'hsl(154, 59%, 51%)',
				Blue: 'hsl(248, 32%, 49%)',
				DarkBlue: 'hsl(249, 10%, 26%)',
				GrayishBlue: 'hsl(246, 25%, 77%)',
			},
			backgroundImage: {
				'mobile-bg': "url('./assets/images/bg-intro-mobile.png')",
				'desktop-bg': "url('./assets/images/bg-intro-desktop.png')",
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
