import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import autoImport from './.eslintrc-auto-import.mjs';

export default defineConfig(
  {
    name: 'my-eslint-config',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node, ...autoImport.globals } },
    extends: [pluginJs.configs.recommended, tseslint.configs.recommended, pluginVue.configs['flat/essential']],
    rules: {
      'no-undef': 'off',
      'prefer-const': 'error',
      'prefer-template': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        allowImportExportEverywhere: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  globalIgnores([
    '**/snapshot*',
    '**/dist',
    '**/lib',
    '**/es',
    '**/esm',
    '**/node_modules',
    '**/static',
    '**/cypress',
    'script/test/cypress',
    '**/_site',
    '**/temp*',
    '**/static/',
    '!**/.prettierrc',
    '**/*.d.ts',
    'src/vite-env.d.ts',
  ]),
);
