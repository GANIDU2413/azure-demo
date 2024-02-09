import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
    // You might want to specify other options such as host, https, etc.
    // For example:
    // host: 'yourhostname.com',
    // https: true,
  },
  plugins: [react()],
});