const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"production",
    devtool:"source-map",
    entry: path.join(__dirname, '../src/components/index'),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../dist'),
        library:'RPC',
        libraryTarget:"umd",
        clean: true
    },
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'cssBundle.css'
        })
    ],
}