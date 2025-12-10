import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        video_editor_remote: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true },
      },
      'react-dom': {
        singleton: true,
        eager: true,
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
    cors: true,
  },
});
