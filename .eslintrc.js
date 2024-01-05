module.exports = {
  extends: ['plugin:testing-library/react'],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        tabWidth: 2,
      },
    ],
    'max-lines-per-function': [
      'warn',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-throw-literal': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/no-array-index-key': 'error',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react-hooks/rules-of-hooks': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-node-access': 'error',
  },
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
