/* global __dirname */
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var htmlWebpackConfig = {
    template: __dirname + '/app/index.html',
    inject: 'body'
};

var config = {
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

    resolve: {
        extensions: ['',  '.webpack.js', '.web.js', '.js', '.jsx', '.scss']
    },

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

//Production build
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
}

module.exports = config;
