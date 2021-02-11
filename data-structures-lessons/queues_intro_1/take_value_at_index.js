'use strict';

function takeValueAtIndex(queue, index) {
    if (queue.peek() === undefined) {
        return undefined;
    }
    for (let id = 0; id <= index; id++) {
        const value = queue.dequeue();
        if (id === index) {
            return value;
        }
        queue.enqueue(value);
    }
}

module.exports = exports = takeValueAtIndex;
