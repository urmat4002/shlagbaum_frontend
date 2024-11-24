import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shlagbaum_frontend/',
  server: {
    host: '0.0.0.0',
  },
})
