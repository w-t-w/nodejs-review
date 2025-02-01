// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// const PACKAGE_HEADER_LENGTH = 4,
//     PACKAGE_BODY_LENGTH = 4;
//
// let index = 0,
//     seq = 0,
//     id = null;
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
//     keepAlive: true,
// });
//
// // setInterval(() => {
// //     index = Math.floor(Math.random() * lessonIds_length);
// //     id = lessonIds[index];
// //     socket.write(encode(id));
// // }, 50);
//
// for (let i = 0; i < 200; i++) {
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// }
//
// socket.on('data', buffer => {
//     const {seq, result} = decode(buffer);
//     console.log(`包头 ${seq} 所对应的课程名称为 ${result}`);
// });
//
// function encode(id) {
//     const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
//     header.writeInt32BE(++seq);
//     console.log(`包头 ${seq} 所对应的课程 ID 为 ${id}`);
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     return Buffer.concat([header, body]);
// }
//
// function decode(buffer) {
//     const seq = buffer.readInt32BE();
//     const body = buffer.slice(PACKAGE_HEADER_LENGTH);
//     const result = body.toString();
//     return {
//         seq,
//         result
//     };
// }

console.log('NodeJS《第十五课: rpc 调用-普通的半双工通信》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
