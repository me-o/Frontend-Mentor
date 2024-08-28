/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				RedHatDisplay: ['"Red Hat Display"', 'sans-serif'],
			},
			colors: {
				'Pale-blue': 'hsl(225, 100%, 94%)',
				'Bright-blue': 'hsl(245, 75%, 52%)',
				'Very-pale-blue': 'hsl(225, 100%, 98%)',
				'Desaturated-blue': 'hsl(224, 23%, 55%)',
				'Dark-blue': 'hsl(223, 47%, 23%)',
			},
			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
			minWidth: {
				mobile: '375px',
				desktop: '1440px',
			},
			backgroundImage: {
				'mobile-bg': "url('./assets/images/pattern-background-mobile.svg')",
				'desktop-bg': "url('./assets/images/pattern-background-desktop.svg')",
			},
		},
	},
};
