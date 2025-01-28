// const interview = (round) => {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             const possibility = Math.random();
//             if (possibility <= 0.8) {
//                 resolve('success!');
//             } else {
//                 const error = new Error('failed!');
//                 error.round = round;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 888);
//     });
// }
//
// interview(1)
//     .then(() => {
//         return interview(2);
//     })
//     .then(() => {
//         return interview(3);
//     })
//     .then((result) => {
//         console.log(result, 'smile!');
//     })
//     .catch((error) => {
//         console.error(`cry at round ${error.round}!`);
//     });

console.log(`NodeJS《第九课: Promise 异步事件同步调用》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!`);


