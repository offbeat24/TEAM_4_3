const {
  override,
  overrideDevServer,
  addWebpackPlugin,
} = require("customize-cra");
const CopyPlugin = require("copy-webpack-plugin");
const RewireMultipleEntry = require("react-app-rewire-multiple-entry");

const multipleEntry = RewireMultipleEntry([
  {
    entry: "src/index.js",
    template: "public/index.html",
    outPath: "/popup.html",
  },
  // {
  //   entry: "src/background.js", 
  //   outPath: "/background.js",
  // },
  // {
  //   entry: "src/content.js",
  //   outPath: "/content.js",
  // },
]);

const devServerConfig = () => (config) => {
  return {
    ...config,
    devMiddleware: {
      writeToDisk: true,
    }
  };
};

const copyPlugin = new CopyPlugin({
  patterns: [
    // { from: "public", to: "" },
    { from: "src/background.js", to: "" },
    { from: "src/content.js", to: "" },
  ],
});

module.exports = {
  webpack: override(addWebpackPlugin(copyPlugin), multipleEntry.addMultiEntry),
  devServer: overrideDevServer(devServerConfig()),
};