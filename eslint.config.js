import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import autoImport from './.eslintrc-auto-import.mjs';

export default [
  { files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node, ...autoImport.globals } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-template': 'error',
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
  {
    ignores: [
      '**/snapshot*',
      '**/dist',
      '**/lib',
      '**/es',
      '**/esm',
      '**/node_modules',
      'src/_common',
      '**/static',
      '**/cypress',
      'script/test/cypress',
      '**/_site',
      '**/temp*',
      '**/static/',
      '!**/.prettierrc',
      '**/*.d.ts',
      'src/vite-env.d.ts',
    ],
  },
];