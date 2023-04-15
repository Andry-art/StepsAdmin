module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "arrow-parens": ["warn", "as-needed"],
    "prettier/prettier": "warn",
    "no-console": "warn",
    "no-param-reassign": ["error", { props: false }],
    "require-await": "error",
    "spaced-comment": ["warn", "always"],
    "no-unused-expressions": ["warn", { allowShortCircuit: true }],
    "jest/no-disabled-tests": "off",
  },
  ignorePatterns: [
    "coverage/",
    "build/",
    "dist/",
    "node_modules",
    "android/",
    "ios/",
    "__mocks__/",
    ".github/",
  ],
};
