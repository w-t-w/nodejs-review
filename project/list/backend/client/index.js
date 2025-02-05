// const path = require('path');
// const {renderToString} = require('react-dom/server');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
// const socket = require('./lib');
// const Page = require('../build/ssr_index');
// const templateSource = require('./template');
//
// const PORT = 4000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './source');
//
// const koa = new Koa();
//
// const template = templateSource(TEMPLATE_DIR);
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ctx => {
//     const {response} = ctx;
//     response.status = 400;
//     response.body = '';
// }));
//
// koa.use(KoaMount('/api', async ctx => {
//     const {request, response} = ctx;
//
//     const {query: {sort, filter}} = request;
//
//     const list_result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort: !isNaN(sort) ? sort : 0,
//             filter: !isNaN(filter) ? filter : 0,
//         }, (err, result) => {
//             err ? reject(err) : resolve(result);
//         });
//     });
//
//     response.status = 200;
//     response.type = 'application/json';
//     response.body = list_result.columns;
// }));
//
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//
//     const {query: {sort = 0, filter = 0}} = request;
//
//     const list_result = await new Promise((resolve, reject) => {
//         socket.write({
//             sort,
//             filter
//         }, (err, result) => {
//             err ? reject(err) : resolve(result);
//         });
//     });
//
//     response.status = 200;
//     response.body = template({
//         reactListString: renderToString(
//             Page(list_result.columns)
//         ),
//         reactListData: list_result.columns,
//         reactListSort: sort,
//         reactListFilter: filter,
//     });
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log(`NodeJS《第二十三课: 极客时间 list 列表部分网页项目练习》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!`);

