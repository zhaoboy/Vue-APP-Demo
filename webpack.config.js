const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  }
};
