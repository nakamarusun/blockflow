const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    target: 'web',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '',
    },
    devServer: {
        https: false,
        // compress: true,
        // proxy: localhost:xxxx,
        hot: true,
        client: {
            overlay: true,
            progress: true,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.png"
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
            exclude: ['/node_modules/', '/dist/']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            }
        ],
    },
}
