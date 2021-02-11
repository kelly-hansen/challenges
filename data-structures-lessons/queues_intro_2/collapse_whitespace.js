'use strict';
const { Queue } = require('../../structures');

function collapseWhitespace(charQueue) {
    const q2 = new Queue();
    while (charQueue.peek() !== undefined) {
        const value = charQueue.dequeue();
        if (value === ' ' || value === '\t' || value === '\n') {
            q2.enqueue(' ');
            while (charQueue.peek() === ' ' || charQueue.peek() === '\t' || charQueue.peek() === '\n') {
                charQueue.dequeue();
            }
        } else {
            q2.enqueue(value);
        }
    }
    while (q2.peek() !== undefined) {
        charQueue.enqueue(q2.dequeue());
    }
}

module.exports = exports = collapseWhitespace;
