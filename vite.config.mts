/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      angular(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['src/**/*.spec.ts'],
      reporters: ['default'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // See https://stackoverflow.com/a/79003101/15482430
        }
      }
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
