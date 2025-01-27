const EventEmitter = require('events').EventEmitter;

class GeekBang extends EventEmitter {
    constructor() {
        super();
        setInterval(() => this.emit('lessons', Math.floor(Math.random() * 100)), 666);
    }
}

module.exports = GeekBang;
