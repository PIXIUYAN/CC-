const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/public/js')
    },
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: path.join(__dirname, "src"),
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [{
                test: /\.js[x]?$/,
                use: 'babel-loader'
            },
            {
                test: /\.[s]?css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',

                    },
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.svg$/,
                use:  'react-svg-inline-loader'
                     
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./template.html")
        })
    ]
}