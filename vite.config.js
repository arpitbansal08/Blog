// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // base:'/Blog/'
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Default output folder
  },
  resolve: {
    alias: {
      // Ensure paths match your structure
      "@components": "/src/components",
      "@pages": "/src/pages",
    },
  },
});
