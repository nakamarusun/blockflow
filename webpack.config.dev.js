const webpack = require('webpack');
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
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true, // When not found, goes to index.html, not webpack builtin route
        https: false,
        // compress: true,
        // proxy: localhost:xxxx,
        hot: true,
        client: {
            overlay: {  // Show errors in the browser
                warnings: false,
                errors: true,
            },
            progress: true,
        }
    },
    plugins: [
        new webpack.DefinePlugin({ // To pass an environment variable to the main program
            'process.env.API_URL': JSON.stringify("http://localhost:9001"),
        }),
        new HtmlWebpackPlugin({ // Use a single file html template
            template: "src/index.html",
            favicon: "src/favicon.png"
        }),
        new ESLintPlugin({  // Lints the code when packing
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
            }
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"], // So we can import tsx files
    },
}
