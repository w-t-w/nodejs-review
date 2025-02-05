// const cluster = require('cluster');
// // const os = require('os');
// const {heart} = require('./lib');
//
// if (cluster.isMaster) {
//     // for (let i = 0; i < (os.cpus().length / 2 + 1); i++) {
//     //     cluster.fork();
//     // }
//     // for (let i = 0; i < 1; i++) {
//     // 心跳检测,僵尸主进程捕获守护与管理
//     // let worker = cluster.fork(),
//     //     heart_same_count = 0;
//     // const timer_heart = setInterval(() => {
//     //     worker.send('ping!!!');
//     //     console.log('ping!!!');
//     //     heart_same_count++;
//     //     if (heart_same_count >= heart_zombie_count) {
//     //         heart_same_count = 0;
//     //         process.kill(worker.process.pid);
//     //         worker = null;
//     //         clearInterval(timer_heart);
//     //     }
//     // }, 500);
//     // worker.on('message', msg => {
//     //     if (msg === 'pong!!!') {
//     //         console.log('pong!!!');
//     //         heart_same_count--;
//     //     }
//     // });
//     // }
//     let worker = heart(cluster);
//     // 子进程异常关闭后重启
//     const timer_restart = setTimeout(() => {
//         cluster.on('exit', () => {
//             if (worker.timer_heart) {
//                 clearInterval(worker.timer_heart);
//             }
//             worker = heart(cluster);
//         });
//         clearTimeout(timer_restart);
//     }, 666);
// } else {
//     // 子进程异常捕获守护与管理
//     process.on('uncaughtException', (error) => {
//         console.log(`uncaughtException: ${error.message}!`);
//         process.exit(1);
//     });
//     // 子进程内存捕获守护与管理
//     const memory_timer = setInterval(() => {
//         const rss = process.memoryUsage().rss;
//         // console.log(`memory rss: ${(rss / 1024 / 1024).toFixed(2)} MB!`);
//         if (rss >= 700 * 1024 * 1024) {
//             console.log('oom!');
//             process.exit(1);
//             clearInterval(memory_timer);
//         }
//     }, 888);
//     // 心跳检测,僵尸子进程捕获守护与管理
//     process.on('message', msg => {
//         if (msg === 'ping!!!') process.send('pong!!!');
//     });
//     require('./src');
// }

console.log('NodeJS《第二十九课: 进程的守护与管理》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
