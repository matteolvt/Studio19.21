import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,jsx}"], // applique uniquement aux fichiers JS/JSX
    plugins: { react: pluginReact },
    extends: ["plugin:react/recommended"],
    settings: {
      react: {
        version: "detect", // détecte automatiquement la version de React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // plus besoin d'import React
    },
  },
]);