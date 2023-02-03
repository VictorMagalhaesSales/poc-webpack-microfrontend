const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    devServer: {
        static: {
          directory: path.join(__dirname, '../../dist'),
        },
        compress: true,
        port: 9000,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../dist/first-mfe')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "firstmfe",
            filename: 'remoteEntry.js',
            exposes: {
                "./home": "./src/index.js"
            }
        })
    ]
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
