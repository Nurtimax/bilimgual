/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   swcMinify: true,
   webpack: (config, { isServer }) => {
      // Modify the webpack config here
      // Add loaders, plugins, or any other webpack configuration options

      // For example, adding a new loader to handle SVG files
      config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack']
      });

      // Return the modified webpack config
      return config;
   }
};

module.exports = nextConfig;
