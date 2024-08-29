/** @type {import('tailwindcss').Config} */

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				JosefinSans: ['Josefin Sans', 'sans-serif'],
			},
			colors: {
				DesaturatedRed: 'hsl(0, 36%, 70%)',
				SoftRed: 'hsl(0, 93%, 68%)',
				DarkGrayishRed: 'hsl(0, 6%, 24%)',
			},
			backgroundImage: {
				'gradient-to-135-white': 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
				'gradient-to-135-pink': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
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
