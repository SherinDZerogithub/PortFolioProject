import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'react-portfolio' with your actual repo name if different
export default defineConfig({
  base: "/PortFolioProject/", // 👈 Add this line
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
