// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
// }));
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十四课: tools 测试性能工具 - ab 》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
