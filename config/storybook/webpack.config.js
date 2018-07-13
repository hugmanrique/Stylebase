const paths = require('../paths');

module.exports = (baseConfig, env) => {
  baseConfig.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          minimize: env === 'PRODUCTION',
          localIdentName: '[hash:5]_[local]'
        }
      },
      {
        loader: 'fast-sass-loader',
        options: {
          includePaths: [paths.styleRoot]
        }
      }
    ]
  });

  return baseConfig;
};
