'use strict';
const { Queue } = require('../../structures');

function unzip(queue) {
    const q1 = new Queue();
    const q2 = new Queue();
    for (let id = 0; queue.peek() !== undefined; id++) {
        if (!(id % 2)) {
            q1.enqueue(queue.dequeue());
        } else {
            q2.enqueue(queue.dequeue());
        }
    }
    while (q1.peek() !== undefined) {
        queue.enqueue(q1.dequeue());
    }
    while (q2.peek() !== undefined) {
        queue.enqueue(q2.dequeue());
    }
}

module.exports = exports = unzip;
