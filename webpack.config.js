const path = require('path');
const UglifyJSPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        base: './src/base',
        bundle: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './src/public/js'),
        chunkFilename: '[name].[id].js',
        publicPath: '/public/js/'
    },
    devtool: 'eval-source-map',
    // enable dev server devServer: {     proxy: {         '/api2': { target:
    // 'http://chapter2.zhuishushenqi.com/',             secure: false,
    // changeOrigin: true,             pathRewrite: { "^/api2": ""             } },
    //      "/api": {             target: "http://api.zhuishushenqi.com",
    // pathRewrite: { "^/api": ""             }         }     }, compress: true,
    // inline: true,     progress: true,     contentBase: path.resolve(__dirname,
    // "./src/") },
    resolve: {
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤 其中 __dirname 表示当前工作目录，也就是项目根目录
        modules: [path.resolve(__dirname, 'node_modules')],
        // 只采用 main 字段作为入口文件描述字段，以减少搜索步骤
        mainFields: ['jsnext:main', 'main']
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
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
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
        new DefinePlugin({
            // 定义 NODE_ENV 环境变量为 production 去除 react 代码中的开发时才需要的部分
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        // 提取公共代码
        new CommonsChunkPlugin({
            // 从 bundle 和 base 两个现成的 Chunk 中提取公共的部分
            chunks: [
                'base', 'bundle'
            ],
            // 把公共的部分放到 base 中
            name: 'base'
        }),
        // 压缩输出的 JS 代码
        new UglifyJSPlugin({
            compress: {
                // 在 UglifyJS 删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true

            },
            output: {
                // 最紧凑的输出
                beautify: true,
                // 删除所有的注释
                comments: false
            }
        })

    ]
}
