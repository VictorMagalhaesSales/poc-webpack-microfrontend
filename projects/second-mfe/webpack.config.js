const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../dist/second-mfe')
    },
    plugins: [
        new HtmlWebpackPlugin( { template: 'src/index.html' } )
    ]
};

module.exports = () => {
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
