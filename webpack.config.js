const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    toHTML: './src/converters/html/toHTML.js',
    fromHTML: './src/converters/html/fromHTML.js',
    toText: './src/converters/text/toText.js'
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
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['> 0.5%', 'IE 8', 'iOS > 8', 'Safari > 8']
                  }
                }
              ]
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      }
    ]
  }
};
