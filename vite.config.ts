// vite.config.ts
// REPLACE EVERYTHING in this file with this exact code

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
