const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
