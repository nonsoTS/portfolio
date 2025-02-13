import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/studybud': {
        target: 'https://flaskpg-dictionary.herokuapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/studybud/, ''),
      },
      '/topup': {
        target: 'https://topupng-fpl-site.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/topup/, ''),
      },
    },
  },
})
