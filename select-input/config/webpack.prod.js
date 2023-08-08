const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
    mode:"production",
    entry: path.join(__dirname, '../src/components/select-input.tsx'),
    output: {
        filename: "select-input.js",
        path: path.join(__dirname, '../dist/src'),
        library:'RPC',
        libraryTarget:"umd",
        libraryExport: 'default'
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ],
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx', '.js' ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'select-input.css'
        })
    ],
    externals: { // 定义外部依赖，避免把react和react-dom打包进去
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
}

module.exports = merge(prodConfig, baseConfig);