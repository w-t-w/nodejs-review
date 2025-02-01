// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 3000;
//
// let index = 0,
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
// index = Math.floor(Math.random() * lessonIds_length);
// id = lessonIds[index];
// socket.write(encode(id));
//
// socket.on('data', (buffer) => {
//     const lesson = buffer.toString();
//     console.log(`ID: ${id} 所对应的课程名称为 ${lesson}`);
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// });
//
// function encode(id) {
//     const buffer = Buffer.alloc(4);
//     buffer.writeInt32BE(id);
//     return buffer;
// }

console.log('NodeJS《第十五课: rpc 调用-简易的半双工通信》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
