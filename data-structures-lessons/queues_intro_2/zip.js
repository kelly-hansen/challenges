'use strict';
const { Queue } = require('../../structures');

function zip(queue) {
    const countQueue = new Queue();
    const q1 = new Queue();
    const q2 = new Queue();
    let count = 0;
    while (queue.peek() !== undefined) {
        countQueue.enqueue(queue.dequeue());
        count++;
    }
    for (let id = 0; id < Math.ceil(count / 2); id++) {
        q1.enqueue(countQueue.dequeue());
    }
    while (countQueue.peek() !== undefined) {
        q2.enqueue(countQueue.dequeue());
    }
    for (let id = 0; id < count; id++) {
        if (!(id % 2)) {
            queue.enqueue(q1.dequeue());
        } else {
            queue.enqueue(q2.dequeue());
        }
    }
}

module.exports = exports = zip;
