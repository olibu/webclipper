// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    VitePWA({
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,woff,ttf,woff2,eot,mp3}'],
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'WebClipper',
        short_name: 'WebClipper',
        description: 'WebClipper',
        theme_color: '#121212',
        icons: [
          {
            src: 'wcg192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'wcg512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  base: '/wcg/',
  build: {
    outDir: './wcg',
    // rollupOptions: {
    //   external: [
    //     'workbox-window',
    //   ],
    // },
  },
})
