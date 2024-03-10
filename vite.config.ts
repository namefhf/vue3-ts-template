import { defineConfig, loadEnv, UserConfig, ConfigEnv, type PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
import viteCompression from 'vite-plugin-compression';

import path, { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import VueDevTools from 'vite-plugin-vue-devtools';
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log('====build-env====', env.VITE_ENV_NAME);

  const BASE_MAP = {
    development: '/',
    sit: 'https://www.sit.com/',
    production: 'https://www.production.com/',
  };

  const base = BASE_MAP[env.VITE_ENV_NAME];
  console.log('====base====', base);
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
        //要想在项目中优雅地使用自动导入，还要解决以下两个编码的问题：
        //TS 类型丢失，会导致 TS 编译报错
        //插件会在项目根目录生成类型文件 auto-imports.d.ts ，确保该文件在 tsconfig 中被 include
        dts: true,
        imports: ['vue', 'vue-router'],
        resolvers: [VantResolver()],

        //插件会在项目根目录生成类型文件 .eslintrc-auto-import.json ，确保该文件在 eslint 配置中被 extends：
        // .eslintrc.js
        // module.exports = {
        //   extends: [
        //     './.eslintrc-auto-import.json',
        //   ],
        // }

        // eslintrc: {
        //   enabled: true,
        // },
      }),
      UnoCSS({
        /* options */
      }),
      viteCompression(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visualizer({ open: true }) as any,
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
    ],
    build: {
      rollupOptions: {
        /*多页打包配置*/
        // input: {
        //   main: resolve(__dirname, 'index.html'),
        //   pageA: resolve(__dirname, 'pages/pageA/index.html'), //http://localhost:5173/pages/pageA/
        // },
        output: {
          manualChunks: {
            vue: ['vue'],
          },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: 'js/[name].[hash].js',
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: 'js/[name].[hash].js',
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },

        // 不打包依赖
        // external: ["lodash-es"],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            /*全局less变量 */
            hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [],
      },
    },
    server: {
      // port: 3002,
      // host: "0.0.0.0",
      // proxy: {
      //   [VITE_API_URL_PREFIX]: "http://127.0.0.1:3000/",
      // },
    },
  };
});
