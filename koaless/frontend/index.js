// const fs = require('fs');
// const path = require('path');
// const run = require('./run');
//
// const CONFIG_DIR = path.resolve(__dirname, '../business/play/config.js');
// const TEMPLATE_DIR = path.resolve(__dirname, '../business/play/template.tpl');
//
// (async () => {
//     const config = await new Promise((resolve, reject) => {
//         fs.readFile(CONFIG_DIR, 'utf-8', (err, data) => {
//             err ? reject(err) : resolve(data);
//         })
//     });
//
//     const template = await new Promise((resolve, reject) => {
//         fs.readFile(TEMPLATE_DIR, 'utf-8', (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     run({
//         '/play': {
//             config,
//             template
//         }
//     });
// })();


