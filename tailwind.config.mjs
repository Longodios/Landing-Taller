/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				tallerAzulMarino: '#1B3A4B',
				tallerAmarillo: '#FFD700',
				tallerGrisOscuro: '#2E2E2E',
				tallerPlata: '#B0B0B0'
			}
		},
	},
	plugins: [],
}
