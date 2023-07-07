/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "first-color": `var(--first-color)`,
        "title-color": `var(--title-color)`,
        "text-color": `var(--text-color)`,
        "body-color": `var(--body-color)`,
        "container-color": `var(--container-color)`,
        "border-color": `var(--border-color)`
      },
      fontSize: {
        h1: ["56px"],
        h2: ["50px"],
        h3: ["24px"],
        tiny: ["12px"],
      },
    },
  },
  plugins: [],
}
