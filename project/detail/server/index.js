const fs = require('fs');
const path = require('path');
const protobuf = require('protocol-buffers');
const server = require('./lib');
const columns = require('./data');

const PORT = 3000;

const PROTO_DIR = path.resolve(__dirname, '../proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const rpc = server(schema.ColumnRequest, schema.ColumnResponse);

const tcp_server = rpc.createServer((request, response) => {
    const {body: {column_id}} = request;

    console.log(`课程 ID 为 ${column_id}`);

    //...

    response.end({
        columns: columns[0],
        recommend_columns: [columns[1], columns[2]],
    });
});

tcp_server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
