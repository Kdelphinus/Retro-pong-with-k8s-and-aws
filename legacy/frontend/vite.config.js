import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  publicDir: '../public',
  envDir: '../',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 443,
    strictPort: true,
    hmr: {
      clientPort: 443,
      port: 443,
    },
    mimeType: {
      'audio/mpeg': ['mp3'],
      'image/svg+xml': ['svg'],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
    ],
  },
};
