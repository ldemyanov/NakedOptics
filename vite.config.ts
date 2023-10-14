import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lang': path.resolve(__dirname, 'src/lang'),
      '@static': path.resolve(__dirname, 'src/static'),
    },
  },
  plugins: [react(), svgr()],
});
