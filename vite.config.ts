import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hana-Healthy-Plate/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
