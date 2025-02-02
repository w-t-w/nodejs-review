// const path = require('path');
// const fs = require('fs');
// const protobuf = require('protocol-buffers');
//
// const PROTO_DIR = path.resolve(__dirname, './proto/blackmythwukong.proto');
//
// const schema = protobuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const buffer_first = Buffer.alloc(4);
// const buffer_ano = Buffer.from('hello GeekBang!');
// const buffer_aside = Buffer.from([1, 2, 3, 4]);
//
// console.log(buffer_first);
// console.log(buffer_ano);
// console.log(buffer_aside);
//
// buffer_first.writeInt8(20, 3);
// console.log(buffer_first);
//
// buffer_aside.writeInt16BE(512, 2);
// console.log(buffer_aside);
// // buffer_aside.writeInt32LE(512, 2);
// // console.log(buffer_aside);
// // buffer_aside.writeInt8(512, 2);
// buffer_aside.writeInt16LE(512, 2);
// console.log(buffer_aside);
//
// const black_myth_wukong = {
//     name: '黑神话悟空wtw',
//     age: 28,
//     gender: true,
//     hobby: {
//         favorite: 'Black Myth WuKong!Monkey King!Loong!',
//         sports: ['basketball', 'computer games', 'golf']
//     }
// };
// const encode_schema = schema.BlackMythWuKong.encode(black_myth_wukong);
// console.log(encode_schema);
// const decode_result = schema.BlackMythWuKong.decode(encode_schema);
// console.log(decode_result);

console.log('NodeJS《第十七课: Buffer 与 protocol-buffers 应用》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
