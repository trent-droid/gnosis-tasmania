import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  site: 'https://gnosistasmania.com.au',
  output: 'static',
  trailingSlash: 'never',
  integrations: [react()],
  vite: {
    plugins: [imagetools()],
  },
})
