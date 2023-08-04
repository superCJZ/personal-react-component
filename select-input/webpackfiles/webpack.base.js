const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        filename: "static/js/[name].js",
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath:'/'
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
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
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
        })
    ]
}