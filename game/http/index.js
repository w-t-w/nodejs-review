// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
// const querystring = require('querystring');
// const moduleLibrary = require('./lib');
//
// const PORT = 3000;
//
// const player_won_code = 1;
//
// const game_config = {
//     '-1': '你输了!',
//     0: '平局!',
//     1: '你赢了!'
// };
//
// let player_won_count = 0,
//     player_same_count = 0,
//     last_player_action = null,
//     player_won_sum = 3;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const server = http.createServer((request, response) => {
//     const req_url = request.url;
//     const {pathname, query} = url.parse(req_url);
//
//     if (pathname === '/favicon.ico') {
//         response.writeHead(400);
//         response.end('');
//         return false;
//     }
//
//     if (pathname === '/game') {
//         if (player_won_count >= player_won_sum || player_won_sum === 9) {
//             response.writeHead(500);
//             response.end('你太厉害了!我不跟你玩儿了!');
//             return false;
//         }
//
//         if (player_same_count >= player_won_sum) {
//             player_won_sum = 9;
//             response.writeHead(400);
//             response.end('你作弊!');
//             return false;
//         }
//
//         const {action} = querystring.parse(query);
//
//         if (last_player_action && last_player_action === action) {
//             player_same_count++;
//         } else {
//             player_same_count = 0;
//         }
//         last_player_action = action;
//
//         const result = moduleLibrary.game(action);
//         if (result === player_won_code) player_won_count++;
//
//         response.writeHead(200, {'Content-Type': 'application/json'});
//         response.end(game_config[result]);
//     }
//
//     if (pathname === '/') {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     }
// });
//
// server.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('NodeJS《第十二课: http 请求处理剪刀、石头与布的网页游戏》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
