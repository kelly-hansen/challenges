'use strict';
const { Queue } = require('../../structures');

function sanitizeDigits(charQueue) {
    const q2 = new Queue();
    while (charQueue.peek() !== undefined) {
        const value = charQueue.dequeue();
        if (!isNaN(parseInt(value, 10))) {
            q2.enqueue(value);
        }
    }
    while (q2.peek() !== undefined) {
        charQueue.enqueue(q2.dequeue());
    }
}

module.exports = exports = sanitizeDigits;
