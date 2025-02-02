const net = require('net');

class RPC {
    constructor({encode, decode, isReceiveComplete}) {
        this.encode = encode;
        this.decode = decode;
        this.isReceiveComplete = isReceiveComplete;
    }

    createServer(callback) {
        const tcp_server = net.createServer(socket => {
            let buffer = null,
                request_buffer = null,
                package_length = 0;
            socket.on('data', data => {
                buffer = buffer && buffer.length ? Buffer.concat([buffer, data]) : data;
                while (buffer && buffer.length && (package_length = this.isReceiveComplete(buffer))) {
                    if (package_length === buffer.length) {
                        request_buffer = buffer;
                        buffer = null;
                    } else {
                        request_buffer = buffer.slice(0, package_length);
                        buffer = buffer.slice(package_length);
                    }
                    const {result, seq} = this.decode(request_buffer);

                    callback({
                        body: result,
                        socket,
                    }, {
                        end: (data) => {
                            const buffer_end = this.encode(data, seq);
                            socket.write(buffer_end);
                        }
                    });
                }
            });
        });

        return {
            listen() {
                return tcp_server.listen.apply(tcp_server, arguments);
            }
        }
    }
}

module.exports = RPC;
