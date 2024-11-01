/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				COLOR1: "#1A1E2E",
				COLOR2: "#FF3366",
				COLOR3: "#00C9A7",
				CBACKGROUND: "#F4F5F7"
			},
			fontFamily: {
        		heading: ['Bebas Neue', 'sans-serif'], // Fuente para los H1 y H2
				sans: ['Source Sans Pro', 'sans-serif'],  // Fuente principal para el texto
			},
			screens: {
				s: "470px", // Definir el nuevo breakpoint 's' a partir de 470px
			},
			keyframes: {
				slideUp: {
				  '0%': { transform: 'translateY(100%)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
				highlight: {
					'0%': { backgroundColor: '#FF3366', transform: 'scaleX(1)' },
					'50%': { backgroundColor: 'rgba(255, 255, 0, 0.5)', transform: 'scaleX(1.1)' },
					'100%': { backgroundColor: '#00C9A7', transform: 'scaleX(1)' },
				},
			  },
			animation: {
				slideUp: 'slideUp 1.5s ease-in-out',
				highlight: 'highlight 1s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
