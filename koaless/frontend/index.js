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

console.log('NodeJS《第三十课: koaless 云函数》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
