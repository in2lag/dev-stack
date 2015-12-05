/* global __dirname */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackConfig = {
    template: __dirname + '/app/index.html',
    inject: 'body'
};

module.exports = {
    context: __dirname + "/app",
    entry: "./app.js",

    output: {
        path: __dirname + "/dist/",
        filename: "app.js"
    },

    plugins: [new HtmlWebpackPlugin(htmlWebpackConfig)],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "autoprefixer", "sass"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            }
        ]
    }
};