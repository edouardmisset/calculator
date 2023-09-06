module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  settings: { react: { version: '18.2' } },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    "semi": ["warn", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
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
    "react/react-in-jsx-scope": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
