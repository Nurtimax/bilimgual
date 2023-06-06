/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   swcMinify: true,
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.(ts|js)x?$/,
         exclude: /node_modules/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-typescript', '@babel/preset-env']
            }
         }
      });

      return config;
   },
   env: process.env.NEXTAUTH_URL
};

module.exports = nextConfig;
