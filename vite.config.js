import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'DesainCV',
        short_name: 'DesainCV',
        description: 'Desain CV Toploker',
        theme_color: '#344767',
        icons: [
          {
            src: '/assets/favicon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/favicon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
