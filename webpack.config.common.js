const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      chunkFilename: "css/[id].css",
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["app"],
      inject: true,
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          fallback: "file-loader",

          name: "assets/[name].[hash].[ext]",
        },
      },
    ],
  },
};
