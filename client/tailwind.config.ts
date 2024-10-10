import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#633cff',
        secondary: '#FFE66D',
        tertiary: '#88D8B0',
        dark: '#2C3A47',
        light: '#efebff',
        lightGray: '#737373'
      },
      screens: {
        tablet: { max: '56.25em' },
        mobile: { max: '48em' }
      }
    }
  },
  plugins: []
};
export default config;
