/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const fs = require('fs');
const gulp = require('gulp');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');

const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');

const webpack = require('webpack');

gulp.task('browserify', function() {
    browserify('./index.jsx', {
        debug: true,
        plugin: [watchify]
    })
        .transform('babelify', { presets: ['es2015','react'] })
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .pipe(fs.createWriteStream('bundle.js'));
});

gulp.task('watch', function() {
    gulp.watch('./*.jsx', ['browserify'])
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});

gulp.task('webpack', function() {
    var config = require('./webpack.config.js');
    webpack(config, function(err, stats) {
        if (err) {
            console.error('webpack', err);
            return;
        }
        console.log('webpack', stats);
    });
});

gulp.task('default', ['browserify', 'webserver']);