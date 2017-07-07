const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('Html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vender: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Output Management',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader"
        }]
    },
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false,
            }
        }
    }
};