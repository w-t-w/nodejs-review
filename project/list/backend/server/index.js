const path = require('path');
const fs = require('fs');
const protobuf = require('protocol-buffers');
const server = require('./lib');
const data = require('./data');

const PORT = 3000;

const sort_config = {
    0: (a, b) => b.id - a.id,
    1: (a, b) => b.id - a.id,
    2: (a, b) => b.sub_count - a.sub_count,
    3: (a, b) => b.column_price - a.column_price
}

const PROTO_DIR = path.resolve(__dirname, '../proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const rpc = server({
    requestSchema: schema.ListRequest,
    responseSchema: schema.ListResponse
});

const tcp_server = rpc.createServer((request, response) => {
    const {body: {sort, filter}} = request;

    console.log(`课程列表-排序: ${sort}, 筛选: ${filter}`);

    //...

    response.end({
        columns: data.sort(sort_config[sort]).filter(item => filter ? item.type === filter : item)
    });
});

tcp_server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
