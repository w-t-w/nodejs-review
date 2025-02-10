const path = require('path');
const uploader = require('./uploader');

const SOURCE_DIR = path.resolve(process.cwd(), './koaless/source/play');
const CONFIG_DIR = path.resolve(SOURCE_DIR, 'config/index.js');
const TEMPLATE_DIR = path.resolve(SOURCE_DIR, 'template/index.html');

uploader(
    'play',
    CONFIG_DIR,
    TEMPLATE_DIR
);
