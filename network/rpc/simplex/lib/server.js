const net = require('net');

const PORT = 3000;

const server = net.createServer(socket => {
    socket.on('data', buffer => {
        console.log(buffer.toString());
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
