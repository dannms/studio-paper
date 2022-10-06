/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	theme: {
		colors: {
			white: '#DDE5ED',
			black: '#050910',
			gold: '#efbe7d',
		},
		fontFamily: {
			sans: 'Satoshi',
			mono: 'Space Grotesk',
		},

		extend: {
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			},
		},
	},
	plugins: [],
};
