const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        publicPath: "/dist/",
        compress: true,
    },
    
};