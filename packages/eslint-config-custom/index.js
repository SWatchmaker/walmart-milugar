module.exports = {
  extends: ["turbo", "prettier", "plugin:react/recommended"],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    "react/jsx-key": "off",
  },
};
