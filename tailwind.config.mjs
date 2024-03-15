/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				sOrange: 'hsl(35, 77%, 62%)',
				sRed:'hsl(5, 85%, 63%)',
				oWhite: 'hsl(36, 100%, 99%)',
				gBlue:{
					DEFAULT:'hsl(233, 8%, 79%)',
					dark:'hsl(236, 13%, 42%)',
					vDark:'hsl(240, 100%, 5%)'
				}
			},
			fontFamily:{
				inter: 'Inter Variable, sans-serif',
			}
		},
	},
	plugins: [],
}
