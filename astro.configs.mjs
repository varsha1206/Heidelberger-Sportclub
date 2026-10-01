import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://varsha1206.github.io',
  base: '/Heidelberger-Sportclub',
  integrations: [react()],
});