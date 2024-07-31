import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    sourcemap: false, // Disable sourcemaps to avoid the errors
    commonjsOptions: {
      include: /node_modules/
    }
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material"],
    exclude: [],
    esbuildOptions: {
      target: 'es2020' // Target modern JavaScript syntax for faster builds
    }
  },
  server: {
    port: 3000, // Default development server port
    open: true, // Open the browser automatically
    hmr: {
      overlay: false // Disable the overlay for errors, adjust based on preference
    }
  },
  preview: {
    port: 5000, // Preview server port
    open: true
  }
});
