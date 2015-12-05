/* global __dirname */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackConfig = {
    template: __dirname + '/app/index.html',
    inject: 'body'
};

module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./js/app.js"
    },

    output: {
        path: __dirname + "/dist/",
        filename: "js/app.js"
    },

    plugins: [new HtmlWebpackPlugin(htmlWebpackConfig)],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            }
        ]
    }
};