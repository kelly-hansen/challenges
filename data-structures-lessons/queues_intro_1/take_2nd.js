'use strict';

function take2nd(queue) {
    if (queue.peek() === undefined) {
        return undefined;
    }
    queue.enqueue(queue.dequeue());
    return queue.dequeue();
}

module.exports = exports = take2nd;
