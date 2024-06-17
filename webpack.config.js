const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: { // This section is added for resolving the '@assets' alias
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'], // This rule is used for processing SVG files with SVGR and Webpack
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // All image assets will be output to the 'dist/assets' directory
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets used for compiling modern JavaScript and React
          },
        },
      },
    ],
  },
};
