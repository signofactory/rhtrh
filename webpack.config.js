const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  context: __dirname,
  entry: {
    bundle: "./src/js/bundle/main.js",
  },
  output: {
    path: __dirname + "/dist/js/",
    filename: "[name].js",
    publicPath: "/",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/, //run through files matching this regex
        exclude: /node_modules/, //exclude these files
        use: {
          loader: "babel-loader", //use a babel loader
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: 3,
                  proposals: true,
                },
              ],
              [
                "@babel/plugin-transform-classes",
                {
                  loose: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
