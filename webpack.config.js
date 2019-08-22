const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    toHTML: './src/converters/html/toHTML.js',
    toText: './src/converters/text/toText.js',
    reactContentTransformer: './src/react.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['> 0.5%', 'IE 8', 'iOS > 8', 'Safari > 8']
                  }
                }
              ]
            ],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'stage-2', 'react']
          }
        }
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  }
};
