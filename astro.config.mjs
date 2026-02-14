import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    output: 'static',
    site: 'https://nunofbcastro.github.io',
    base: '/pep-it-portugal',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});
