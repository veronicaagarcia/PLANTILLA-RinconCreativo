/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				COLOR1: "#1A1E2E",
				COLOR2: "#FF3366",
				"COLOR2-dark": "#E62958", // Versión más oscura para mejor contraste
				"COLOR2-accent": "#FFD700", // Dorado que combina con rosa
				COLOR3: "#00C9A7", 
				"COLOR3-dark": "#00A085", // Versión más oscura para mejor contraste
				CBACKGROUND: "#F4F5F7"
			},
			fontFamily: {
        		heading: ['Bebas Neue', 'sans-serif'],
				sans: ['Source Sans Pro', 'sans-serif'],
			},
			screens: {
				xs: "375px",
				s: "470px",
				'2xl': '1440px',
				'3xl': '1600px',
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			},
			keyframes: {
				slideUp: {
				  '0%': { transform: 'translateY(50px)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideUpSoft: {
				  '0%': { transform: 'translateY(30px)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
				fadeInLeft: {
					'0%': { transform: 'translateX(-30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				fadeInRight: {
					'0%': { transform: 'translateX(30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				fadeInUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				fadeInDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				scaleInSoft: {
					'0%': { transform: 'scale(0.98)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				highlight: {
					'0%': { backgroundColor: '#FF3366', transform: 'scaleX(1)' },
					'50%': { backgroundColor: 'rgba(255, 255, 0, 0.5)', transform: 'scaleX(1.05)' },
					'100%': { backgroundColor: '#00C9A7', transform: 'scaleX(1)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '.8' },
				},
				staggerFadeIn: {
					'0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
				},
				parallax: {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-20px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-468px 0' },
					'100%': { backgroundPosition: '468px 0' }
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
					'50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
				},
				heartbeat: {
					'0%': { transform: 'scale(1)' },
					'14%': { transform: 'scale(1.3)' },
					'28%': { transform: 'scale(1)' },
					'42%': { transform: 'scale(1.3)' },
					'70%': { transform: 'scale(1)' }
				},
				breathe: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				swing: {
					'15%': { transform: 'translateX(5px)' },
					'30%': { transform: 'translateX(-5px)' },
					'40%': { transform: 'translateX(3px)' },
					'50%': { transform: 'translateX(-3px)' },
					'65%': { transform: 'translateX(2px)' },
					'100%': { transform: 'translateX(0)' }
				},
				typewriter: {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				reveal: {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px) scale(0.9)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				morphing: {
					'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 51, 102, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(255, 51, 102, 0.8), 0 0 30px rgba(255, 51, 102, 0.6)' }
				}
			},
			animation: {
				slideUp: 'slideUp 0.8s ease-out',
				slideUpSoft: 'slideUpSoft 0.6s ease-out',
				fadeInLeft: 'fadeInLeft 0.8s ease-out',
				fadeInRight: 'fadeInRight 0.8s ease-out',
				fadeInUp: 'fadeInUp 0.6s ease-out',
				fadeInDown: 'fadeInDown 0.6s ease-out',
				scaleIn: 'scaleIn 0.6s ease-out',
				scaleInSoft: 'scaleInSoft 0.4s ease-out',
				highlight: 'highlight 2s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'stagger-1': 'staggerFadeIn 0.6s ease-out 0.1s both',
				'stagger-2': 'staggerFadeIn 0.6s ease-out 0.2s both',
				'stagger-3': 'staggerFadeIn 0.6s ease-out 0.3s both',
				'stagger-4': 'staggerFadeIn 0.6s ease-out 0.4s both',
				'stagger-5': 'staggerFadeIn 0.6s ease-out 0.5s both',
				'stagger-6': 'staggerFadeIn 0.6s ease-out 0.6s both',
				parallax: 'parallax 10s ease-in-out infinite alternate',
				shimmer: 'shimmer 2s linear infinite',
				bounce: 'bounce 1s infinite',
				'fade-in-soft': 'fadeInUp 0.5s ease-out',
				'scale-soft': 'scaleInSoft 0.3s ease-out',
				wiggle: 'wiggle 1s ease-in-out infinite',
				shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
				heartbeat: 'heartbeat 1.5s ease-in-out infinite both',
				breathe: 'breathe 4s ease-in-out infinite',
				swing: 'swing 1s ease-in-out',
				typewriter: 'typewriter 2s steps(20, end)',
				reveal: 'reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				morphing: 'morphing 8s ease-in-out infinite',
				glow: 'glow 2s ease-in-out infinite alternate'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			}
		},
	},
	plugins: [],
}
