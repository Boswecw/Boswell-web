import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { 
    ignores: [
      'dist',
      'build', 
      'node_modules',
      'coverage',
      '*.min.js',
      'public/sw.js',
      'public/workbox-*.js',
      '.netlify',
      '.vercel',
      '**/*.d.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
        ...globals.es2024,
        // Additional globals for web development
        gtag: 'readonly',
        dataLayer: 'readonly',
        requestIdleCallback: 'readonly',
        // Vite globals
        import: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,
      
      // React rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh for Vite HMR
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Variable and import rules
      'no-unused-vars': [
        'error', 
        { 
          varsIgnorePattern: '^React$|^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // React specific customizations
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Using modern React patterns
      'react/no-unescaped-entities': ['error', {
        'forbid': ['>', '"', '}'], // Allow apostrophes
      }],
      'react/jsx-key': ['error', {
        'checkFragmentShorthand': true,
        'checkKeyMustBeforeSpread': true,
      }],
      'react/jsx-no-target-blank': ['error', {
        'allowReferrer': false,
        'enforceDynamicLinks': 'always',
      }],
      'react/self-closing-comp': ['error', {
        'component': true,
        'html': true,
      }],
      'react/jsx-boolean-value': ['error', 'never'],
      
      // Code quality rules
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'no-duplicate-imports': 'error',
      'no-template-curly-in-string': 'error',
      'array-callback-return': 'error',
      'consistent-return': 'error',
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': ['error', {
        'allowShortCircuit': true,
        'allowTernary': true,
      }],
      'no-useless-call': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'error',
      
      // Style rules
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
      'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+'] }],
      
      // Performance and best practices
      'no-new-object': 'error',
      'no-array-constructor': 'error',
      'prefer-template': 'error',
      'prefer-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
      'arrow-spacing': 'error',
      'no-confusing-arrow': ['error', { 'allowParens': true }],
      'no-useless-constructor': 'error',
      'no-dupe-class-members': 'error',
      'object-shorthand': ['error', 'always'],
      
      // Import organization (basic rules)
      'sort-imports': ['error', {
        'ignoreCase': false,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      // Additional settings for better React support
      formComponents: ['CustomForm'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
  },
  // Separate config for config files
  {
    files: ['*.config.{js,cjs,mjs}', '.*rc.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
      'import/no-anonymous-default-export': 'off',
      'semi': 'off',
      'comma-dangle': 'off',
    },
  },
  // Separate config for test files if you add them later
  {
    files: ['**/*.{test,spec}.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];