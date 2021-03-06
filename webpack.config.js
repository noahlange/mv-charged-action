const { BannerPlugin } = require('webpack');

const banner = `

  Plugin enabling variable-duration skill charges.
  Loosely patterned off of Victor Sant's ChargeActions plugin.
  You'll need to have Plugsy installed in order to use this plugin.

`.trim();

module.exports = {
  mode: 'development',
  entry: {
    charge: './src/index.ts'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  optimization: {},
  plugins: [
    new BannerPlugin({ banner })
  ],
  externals: {
    plugsy: 'plugsy'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }]
  }
};
