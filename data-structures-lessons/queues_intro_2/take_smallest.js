'use strict';
const { Queue } = require('../../structures');

function takeSmallest(numberQueue) {
    if (numberQueue.peek() === undefined) {
        return Infinity;
    }
    let smallest;
    let smallestInd;
    const q2 = new Queue();
    for (let id = 0; numberQueue.peek() !== undefined; id++) {
        const value = numberQueue.dequeue();
        if (value < smallest || smallest === undefined) {
            smallest = value;
            smallestInd = id;
        }
        q2.enqueue(value);
    }
    for (let id = 0; q2.peek() !== undefined; id++) {
        if (id === smallestInd) {
            q2.dequeue();
        } else {
            numberQueue.enqueue(q2.dequeue());
        }
    }
    return smallest;
}

module.exports = exports = takeSmallest;
