'use strict';

var path = require('path');
var express = require('express');

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();

if (isDeveloping) {
    var webpack = require('webpack');
    var webpackMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var config = require('./webpack.config.js');

    var compiler = webpack(config);
    var middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        quiet: false,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true,
        }
    });

    var bundlePath = path.join(__dirname, './public/build/index.html');

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(bundlePath));
        res.end();
    });
} else {
    var staticPath = path.join(__dirname, 'public/build')
    app.use(express.static(staticPath));
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
