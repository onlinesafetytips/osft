import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Default to "/" for custom-domain GitHub Pages (online-safety-tips.com).
// For project-site deploys (username.github.io/online-safety-site/) set
// VITE_BASE=/online-safety-site/ at build time.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  build: {
    target: 'es2019',
    cssMinify: true,
    sourcemap: false,
  },
});
