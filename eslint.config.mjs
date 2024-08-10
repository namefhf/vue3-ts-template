import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
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
  {
    files: [['**/*.{js,mjs,cjs,ts,jsx,tsx,vue}']],
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ),
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        allowImportExportEverywhere: true,

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'vue/html-self-closing': 'off',

      'vue/max-attributes-per-line': [
        'off',
        {
          singleline: {
            max: 2,
          },

          multiline: {
            max: 1,
          },
        },
      ],

      'vue/singleline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'off',
      'prefer-template': 'error',
    },
  },
];
