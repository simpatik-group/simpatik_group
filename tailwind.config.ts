import plugin from 'tailwindcss/plugin';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      main: {
				400: '#292929',
				500: '#333',
				200: '#F6F6F6'
			},
      white: '#fff',
      attention: '#E09D2D',
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '0.3s',
      },
    },
  },
  plugins: [plugin(({ addUtilities, addComponents, theme }) => {
		addComponents({
			'.title': {
				fontSize: '38px',
				fontWeight: '900',
				'@media (min-width: 992px)': {
					fontSize: '64px'
				}
			},
			'.second-title': {
				fontSize: '18px',
				fontWeight: '800',
			},
			'.main-btn': {
				outline: 'none',
				display: 'block',
				cursor: 'pointer',
				margin: '0 auto',
			}
			
		})
	})],
};
export default config;
