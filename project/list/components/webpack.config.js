const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, './build');

const webpack_components_config = {
    mode: 'production',
    devtool: false,
    target: 'web',
    entry: {
        components_index: './project/list/components/src/index.js'
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

module.exports = webpack_components_config;
