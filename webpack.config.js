const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/, 
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img',
                    publicPath: 'img',
                    emitFile: true,
                    esModule: false
                }
            },
            
        ]
    },
}