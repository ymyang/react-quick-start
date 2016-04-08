/**
 * Created by yang on 2016/4/4.
 */

module.exports = {
    entry: {
        commonjs: './commonjs/index.jsx',
        timer: './timer/timer.jsx',
        app: './app/app.jsx'
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
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};