const RPC = require('./rpc');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

module.exports = (request_schema, response_schema) => {
    return new RPC({
        encode(data, seq) {
            const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
            header.writeInt32BE(seq);
            const body = response_schema.encode(data);
            const body_length = body.length;
            header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
            return Buffer.concat([header, body]);
        },
        decode(buffer) {
            const seq = buffer.readInt32BE();
            const body = buffer.slice(PACKAGE_HEADER_LENGTH);
            const result = request_schema.decode(body);
            return {
                result,
                seq
            };
        },
        isReceiveComplete(buffer) {
            if (buffer.length <= PACKAGE_HEADER_LENGTH)
                return 0;
            const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
            return body_length + PACKAGE_HEADER_LENGTH;
        }
    });
};
