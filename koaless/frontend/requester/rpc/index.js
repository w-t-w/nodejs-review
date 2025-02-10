const Easy_Socket = require('easy_sock');
const fs = require('fs');
const protobuf = require('protocol-buffers');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

let socket = null;

const rpc = {
    compile: (config) => {
        const {ip, port, timeout, protobufFile, requestStruct, responseStruct} = config;

        const schema = protobuf(protobufFile);
        const request_schema = schema[requestStruct];
        const response_schema = schema[responseStruct];

        socket = new Easy_Socket({
            ip,
            port,
            timeout,
            keepAlive: true,
        });

        socket.encode = (data, seq) => {
            const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
            header.writeInt32BE(seq);
            const body = request_schema.encode(data);
            const body_length = body.length;
            header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
            return Buffer.concat([header, body]);
        };

        socket.decode = (buffer) => {
            const seq = buffer.readInt32BE();
            const body = buffer.slice(PACKAGE_HEADER_LENGTH);
            const result = response_schema.decode(body);
            return {
                result,
                seq
            };
        };

        socket.isReceiveComplete = (buffer) => {
            if (buffer.length <= PACKAGE_HEADER_LENGTH) return 0;
            const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
            return body_length + PACKAGE_HEADER_LENGTH;
        };
    },
    request: (data) => {
        return new Promise((resolve, reject) => {
            socket.write(data, (err, result) => {
                err ? reject(err) : resolve(result);
            })
        });
    }
};

module.exports = rpc;
