/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				WorkSans: ['"Work Sans"', 'sans-serif'],
			},
			colors: {
				Pink: 'hsl(275, 100%, 97%)',
				GrayishPurple: 'hsl(292, 16%, 49%)',
				DarkPurple: 'hsl(292, 42%, 14%)',
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
	plugins: [],
};
