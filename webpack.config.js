/* global __dirname */
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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

    plugins: [
        new HtmlPlugin(htmlWebpackConfig),
        new ExtractTextPlugin("styles.css")
    ],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", ["css", "autoprefixer", "sass"])
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            }
        ]
    }
};