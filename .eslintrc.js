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
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'compat'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/display-name': [0],
    'react/jsx-boolean-value': [0],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, {'maximum': 2, 'when': 'always'}],
    'react/jsx-no-bind': [0],
    'react/no-deprecated': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-did-update-set-state': [2],
    'react/no-direct-mutation-state': [2],
    'react/no-multi-comp': [0],
    'react/no-unescaped-entities': [2],
    'react/jsx-no-duplicate-props': [2, {'ignoreCase': true}],
    'react/prop-types': [0],
    'react/sort-comp': [2, {
      'order': [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'rendering'
      ],
      'groups': {
        'rendering': [
          '/^render.+$/',
          'render'
        ],
        'lifecycle': [
          'contextTypes',
          'childContextTypes',
          'statics',
          'constructor',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never'
    }],
    'react/wrap-multilines': [0]
  }
}
