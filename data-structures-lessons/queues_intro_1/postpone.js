'use strict';

function postpone(queue) {
    if (queue.peek() !== undefined) {
        queue.enqueue(queue.dequeue());
    }
}

module.exports = exports = postpone;
