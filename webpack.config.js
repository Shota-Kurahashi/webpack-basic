const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/access.pug",
      filename: "access.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/members/taro.pug",
      filename: "members/taro.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
