// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignore build artifacts
  { ignores: ['dist', 'build', 'node_modules'] },

  // Base JS recommendations
  js.configs.recommended,

  // React JSX rules for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // Your styles from earlier diagnostics:
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'react/self-closing-comp': 'error',

      // Keep member sorting inside braces, but don’t reorder whole import lines
      'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],

      // Optional: organize groups and alphabetical order across import lines
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        },
      ],

      // React recommendations
      ...reactHooks.configs.recommended.rules,
      // Disable legacy requirement for React in scope with JSX
      'react/react-in-jsx-scope': 'off',
    },
  },
];
