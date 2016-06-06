/**
 * Created by yang on 2016/4/4.
 */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        commonjs: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './commonjs/index.jsx'
        ],
        timer: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './timer/timer.jsx'
        ],
        todo: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './todo/todo.jsx'
        ],
        router: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './react-router/router.jsx'
        ],
        redux: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './redux/index.js'
        ],
        async: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost',
            './async-app/index.js'
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'todo.html',
            template: 'index.html',
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
            template: 'index.html',
            inject: 'body',
            chunks: ['timer']
        }),
        new HtmlWebpackPlugin({
            filename: 'router.html',
            template: 'index.html',
            inject: 'body',
            chunks: ['router']
        }),
        new HtmlWebpackPlugin({
            filename: 'redux.html',
            template: 'index.html',
            inject: 'body',
            chunks: ['redux']
        }),
        new HtmlWebpackPlugin({
            filename: 'async.html',
            template: 'index.html',
            inject: 'body',
            chunks: ['async']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};