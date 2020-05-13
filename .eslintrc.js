module.exports = {
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/recommended',
    'prettier/unicorn',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ['tsconfig.eslint.json'],
    sourceType: 'module',
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          // Only allow snake_case_names
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',

  },
  plugins: [
    '@typescript-eslint',
    'jsdoc',
    'import',
    'unicorn',
    'security',
  ],
}
