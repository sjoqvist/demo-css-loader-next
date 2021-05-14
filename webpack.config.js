const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, argv) => ({
  mode: argv.mode,
  entry: {
    system: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
});
