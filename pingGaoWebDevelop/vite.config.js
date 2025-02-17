import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  assetsInclude: ["**/*.ttf"], // 明确包含.ttf文件
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist", //输出目录
    minify: "terser", // 使用Terser进行代码压缩
    assetsDir: "assets", //静态资源目录
    sourcemap: false, //关闭sourcemap以减少体积
    terserOptions: {
      compress: {
        drop_console: true, // 移除console.log
      },
    },
  },
});
