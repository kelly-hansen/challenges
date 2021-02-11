'use strict';
const { Queue } = require('../../structures');

function takeBack(queue) {
    if (queue.peek() === undefined) {
        return undefined;
    }
    const q2 = new Queue();
    while (queue.peek() !== undefined) {
        q2.enqueue(queue.dequeue());
    }
    while (q2.peek() !== undefined) {
        const value = q2.dequeue();
        if (q2.peek() !== undefined) {
            queue.enqueue(value);
        } else {
            return value;
        }
    }
}

module.exports = exports = takeBack;
