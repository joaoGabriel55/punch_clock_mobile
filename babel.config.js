module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@test": "./src/test",
            "@utils": "./src/utils",
            "@assets": "./assets"
          },
        },
      ],
    ],
  };
};