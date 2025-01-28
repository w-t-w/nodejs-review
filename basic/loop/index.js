// const loop = {
//     timer: null,
//     queue: [],
//     timeoutQueue: [],
//     eventsQueue: [],
//     init() {
//         while (this.queue.length) {
//             const listenerCallback = this.queue.shift();
//             listenerCallback();
//         }
//         this.timer = setInterval(() => this.init(), 66);
//     },
//     addListener(listenerCallback) {
//         this.queue.push(listenerCallback);
//     },
//     stopListener() {
//         clearInterval(this.timer);
//     }
// };
//
// loop.init();
//
// const timer = setTimeout(() => {
//     loop.addListener(() => {
//         console.log('first loop add listener');
//         console.log(100 * 5);
//     });
//     clearTimeout(timer);
// }, 166);
//
// const timer_ano = setTimeout(() => {
//     loop.addListener(() => {
//         console.log('second loop add listener');
//         console.log(100 / 5);
//     });
//     clearTimeout(timer_ano);
// }, 1666);
//
// const timer_aside = setTimeout(() => {
//     loop.addListener(() => {
//         console.log('third loop add listener');
//         console.log(100 - 5);
//     });
//     clearTimeout(timer_aside);
// }, 2888);

console.log('NodeJS《第八课: 事件循环机制》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
