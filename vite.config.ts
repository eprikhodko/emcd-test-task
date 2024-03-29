import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

const root = resolve(__dirname, "src");

export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [vue()],

  resolve: {
    alias: {
      "@src": root,
      "@": fileURLToPath(new URL(root, import.meta.url)),
    },
  },

  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".woff")) {
            return "fonts/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
