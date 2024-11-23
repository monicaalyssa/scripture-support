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
      includeAssets: ['favicon.png', 'favicon180.png', 'favicon192.png', 'favicon512.png'],
      manifest: {
        name: "Scripture Support",
        short_name: "Scripture Support",
        description: "Find Comfort and Encouragement in God's Word",
        theme_color: "#ffffff",
        start_url: ".",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/scripture-support/favicon192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/scripture-support/favicon512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
