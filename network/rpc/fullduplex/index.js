// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// const PACKAGE_HEADER_LENGTH = 8,
//     PACKAGE_SEQ_LENGTH = 4,
//     PACKAGE_BODY_LENGTH = 4;
//
// let index = 0,
//     seq = 0,
//     id = null,
//     package_length = 0,
//     request_buffer = null,
//     old_buffer = null;
//
// const lessonIds = [
//         "136797",
//         "136798",
//         "136799",
//         "136800",
//         "136801",
//         "136803",
//         "136804",
//         "136806",
//         "136807",
//         "136808",
//         "136809",
//         "141994",
//         "143517",
//         "143557",
//         "143564",
//         "143644",
//         "146470",
//         "146569",
//         "146582"
//     ],
//     lessonIds_length = lessonIds.length;
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
// });
//
// for (let i = 0; i < 200; i++) {
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// }
//
// socket.on('data', data => {
//     let buffer = old_buffer && old_buffer.length ? Buffer.concat([old_buffer, data]) : data;
//
//     while (package_length = isReceiveComplete(buffer)) {
//         request_buffer = buffer.slice(0, package_length);
//         buffer = buffer.slice(package_length);
//         const {result, seq} = decode(request_buffer);
//         console.log(`包头 ${seq} 所对应的课程名称为 ${result}`);
//     }
//
//     old_buffer = buffer;
// });
//
// function decode(buffer) {
//     const seq = buffer.readInt32BE();
//     const body = buffer.slice(PACKAGE_HEADER_LENGTH);
//     const result = body.toString();
//     return {
//         result,
//         seq
//     };
// }
//
// function encode(id) {
//     const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
//     header.writeInt32BE(++seq);
//     console.log(`包头 ${seq} 所对应的课程 ID 为 ${id}`);
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     const body_length = body.length;
//     header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
//     return Buffer.concat([header, body]);
// }
//
// function isReceiveComplete(buffer) {
//     if (buffer.length <= PACKAGE_HEADER_LENGTH)
//         return 0;
//     const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
//     return body_length + PACKAGE_HEADER_LENGTH;
// }

console.log('NodeJS《第十六课: rpc 调用-完整的全双工通信》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
