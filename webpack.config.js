const webpack = require("webpack")
const path = require("path")

const MODE = process.env.NODE_ENV || "development"
const DEV = MODE == "development"

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  entry: {
    main: [__dirname + "/src/index"]
  },
  output: {
    path: __dirname + "/public",
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}