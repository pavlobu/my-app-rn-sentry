module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          common: "./src/common",
          api: "./src/api",
          utils: "./src/utils",
          config: "./src/config",
          auth: "./src/auth",
          store: "./src/store",
          storage: "./src/storage",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
