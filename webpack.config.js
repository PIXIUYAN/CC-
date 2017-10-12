const path = require('path');

const FastUglifyJsPlugin = require('fast-uglifyjs-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './src/public/js'),
        chunkFilename: '[name].[id].js',
        publicPath: '/public/js/'
    },
    devtool: 'eval-source-map',
    // enable dev server
    devServer: {
        proxy: {
            '/api2': {
                target: 'http://chapter2.zhuishushenqi.com/',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    "^/api2": ""
                }
            },
            "/api": {
                target: "http://api.zhuishushenqi.com",
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        compress: true,
        inline: true,
        progress: true,
        contentBase: path.resolve(__dirname, "./src/")
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: 'babel-loader'
            }, {
                test: /\.[s]?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }, {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=100000'
            }, {
                test: /\.svg$/,
                use: 'react-svg-inline-loader'
            }
        ]
    },

    plugins: [
        new webpack.DllReferencePlugin({context: __dirname, manifest: require('./src/public/js/vendor-mainfest.json')}),
        // new FastUglifyJsPlugin({     compress: {         warnings: false     }, //
        // debug设为true可输出详细缓存使用信息:     debug: true })

    ]
}
