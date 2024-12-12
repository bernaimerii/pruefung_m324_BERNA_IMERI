import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions:
      {
        globals:
          {
            ...globals.browser,
            ...globals.mocha,
          },
      },
  },
  pluginJs
    .configs
    .recommended,
  {
    rules:
      {
        eqeqeq:
          [
            'error',
            'always',
          ], // Enforce === and !== over == and !=
        'no-unused-vars':
          [
            'error',
          ], // Error for unused variables
        'prefer-const':
          [
            'error',
          ], // Enforce const for variables that are never reassigned
        'no-var':
          'error', // Disallow the use of var
      },
  },
];
