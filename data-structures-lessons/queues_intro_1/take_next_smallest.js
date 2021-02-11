'use strict';

function takeNextSmallest(numberQueue) {
    if (numberQueue.peek() === undefined) {
        return undefined;
    }
    let value = numberQueue.dequeue();
    while (numberQueue.peek() !== undefined) {
        if (numberQueue.peek() >= value) {
            return value;
        }
        numberQueue.enqueue(value);
        value = numberQueue.dequeue();
    }
    return value;
}

module.exports = exports = takeNextSmallest;
