// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const template = fs.readFileSync(TEMPLATE_DIR);
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
// }));
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.type = 'html';
//     response.body = template;
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十五课: Javascript 代码优化》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');

