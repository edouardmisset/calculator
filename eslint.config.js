import eslint from '@eslint/js'
import React from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  ),
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}', '*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: React,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      semi: ['warn', 'never'],
      'arrow-parens': ['warn', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          typedefs: true,
          ignoreTypeReferences: false,
          functions: true,
          allowNamedExports: false,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'react/prop-types': 'off',
    },
  },
].map(config => ({
  ...config,
  ignores: ['dist/**/*', 'release.config.cjs'],
}))
