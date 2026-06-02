import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        produto: resolve(__dirname, 'produto.html'),
        checkout: resolve(__dirname, 'checkout.html'),
      },
    },
  },
});
