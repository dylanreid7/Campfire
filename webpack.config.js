const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        exclude: path.resolve(__dirname, 'node_modules/', 'data/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  node: {
    'fs': 'empty',
    'net': 'empty'
  }
};