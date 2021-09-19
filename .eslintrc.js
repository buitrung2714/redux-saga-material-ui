module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: 1,
    quotes: [1, "double"],
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/state-in-constructor": 0,
    "class-methods-use-this": 0,
    "comma-dangle": 0,
    "react/jsx-one-expression-per-line": 0,
    "arrow-parens": 0,
    "object-curly-newline": 0,
  },
};
