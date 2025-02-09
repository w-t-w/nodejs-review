const http = require('http');
const url = require('url');
const querystring = require('querystring');
const articles = require('../../../../data/articles');

const server = http.createServer((request, response) => {

    const {query, pathname} = url.parse(request.url);

    if (pathname === '/favicon.ico') {
        response.writeHead(400);
        response.end('');
        return false;
    }

    const {column_id} = querystring.parse(query);

    console.log(`课程详情 ID 为 ${column_id}`);

    //...

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(articles));
});

module.exports = server;
