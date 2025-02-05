const heart_zombie_count = 3;

module.exports = function heart(cluster) {
    let worker = cluster.fork(),
        heart_same_count = 0;
    const timer_heart = setInterval(() => {
        console.log('ping!!!');
        worker.send('ping!!!');
        heart_same_count++;
        if (heart_same_count >= heart_zombie_count) {
            heart_same_count = 0;
            process.kill(worker.process.pid);
            worker = null;
            // heart(cluster);
            clearInterval(timer_heart);
        }
    }, 500);
    worker.on('message', msg => {
        if (msg === 'pong!!!') {
            console.log('pong!!!');
            heart_same_count--;
        }
    });
    worker.timer_heart = timer_heart;
    return worker;
};
