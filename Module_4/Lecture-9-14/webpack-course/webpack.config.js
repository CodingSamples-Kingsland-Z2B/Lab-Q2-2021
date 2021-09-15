const path = require('path');

module.exports = {
    mode: 'production',
    entry: [path.resolve(__dirname, 'src/app.js'),path.resolve(__dirname, 'src/dep-for-page-1.js')],
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        watchContentBase:true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};