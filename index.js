const webpack = require('webpack')
const config = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')

let compiler = webpack(config)
let server = new WebpackDevServer(compiler, {
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
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: path.join(__dirname, "src")
})

server.listen(80, ' 101.200.61.162', (err) => {
    console.log('监听80成功')
})
