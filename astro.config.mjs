// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(), // React debe ir aquí como una integración
  ],

  output: 'server',
  adapter: vercel(),
});