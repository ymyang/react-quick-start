/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const del = require('del');

gulp.task('clean', (cb) => {
    del('build', cb);
});

gulp.task('webpack', () => {
    let config = require('./webpack.config.js');
    webpack(config, (err, stats) => {
        if (err) {
            console.error('webpack', err);
            return;
        }
        console.log('webpack ok');
    });
});

gulp.task('dev', () => {
    let config = require('./webpack.config.dev.js');
    let server = new WebpackDevServer(webpack(config), {
        hot: true,
        lazy: false,
        proxy: {
            '*': 'http://192.168.0.21'
        }
    });
    server.listen('80', 'localhost', (err) => {
        if (err) {
            console.error('dev:', err);
            return;
        }
        console.log('webpack dev server start');
    });
});

gulp.task('default', ['webpack']);