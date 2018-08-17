const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    toHTML: './src/converters/html/fromHTML.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
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
      }
    ]
  }
};
