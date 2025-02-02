// const path = require('path');
// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
// const socket = require('./lib');
// const templateSource = require('./template');
//
// const PORT = 4000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
//
// const template = templateSource(TEMPLATE_DIR);
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
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//
//     const {query: {column_id}} = request;
//
//     if (typeof column_id === 'undefined' || !column_id) {
//         console.error('请输入准确的极客时间课程 ID');
//         response.status = 500;
//         response.body = '请输入准确的极客时间课程 ID';
//     }
//
//     const result = await new Promise((resolve, reject) => {
//         socket.write({
//             column_id
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         });
//     });
//
//     response.status = 200;
//     response.body = template(result);
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The client page is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十九课: 极客时间 detail 详情部分网页项目练习》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
