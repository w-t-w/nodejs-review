const http = require('http');
const path = require('path');
const fs = require('fs');

// 内存捕获守护与管理
// const leak = [];

const PORT = 3000;

const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');

const server = http.createServer((req, res) => {
    // 异常捕获守护与管理
    // console.log(window.location.href);
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 内存捕获守护与管理
    // leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
    res.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
    // 僵尸进程捕获守护与管理
    // while (true) {
    // }
});
