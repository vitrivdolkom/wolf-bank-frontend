import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vike({}), react({}), tailwindcss()],
  build: {
    target: 'es2022'
  },
  resolve: {
    alias: {
      '@/generated': path.resolve(__dirname, './generated'),
      '@': path.resolve(__dirname, './src')
    }
  }
});
