/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
      },
      opacity: {
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
      }
    },
  },
  plugins: [
    function ({ addUtilities, matchUtilities, theme }) {
      // Add utilities for color opacity
      const colorOpacityUtils = {};
      const colorNames = ['primary', 'secondary', 'accent', 'foreground', 'background', 'muted'];
      const opacityValues = theme('opacity');
      
      colorNames.forEach(colorName => {
        Object.entries(opacityValues).forEach(([key, value]) => {
          colorOpacityUtils[`.text-${colorName}\\/${key}`] = {
            'color': `var(--${colorName})`,
            'opacity': value
          };
          colorOpacityUtils[`.bg-${colorName}\\/${key}`] = {
            'background-color': `var(--${colorName})`,
            'opacity': value
          };
          colorOpacityUtils[`.border-${colorName}\\/${key}`] = {
            'border-color': `var(--${colorName})`,
            'border-opacity': value
          };
        });
      });
      
      addUtilities(colorOpacityUtils);
    }
  ],
} 