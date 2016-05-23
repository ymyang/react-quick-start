/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        commonjs: './commonjs/index.jsx',
        timer: './timer/timer.jsx',
        todo: './todo/todo.jsx'
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'todo.html',
            template: 'todo/todo.html',
            inject: 'body',
            chunks: ['todo']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'commonjs/index.html',
            inject: 'body',
            chunks: ['commonjs']
        }),
        new HtmlWebpackPlugin({
            filename: 'timer.html',
            template: 'timer/timer.html',
            inject: 'body',
            chunks: ['timer']
        })
    ]
};