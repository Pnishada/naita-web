import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['.ngrok-free.app'], // 👈 Allow Ngrok host
    host: true,                        // 👈 Allow external access (like via Ngrok)
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 👈 Proxy to Django backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
