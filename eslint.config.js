module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'reports/**',
      'cypress/videos/**',
      'cypress/screenshots/**',
    ],
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        before: 'readonly',
        after: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    },
  },
];
