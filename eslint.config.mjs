import eslintPluginImport from "eslint-plugin-import-x";
import eslintPluginJs from "@eslint/js";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import globals from "globals";

const config = [
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginJs.configs.recommended,
  eslintPluginStylistic.configs.all,
  {
    "ignores": ["**/*.min.js"]
  },
  {
    "files": ["**/*.js"],
    "languageOptions": {
      "globals": {
        ...globals.browser,
        ...globals.node,
        "$item": "writable",
        "$node": "writable"
      },
      "sourceType": "commonjs"
    },
    "rules": {
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/brace-style": ["error", "1tbs", {"allowSingleLine": true}],
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/indent": ["error", 2],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/newline-per-chained-call": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": ["error", "consistent"],
      "capitalized-comments": "off",
      "consistent-this": "off",
      "line-comment-position": "off",
      "max-lines-per-function": ["warn", 220],
      "max-statements": ["warn", 100],
      "multiline-comment-style": "off",
      "no-await-in-loop": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-plusplus": "off",
      "no-var": "error",
      "one-var": "off",
      "prefer-const": "error",
      "prefer-template": "error",
      "sort-keys": "off",
      "strict": "off"
    }
  },
  {
    "files": ["**/*.mjs"],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        ...globals.node
      },
      "sourceType": "module"
    },
    "rules": {
      "@stylistic/array-element-newline": "off",
      "@stylistic/indent": ["error", 2],
      "max-lines-per-function": ["error", 100],
      "no-magic-numbers": "off",
      "one-var": "off"
    }
  }
];

export default config;
