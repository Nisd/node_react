/**
 * Created by pomy on 15/11/13.
 */

var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
    entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};