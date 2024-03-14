import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Yoshi1705.github.io',
  base: '/bootcamp-dev-replica-Yoshi1705',
  integrations: [tailwind()]
});