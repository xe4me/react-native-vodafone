module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./"
        ],
        "alias": {
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
        }
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
};
