/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				COLOR1: "#2E384D",                    
				COLOR2: "#F77AD4",
				COLOR3: "#3AB0FF",
				BACKGROUND: "#F7F9FC"

			},
			fontFamily: {
        		heading: ['Patrick Hand', 'cursive'], // Fuente para los H1 y H2
				sans: ['Overpass', 'sans-serif'],  // Fuente principal para el texto
			},
			screens: {
				s: "470px", // Definir el nuevo breakpoint 's' a partir de 470px
			},
			keyframes: {
				slideUp: {
				  '0%': { transform: 'translateY(100%)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
			  },
			animation: {
				slideUp: 'slideUp 1.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
