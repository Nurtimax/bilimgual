const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.join(__dirname, 'src', 'pages', 'index.tsx'),
   mode: 'development',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      fallback: {
         crypto: require.resolve('crypto-browserify'),
         stream: require.resolve('stream-browserify')
      }
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'images/'
                  }
               }
            ]
         }
      ]
   },
   plugins: [new HTMLWebpackPlugin({ filename: 'index.html', template: path.join(__dirname, 'public', 'index.html') })]
};
