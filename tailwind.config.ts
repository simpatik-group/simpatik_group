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
      boxShadow: {
        custom: '0 2px 20px 0 rgba(0, 0, 0, 0.05)',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '0.3s',
      },
      gridTemplateColumns: {
        header: 'auto min-content',
      },
      animation: {
        pointer: 'pointer 2s ease-out infinite reverse',
        shake: 'shake 0.6s both',
      },
      keyframes: {
        pointer: {
          '0%': {
            transform: 'translateY(-150%)',
            // opacity: '0.1',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '15%': {
            transform: 'translateX(-3px)',
          },
          '30%': {
            transform: 'translateX(3px)',
          },
          '45%': {
            transform: 'translateX(-5px)',
          },
          '60%': {
            transform: 'translateX(5px)',
          },
          '75%': {
            transform: 'translateX(3px)',
          },
          '90%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents, theme }) => {
      const baseHoverTrail = {
        position: 'relative',
        zIndex: '0',
        '&::after': {
          content: "''",
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          zIndex: '-10',
          transformOrigin: '100% 50%',
          transform: 'scale3d(0, 1, 1)',
          transitionProperty: 'transform',
          transitionDuration: theme('transitionDuration.DEFAULT') || '0.3s',
          transitionTimingFunction:
            theme('transitionTimingFunction.DEFAULT') || 'ease-in-out',
        },
        '&:hover::after': {
          transformOrigin: '0% 50%',
          transform: 'scale3d(1, 1, 1)',
        },
      };

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
        '.btn': {
          fontSize: '16px',
          lineHeight: '1.2',
          fontWeight: '700',
        },
        '.smallTxt': {
          fontSize: '12px',
          lineHeight: 'initial',
          fontWeight: '400',
        },
        '.pageSection': {
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          '@media (min-width: 992px)': {
            paddingTop: '5rem',
            paddingBottom: '5rem',
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
        '.hoverTrail-full': {
          ...baseHoverTrail,
          '&::after': {
            ...baseHoverTrail['&::after'],
            height: '100%',
          },
        },
        '.hoverTrail-px': {
          ...baseHoverTrail,
          '&::after': {
            ...baseHoverTrail['&::after'],
            height: '1px',
            top: '100%',
          },
        },
        '.loader': {
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'inline-block',
          borderTop: '4px solid #fff',
          borderRight: '4px solid transparent',
          '&::before': {
            content: "''",
            position: 'absolute',
            left: '0',
            top: '0',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            borderBottom: '4px solid #F1A21E',
            borderLeft: '4px solid transparent',
          },
        },
      });
    }),
  ],
};
export default config;
