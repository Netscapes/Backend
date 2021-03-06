module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '/src/database/migrations'],
  rules: {
    // enforce no semicolons
    "@typescript-eslint/semi": ["error", "never"],
    // enforce spaces in curly braces
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    // no trailing commas
    '@typescript-eslint/comma-dangle': ["error", "never"],
    // warn on the use of any
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
