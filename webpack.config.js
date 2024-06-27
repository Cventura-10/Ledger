const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, 'src/assets')
    }
  };

  config.module.rules.push(
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }
      ]
    }
  );

  return config;
};
