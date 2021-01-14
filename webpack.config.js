var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },

  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
};










