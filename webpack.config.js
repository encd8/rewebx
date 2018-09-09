const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
        },
        {
        test: /\.html$/,
        use: [
            {
            loader: "html-loader"
            }
        ]
        }
    ]
    },
    plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.template.html",
        filename: "../../views/index.ejs",
    })
    ]
};