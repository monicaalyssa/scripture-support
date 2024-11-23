import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.png', 'favicon180.png'],
      manifest: {
        name: "Scripture Support",
        short_name: "SS",
        description: "Find Comfort and Encouragement in God's Word",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/favicon192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicon512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
