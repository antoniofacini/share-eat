module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended', 'plugin:@next/next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 14,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'cypress', 'prettier'],
  rules: {
    'no-tabs': 0,
    'prettier/prettier': 'error',
    semi: 'off',
    'no-useless-escape': 0,
    'comma-dangle': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.js', '.ts', '.tsx']
    }],
    'react/display-name': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/order': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
    'class-methods-use-this': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'react/jsx-props-no-spreading': 0,
    'no-async-promise-executor': 0,
    'no-empty': 0,
    quotes: [2, 'single', {
      avoidEscape: true
    }],
    'jsx-quotes': [2, 'prefer-double'],
    'arrow-parens': [2, 'always', {
      requireForBlockBody: true
    }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-danger': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};