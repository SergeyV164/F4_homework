const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    mode: 'development',
    devServer: {
        static: "./dist",
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Developmaent",
            template: "./src/index.html"
        })
    ]
}