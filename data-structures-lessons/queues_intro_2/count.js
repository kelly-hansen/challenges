'use strict';
const { Queue } = require('../../structures');

function count(queue) {
    const q2 = new Queue();
    let result = 0;
    while (queue.peek() !== undefined) {
        q2.enqueue(queue.dequeue());
        result++;
    }
    while (q2.peek() !== undefined) {
        queue.enqueue(q2.dequeue());
    }
    return result;
}

module.exports = exports = count;
