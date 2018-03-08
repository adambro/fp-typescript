module.exports = {
    entry: './main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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
    }
}