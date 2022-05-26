const webpack = require("webpack");
global.crypto = require("crypto");

module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: ["@emotion/babel-plugin"],
  },
  jest: {
    configure: {
      snapshotSerializers: ["@emotion/jest/serializer"],
    },
  },
  // webpack: {
  //   configure: {
  //     // HACK: ignores the alchemy/web3 on Webpack 5 sourcemap errors until we can fix
  //     ignoreWarnings: [/Failed to parse source map/],
  //     resolve: {
  //       fallback: {
  //         crypto: require.resolve("crypto-browserify"),
  //         http: false,
  //         https: false,
  //         process: false,
  //         zlib: require.resolve("browserify-zlib"),
  //         stream: require.resolve("stream-browserify"),
  //         util: require.resolve("util"),
  //         buffer: require.resolve("buffer"),
  //         asset: require.resolve("assert"),
  //       },
  //     },
  //     plugins: [
  //       new webpack.ProvidePlugin({
  //         Buffer: ["buffer", "Buffer"],
  //         process: "process/browser",
  //       }),
  //     ],
  //   },
  // },
};
