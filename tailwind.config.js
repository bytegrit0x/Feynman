/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'feynman-red': '#d9381e',
				'quantum-blue': '#003366',
				'quantum-purple': '#4A148C',
				'quantum-teal': '#006064',
				'quantum-dark': '#121212',
				'quantum-gray': '#1E1E1E',
				'quantum-light': '#E0F7FA'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};