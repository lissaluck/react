var path = require("path");

module.exports = {
    entry: "./main.js",
    output: {
        path: path.join( __dirname , "dist"),
        filename: "index.bundle.js"
    }, 
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}