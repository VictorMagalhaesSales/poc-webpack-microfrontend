const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    devServer: {
        static: {
          directory: path.join(__dirname, '../../dist'),
        },
        compress: true,
        port: 8001,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/poc-webpack-microfrontend')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( { template: 'src/public/index.html' } ),
        new ModuleFederationPlugin({
            name: "poc-webpack-microfrontend",
            remotes: {
                "firstmfe": "firstmfe@http://localhost:9000/remoteEntry.js",
                "secondmfe": "secondmfe@http://localhost:9001/remoteEntry.js"
            }
        })
    ]
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
