const net = require('net');
const {isReceiveComplete} = require("easy_sock");

class RPC {
    constructor({isReceiveComplete, encode, decode}) {
        this.isReceiveComplete = isReceiveComplete;
        this.encode = encode;
        this.decode = decode;
    }

    createServer(callback) {
        const tcp_server = net.createServer(socket => {
            let buffer = null,
                request_buffer = null,
                package_length = 0;
            socket.on('data', data => {
                buffer = buffer && buffer.length ? Buffer.concat([buffer, data]) : data;

                while ((buffer && buffer.length) && (package_length = this.isReceiveComplete(buffer))) {
                    if (package_length === buffer.length) {
                        request_buffer = buffer;
                        buffer = null;
                    } else {
                        request_buffer = buffer.slice(0, package_length);
                        buffer = buffer.slice(package_length);
                    }
                    const {seq, result} = this.decode(request_buffer);

                    callback({
                        body: result,
                        socket
                    }, {
                        end: (data) => {
                            const buffer_result = this.encode(data, seq);
                            socket.write(buffer_result);
                        }
                    })
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
