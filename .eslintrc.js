module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: [
    'jest',
    'filenames',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  overrides: [{
    files: ['*.js', 'webpack-config/**/*.js'],
    rules: {
      'filenames/match-regex': 0,
      'filenames/match-exported': 0,
      'react/prop-types': 0,
    },
  }, {
    files: ['server/**/*.*'],
    rules: {
      'no-console': 'off',
    },
  }, {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-shadow': [2],
      '@typescript-eslint/no-unused-vars': 2,
      'no-shadow': 0,
    },
  }],
  ignorePatterns: ['dist/**/*.*'],
  rules: {
    'filenames/match-regex': [2, '^[a-zA-Z_.]+$'],
    'filenames/match-exported': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either',
    }],
    'no-console': [
      'error',
      { allow: ['warn', 'error'] },
    ],
    'no-restricted-syntax': 'off',
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'wrap-iife': [
      'error',
      'inside',
      { functionPrototypeMethods: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
      alias: {
        map: [
          ['app', './app'],
          ['pages', './pages'],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
