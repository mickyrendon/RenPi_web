import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import typography from '@tailwindcss/typography';
// @ts-ignore
// https://astro.build/config
export default defineConfig({
  site: 'https://renpi.cl',
  integrations: [tailwind({}), react(), sitemap()],
  plugins: [typography]
});