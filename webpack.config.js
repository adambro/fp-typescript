module.exports = {
    entry:"./index.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts",".js"]
    },
    module: {
        rules: [
            {test: /\.ts?$/ , loader: "ts-loader"}
        ]
    }
}