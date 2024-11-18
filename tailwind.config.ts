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
      grey: {
        400: '#7D7D7D',
        300: '#333333',
      },
      dark: {
        400: '#292929',
        300: 'rgba(41, 41, 41, 0.3)',
      },
      white: {
        400: '#fff',
        500: '#F6F6F6',
      },
      blue: {
        400: '#1C1E24',
        300: '#20222B',
        500: '#17181C',
      },
      orange: {
        400: '#F1A21E',
        500: '#DA8C0A',
      },
      red: {
        400: '#FF0000',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1322px',
    },
    container: {
      center: true,
      padding: '1rem',
      display: 'grid',
      columnGap: '1rem',
    },
    extend: {
      // border: {
      //   px: '1px',
      // },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '0.3s',
      },
      gridTemplateColumns: {
        header: 'auto min-content',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents, theme }) => {
      addComponents({
        '.h1': {
          fontSize: '40px',
          fontWeight: '900',
          lineHeight: '1.2',
          '@media (min-width: 992px)': {
            fontSize: '64px',
          },
          '@media (min-width: 1322px)': {
            fontSize: '96px',
          },
        },
        '.h2': {
          fontSize: '32px',
          fontWeight: '900',
          lineHeight: '1.2',
          '@media (min-width: 992px)': {
            fontSize: '48px',
          },
          '@media (min-width: 1322px)': {
            fontSize: '64px',
          },
        },
        '.h3': {
          fontSize: '24px',
          fontWeight: '900',
          lineHeight: '1.2',
          '@media (min-width: 992px)': {
            fontSize: '36px',
          },
          '@media (min-width: 1322px)': {
            fontSize: '48px',
          },
        },
        '.h4': {
          fontSize: '20px',
          fontWeight: '900',
          lineHeight: '1.3',
          '@media (min-width: 992px)': {
            fontSize: '28px',
          },
          '@media (min-width: 1322px)': {
            fontSize: '36px',
          },
        },
        '.h5': {
          fontSize: '18px',
          fontWeight: '800',
          lineHeight: '1.3',
          '@media (min-width: 992px)': {
            fontSize: '20px',
          },
          '@media (min-width: 1322px)': {
            fontSize: '24px',
          },
        },
        '.h6': {
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '1.5',
          '@media (min-width: 992px)': {
            fontSize: '16px',
          },
        },
        '.interaction': {
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '1.2',
          outline: 'none',
          cursor: 'pointer',
          margin: '0 auto',
        },
      });
    }),
  ],
};
export default config;
