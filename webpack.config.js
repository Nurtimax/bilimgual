// webpack.config.js

const path = require('path');

module.exports = {
   entry: './src/pages/_app.tsx',
   mode: 'development', // entry point of your application
   output: {
      path: path.resolve(__dirname, 'dist'), // output directory
      filename: 'bundle.js' // output file name
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader'
         }
      ]
   }
};
