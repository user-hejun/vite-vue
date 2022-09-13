import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/style.scss";' // 添加公共样式
      }
    }
  },
  server: {
    host: true,
    port: 3000,
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000/',
        changeOrigin: true,
        // ws: true, // 代理websocket
        // secure: true // https 接口
      }
    }
  }
})
