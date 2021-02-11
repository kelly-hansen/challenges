'use strict';
const { Queue } = require('../../structures');

function snakeCase(charQueue) {
    const q2 = new Queue();
    while (charQueue.peek() !== undefined) {
        const value = charQueue.dequeue();
        if (value === ' ') {
            q2.enqueue('_');
        } else {
            q2.enqueue(value.toLowerCase());
        }
    }
    while (q2.peek() !== undefined) {
        charQueue.enqueue(q2.dequeue());
    }
}

module.exports = exports = snakeCase;
