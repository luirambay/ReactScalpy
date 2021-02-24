const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:8000/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    // host: "192.168.1.2",
    open: true,
    port: 8000,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
});
