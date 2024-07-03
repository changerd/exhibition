import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    ignores: ['node_modules', 'dist']
  },
  {
    files: ["**/*.js"],
    rules: {
      
    },
    languageOptions: {sourceType: "commonjs"}
  },
  {
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022
      },
      parserOptions: pluginJs.configs.recommended.parserOptions
    }
  },
  pluginJs.configs.recommended,
];