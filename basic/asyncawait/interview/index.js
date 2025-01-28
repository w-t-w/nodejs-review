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
//         }, 999);
//     });
// };
//
// (async () => {
//     try {
//         await interview(1);
//         await interview(2);
//         await interview(3);
//         console.log('success! smile!');
//     } catch (error) {
//         console.error(`cry at round ${error.round}!`);
//     }
// })();

console.log('NodeJS《第十课: async/await 异步事件同步调用》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
