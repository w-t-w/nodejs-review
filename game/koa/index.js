// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
// const moduleLibrary = require('./lib');
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const koa = new Koa();
//
// koa.use(KoaMount('/favicon.ico', (ctx) => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
// }));
//
// koa.use(KoaMount('/game', moduleLibrary.koa.gameKoa));
//
// koa.use(KoaMount('/', (ctx) => {
//     const {response} = ctx;
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十四课: 采用 async/await 请求处理剪刀、石头与布的网页游戏》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
