module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      extensions: ['.js', '.ts','.tsx', '.ios.js', '.android.js', '.json'],
      node: {
        paths: ['src'],
        alias: {
          "@Actions": "./src/actions",
          "@Assets": "./src/assets",
          "@Components": "./src/components",
          "@Modules": "./src/modules",
          "@Reducers": "./src/reducers",
          "@Screens": "./src/screens",
          "@Services": "./src/services",
          "@Styles": "./src/styles",
          "@Constants": "./src/constants",
          "@Utils": "./src/utils"
        },
      },
    },
  },
};
