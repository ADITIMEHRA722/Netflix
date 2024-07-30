// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    timeout: 600000, // Increase the timeout if your platform allows
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material"],
    exclude: ["some-heavy-lib"]
  }
});
