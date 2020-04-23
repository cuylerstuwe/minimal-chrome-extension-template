module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        background: "./src/background/background.js",
        popup: "./src/popup/popup.js",
        content: "./src/content/content.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                "babel-loader",
            ],
            enforce: "pre"
        }]
    }
};