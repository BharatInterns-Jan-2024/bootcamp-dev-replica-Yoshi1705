import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://BharatInterns-Jan-2024.github.io',
  base: '/bootcamp-dev-replica-Yoshi1705',
  integrations: [tailwind()]
});