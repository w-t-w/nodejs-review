// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
// const {graphqlHTTP} = require('koa-graphql');
// const schema = require('./schema');
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './source');
//
// const PORT = 3000;
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
// koa.use(KoaMount('/api', graphqlHTTP({
//     schema,
// })))
//
// koa.use(KoaMount('/', ctx => {
//     const {response} = ctx;
//     response.status = 200;
//     response.type = 'html';
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第二十二课: 极客时间 video 视频部分网页项目练习》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
