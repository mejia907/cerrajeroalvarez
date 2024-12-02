// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://cerrajeroluis24horas.com',
  integrations: [tailwind(), icon(), react(),
  sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: { es: 'es-ES', en: 'en-US', fr: 'fr-CA' },
    }
  })
  ],
});