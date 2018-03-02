module.exports = {
  extends: 'standard',
  plugins: ['html'],
  env: {
    browser: true
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'standard/no-callback-literal': 'off'
  }
};
