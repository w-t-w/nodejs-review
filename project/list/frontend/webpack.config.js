const path = require('path');

const OUTPUT_DIR = path.resolve(process.cwd(), './project/list/backend/client/source/static');

const webpack_web_config = {
    mode: 'production',
    devtool: false,
    target: 'web',
    entry: {
        web_index: './project/list/frontend/src/index.js'
    },
    output: {
        publicPath: '.',
        path: OUTPUT_DIR,
        filename: '[name].js',
        chunkFilename: '[name].js',
        library: {
            type: 'umd',
        }
    },
    stats: {
        preset: 'minimal',
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            }]
        }]
    }
};

module.exports = webpack_web_config;
