import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@paralleldrive/alloy-tokens': resolve(__dirname, 'packages/tokens/src/index.ts'),
      '@paralleldrive/alloy-components': resolve(__dirname, 'packages/components/src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['packages/*/src/**/*.test.{ts,tsx}'],
    globals: false,
  },
});
