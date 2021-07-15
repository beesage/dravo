const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devServer: {
    //Webpack comes bundled with development servers, so we can run it and see it on browser
    port: 5000,
    contentBase: "./dist",
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
});
