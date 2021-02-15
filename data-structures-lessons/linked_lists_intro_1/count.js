'use strict';

function count(list) {
    if (!list) {
        return 0;
    }
    let count = 1;
    let current = list.next;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}

module.exports = exports = count;
