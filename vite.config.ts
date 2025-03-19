import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // 자동 업데이트 활성화
      devOptions: {
        enabled: true, // 개발 환경에서도 PWA 동작 확인
      },
      manifest: {
        name: "Geuna's portfolio",
        short_name: "Geuna's portfolio",
        description: "Hi, this is Geuna's portfolio",
        theme_color: "#00000000",
        background_color: "#ffffff",
        display: "fullscreen",
        icons: [
          {
            src: "/favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1년
              },
            },
          },
        ],
      },
    }),
  ],
});
