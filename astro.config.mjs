import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// @ts-ignore
// https://astro.build/config
export default defineConfig({
  site: 'https://renpi.cl',
  integrations: [tailwind({}), react(), sitemap()]
});