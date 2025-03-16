import path, { resolve } from 'path';
import { defineConfig, loadEnv, UserConfig, ConfigEnv, type PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VantResolver } from '@vant/auto-import-resolver';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Info from 'unplugin-info/vite';
import Components from 'unplugin-vue-components/vite';
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
import viteCompression from 'vite-plugin-compression';
import OptimizeExclude from 'vite-plugin-optimize-exclude';
import { qrcode } from 'vite-plugin-qrcode';
import { viteVConsole } from 'vite-plugin-vconsole';
import { createMpaPlugin, createPages } from 'vite-plugin-virtual-mpa';
import VueDevTools from 'vite-plugin-vue-devtools';
import pages from './pages.config';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('====build-env====', env.VITE_ENV_NAME);
  console.log('====mode====', mode);
  console.log('====command====', command);
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
      }),
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router'],
        resolvers: [VantResolver()],
        vueTemplate: false,
        viteOptimizeDeps: true,
      }),
      viteCompression(),
      visualizer({ open: false }) as PluginOption,
      importToCDN({
        modules: [
          // {
          //   name: "lodash-es",
          //   var: "lodash",
          //   path: "https://unpkg.com/lodash-es@4.17.21/lodash.js",
          // },
        ],
      }),
      VueDevTools(),
      createMpaPlugin({
        pages: createPages(pages),
      }),
      Info(),
      // OptimizeExclude(),
      viteVConsole({
        entry: [...pages.map((page) => path.resolve(page.entry!.slice(1)))],
        enabled: mode === 'production',
        config: {
          maxLogNumber: 1000,
        },
      }),
      qrcode(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
          entryFileNames: 'js/entry.[name].[hash].js',
          chunkFileNames: 'js/chunk.[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },

        // external: ["lodash-es"],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
      // postcss: {
      //   plugins: [],
      // },
    },
    server: {
      open: 'index.html',
      // port: 3002,
      // host: "0.0.0.0",
      // proxy: {
      //   [VITE_API_URL_PREFIX]: "http://127.0.0.1:3000/",
      // },
    },
  };
});
