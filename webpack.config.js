const path = require("path");
const HtmlWebpackPlugni = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode:"development",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugni({
            template: "./src/page.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
        ],
    },
};