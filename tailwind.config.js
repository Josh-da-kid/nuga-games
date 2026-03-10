/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				carbon: {
					blue: '#0f62fe',
					'blue-60': '#0043ce',
					'blue-70': '#002d9c',
					'blue-80': '#001d6c',
					gray: '#161616',
					'gray-100': '#e5e5e5',
					'gray-80': '#a8a8a8',
					'gray-70': '#8d8d8d',
					'gray-60': '#6f6f6f',
					'gray-50': '#525252',
					'gray-40': '#393939',
					'gray-30': '#262626',
					'gray-20': '#161616',
					'gray-10': '#0b0b0b'
				}
			},
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif']
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'slide-in': 'slideIn 0.3s ease-out',
				'spin-slow': 'spin 20s linear infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideIn: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			}
		}
	},
	plugins: []
};
