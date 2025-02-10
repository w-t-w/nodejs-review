const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const mfs = require('memory-fs');

const uploader = (
    space_name,
    config_path,
    template_path
) => {
    const SPACE_DIR = path.resolve(process.cwd(), './koaless/business', space_name);
    const TEMPLATE_DIR = path.resolve(SPACE_DIR, 'template.tpl');
    const CONFIG_DIR = path.resolve(SPACE_DIR, 'config.js');
    const mfs_real = new mfs();

    mkdirp.sync(SPACE_DIR);

    fs.createReadStream(template_path, 'utf-8').pipe(fs.createWriteStream(TEMPLATE_DIR));

    const compiler = webpack({
        mode: 'development',
        devtool: false,
        target: 'node',
        entry: config_path,
        output: {
            path: '/config',
            filename: 'config.js'
        },
        module: {
            rules: [{
                test: /\.proto$/,
                use: [{
                    loader: 'text-loader'
                }]
            }]
        }
    });

    compiler.outputFileSystem = mfs_real;

    compiler.run(err => {
        if (err) return false;
        const mfs_content = mfs_real.readFileSync('/config/config.js', 'utf-8');
        fs.writeFileSync(CONFIG_DIR, mfs_content, 'utf-8');
    });
};

module.exports = uploader;
