'use strict';

function readList(list, queue) {
    let current = list;
    while (current !== null) {
        if (current.data !== undefined) {
            queue.enqueue(current.data);
        }
        current = current.next;
    }
}

module.exports = exports = readList;
