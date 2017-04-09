// http://eslint.org/docs/user-guide/configuring

var alert_level = 0

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
    'arrow-parens': alert_level,
    // allow async-await
    'generator-star-spacing': alert_level,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许使用4个空格的缩进
    "indent": [alert_level, 4, { "SwitchCase": 1 }],
    // 要不要在前后插入空格
    "comma-spacing": [alert_level, { "before": false, "after": true }],
    // 双引号控制问题
    "quotes": [alert_level, "double", { "allowTemplateLiterals": true }],
    "space-before-function-paren": [alert_level],
    "space-before-blocks": [alert_level],
    "no-multiple-empty-lines": [alert_level],
    "eol-last": [alert_level],
    "no-unused-vars": [alert_level],
    "no-trailing-spaces": [alert_level],
    "padded-blocks": [alert_level]
  }
}
