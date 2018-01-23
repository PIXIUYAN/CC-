const webpack = require('webpack')
const config = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
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
            target: "http://api.zhuishushenqi.com/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: path.join(__dirname, "src")
})

server.listen(8080, '0.0.0.0', (err) => {
    console.log('监听8080成功')
})
 