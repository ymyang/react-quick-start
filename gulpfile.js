/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
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

gulp.task('default', ['webpack']);