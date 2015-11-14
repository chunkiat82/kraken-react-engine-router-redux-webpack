var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/public/bundle.js'
    ],
    output: {
        path: path.join(__dirname, '.build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.hbs$/,
            loader: "handlebars"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                stage: 0
            }
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        fallback: path.join(__dirname, 'node_modules'),
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            '__DEVELOPMENT__': process.env.NODE_ENV !== 'production'
        })
    ]
};
