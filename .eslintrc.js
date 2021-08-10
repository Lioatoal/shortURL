module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  env: {
    'node': true
  },
  rules: {
    'semi': 0,
    'arrow-parens': 0,
    'no-console': 0,
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'import/prefer-default-export': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'class-methods-use-this': 0,
    'no-await-in-loop': 0,
    'linebreak-style': 0,
    'no-bitwise':0,
  }
}