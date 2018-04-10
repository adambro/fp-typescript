var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: { main: './main.ts',
             libs: './index.ts' },
    output: {
        path: __dirname + '/dist',
        filename: '[hash].[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules:[
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader'
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}