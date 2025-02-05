process.on('message', data => {
    console.log('child process received message!');
    console.log(data);

    console.log('child process send message!');
    process.send('hehehehehehehehehehe')
});
