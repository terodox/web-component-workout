const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'current-weather': './current-weather/current-weather.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [
                            path.resolve('./node_modules')
                        ]
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ],
};