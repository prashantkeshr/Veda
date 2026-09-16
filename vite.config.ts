import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg', 'icon.svg', 'veda-logo.png', 'veda-logo-sm.png', 'veda-logo.svg'],
      manifest: {
        name: 'VEDA — Vital Education & Data Archive',
        short_name: 'VEDA',
        description: 'Free knowledge platform for GATE, JEE, UPSC-ESE and engineering degree preparation. By the Virtual Education Development Association, an initiative of Dhurta.Org.',
        theme_color: '#7e14ff',
        background_color: '#0c0a09',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/veda-logo.png',
            sizes: '979x979',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/veda-logo.png',
            sizes: '979x979',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/veda-logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,svg,json,woff2}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
