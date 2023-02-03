const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    devServer: {
        static: {
          directory: path.join(__dirname, 'src/public'),
        },
        compress: true,
        port: 9001,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../dist/second-mfe')
    },
    plugins: [
        new HtmlWebpackPlugin( { template: 'src/public/index.html' } ),
        new ModuleFederationPlugin({
            name: "secondmfe",
            filename: 'remoteEntry.js',
            exposes: {
                "./mfe2": "./src/index.js"
            }
        })
    ]
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
