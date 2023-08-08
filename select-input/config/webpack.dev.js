const path = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
    mode:"development",
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'dev.js'
    },
    module: {
        rules: [
            {
              test: /.s[ac]ss$/,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
              exclude: /node-modules/  
            }
            
        ],
        
    },
    resolve: {
            extensions: ['.ts','.tsx', '.js', 'jsx' ],
        },
    devServer: {
            port: 8000,
            static: {
                directory: path.join(__dirname, '../dist'),
            },
            hot: true,
            open: true,
            host: 'localhost'
        }
}
module.exports = merge(devConfig, baseConfig)