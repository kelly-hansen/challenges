'use strict';

function takeSmaller(numberQueue) {
    if (numberQueue.peek() === undefined) {
        return undefined;
    }
    const value1 = numberQueue.dequeue();
    if (numberQueue.peek() === undefined) {
        return value1;
    }
    const value2 = numberQueue.dequeue();
    numberQueue.enqueue(value1 > value2 ? value1 : value2);
    return value1 < value2 ? value1 : value2;
}

module.exports = exports = takeSmaller;
