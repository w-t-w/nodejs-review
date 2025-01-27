// const interview = (callback, round) => {
//     let timer = null;
//
//     timer = setTimeout(() => {
//         const possibility = Math.random();
//         if (possibility <= 0.8) {
//             callback(null, 'success!');
//         } else {
//             const error = new Error('failed!');
//             error.round = round;
//             callback(error);
//         }
//
//         clearTimeout(timer);
//     }, 666);
// }
//
// const failedInterview = (err) => {
//     return console.error(`cry at round ${err.round}!`);
// }
//
// interview(err => {
//     if (err) return failedInterview(err);
//     interview(err => {
//         if (err) return failedInterview(err);
//         interview((err, result) => {
//             if (err) return failedInterview(err);
//             console.log(result, 'smile!');
//         }, 3);
//     }, 2);
// }, 1);

console.log('NodeJS《第七课: 完整的 callback 回调函数-面试示例》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
