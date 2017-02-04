'use strict';

var path = require('path');
var webpack = require('webpack');

var javascriptEntryPath = path.resolve(__dirname, 'client', 'index.jsx');
var htmlEntryPath = path.resolve(__dirname, 'client', 'index.html');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'webpack/hot/only-dev-server',
        javascriptEntryPath,
        htmlEntryPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    resolve: {
        root: path.join(__dirname, ''),
        modulesDirectories: [
            'web_modules',
            'node_modules',
            'client',
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
            }
        ],
        noParse: /\.min\.js/,
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};
