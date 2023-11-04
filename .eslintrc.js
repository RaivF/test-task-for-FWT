module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
