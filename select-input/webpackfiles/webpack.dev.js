const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"development",
    devtool:"source-map",
    entry: path.join(__dirname, '../src/components/SelectInput/index.tsx'),
    module: {
        rules:[
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets:[
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                        
                },
                exclude: /node_modules/,
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'cssBundle.css'
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '../public'),
        }
    }
}