// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 格式说明
    // "【配置项名称】”: [【告警级别】, 【option】]
    
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许使用4个空格的缩进
    "indent": [1, 4, { "SwitchCase": 1 }],
    // 要不要在前后插入空格
    "comma-spacing": [1, { "before": false, "after": true }],
    // 双引号控制问题
    "quotes": [1, "double", { "allowTemplateLiterals": true }],
    "space-before-function-paren": [1],
    "no-multiple-empty-lines": [1],
    "eol-last": [1],
    "no-unused-vars": [1]
  }
}
