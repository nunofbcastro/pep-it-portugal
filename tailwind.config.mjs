/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Enable dark mode with class strategy
    theme: {
        extend: {
            colors: {
                pep: {
                    red: '#E63946',
                    dark: '#1D3557',
                    light: '#F1FAEE',
                    DEFAULT: '#E63946',
                }
            }
        },
    },
    plugins: [],
}
