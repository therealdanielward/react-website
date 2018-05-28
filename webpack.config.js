var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    mode: "development",
    entry: {
      app: SRC_DIR + "/app/index.js"
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                enforce: "pre",
                include: SRC_DIR,
                use: [{
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }]
            }
        ]
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
};

module.exports = config;