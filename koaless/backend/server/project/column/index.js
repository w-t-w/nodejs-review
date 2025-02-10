const path = require('path');
const fs = require('fs');
const protobuf = require('protocol-buffers');
const service = require('../../lib');
const columns = require('../../data/columns');

const PORT = 3000;

const PROTO_DIR = path.resolve(__dirname, '../../proto/columns.proto');

const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const server = service.rpc(schema.ColumnsRequest, schema.ColumnsResponse);

const tcp_server = server.createServer((request, response) => {
    const {body: {column_id}} = request;

    console.log(`课程详情的 ID 为: ${column_id}`);

    //...

    response.end({
        column: columns[1],
        recommend_columns: [columns[1], columns[2]]
    });
});

tcp_server.listen(PORT, () => {
    console.log(`The columns server is running at http://localhost:${PORT}!`);
});
