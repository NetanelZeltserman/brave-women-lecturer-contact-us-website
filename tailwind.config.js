/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(276, 71%, 64%)',
        primaryHover: 'hsl(276, 71%, 54%)',
        secondary: 'hsl(276, 71%, 74%)',
        tertiary: 'hsl(276, 71%, 84%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'emoji-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cimage x='0' y='10' width='40' height='40' href='/img/wings.png'/%3E%3Ctext x='50' y='50' font-size='40'%3E🤍%3C/text%3E%3Ctext x='0' y='90' font-size='40'%3E💜%3C/text%3E%3Ctext x='50' y='90' font-size='40'%3E%3C/text%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
