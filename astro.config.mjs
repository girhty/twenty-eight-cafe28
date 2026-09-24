import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/twenty-eight-cafe28/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://twenty-eight-cafe28.netlify.app',
});